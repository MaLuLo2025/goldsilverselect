/**
 * SGI YouTube Feed
 * Fetches Tory Aggeler's Silver Gold Insights channel videos via the
 * YouTube Data API v3 and renders them into placeholder elements on
 * Home and Education pages.
 *
 * Requires window.SGI_YOUTUBE_API_KEY to be set (see config.js).
 *
 * Strategy:
 *   - Fetches uploads playlist (newest first), batches detail call for durations
 *   - Caches results in sessionStorage for 1 hour to minimize API calls
 *   - Renders Home page videos preview (top 3) and Education page
 *     (Featured = newest, Recent = next 2, Library = older evergreen)
 *   - Gracefully falls back to a loading state if the API call fails
 *
 * Phase 1 limitation: cards link directly to YouTube. When per-video
 * transcript pages exist (Phase 2), card destinations switch in
 * a single config change inside renderCard().
 */

(function () {
  const CHANNEL_ID = 'UCXlPmwPOEWWdVGh67aPqiNw';
  // YouTube uploads playlist IDs are derived by replacing the leading
  // 'UC' on a channel ID with 'UU'.
  const UPLOADS_PLAYLIST_ID = 'UU' + CHANNEL_ID.substring(2);
  const CACHE_KEY = 'sgi-youtube-cache-v1';
  const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
  const MAX_VIDEOS = 50; // YouTube API caps at 50/page; one call is enough for most channels

  // --- Cache helpers --------------------------------------------------

  function readCache() {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.timestamp || !parsed.data) return null;
      if (Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
      return parsed.data;
    } catch (e) {
      return null;
    }
  }

  function writeCache(data) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: data,
      }));
    } catch (e) {
      // Quota errors etc. — safe to ignore
    }
  }

  // --- API fetching ---------------------------------------------------

  async function fetchPlaylistItems(apiKey) {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems' +
      '?part=snippet' +
      '&playlistId=' + UPLOADS_PLAYLIST_ID +
      '&maxResults=' + MAX_VIDEOS +
      '&key=' + apiKey;
    const res = await fetch(url);
    if (!res.ok) throw new Error('playlistItems failed: ' + res.status);
    return res.json();
  }

  async function fetchVideoDetails(apiKey, videoIds) {
    if (videoIds.length === 0) return { items: [] };
    const url = 'https://www.googleapis.com/youtube/v3/videos' +
      '?part=contentDetails' +
      '&id=' + videoIds.join(',') +
      '&key=' + apiKey;
    const res = await fetch(url);
    if (!res.ok) throw new Error('videos failed: ' + res.status);
    return res.json();
  }

  async function loadVideos() {
    const cached = readCache();
    if (cached) return cached;

    const apiKey = window.SGI_YOUTUBE_API_KEY;
    if (!apiKey || apiKey === 'REPLACE_WITH_YOUR_API_KEY') {
      console.warn('[SGI YouTube] API key not configured');
      return [];
    }

    try {
      const playlistData = await fetchPlaylistItems(apiKey);
      const items = playlistData.items || [];
      if (items.length === 0) return [];

      const videoIds = items
        .map(item => item.snippet && item.snippet.resourceId && item.snippet.resourceId.videoId)
        .filter(Boolean);

      const detailsData = await fetchVideoDetails(apiKey, videoIds);
      const durations = {};
      (detailsData.items || []).forEach(item => {
        durations[item.id] = parseISODuration(item.contentDetails.duration);
      });

      const videos = items.map(item => {
        const sn = item.snippet;
        const videoId = sn.resourceId.videoId;
        return {
          id: videoId,
          title: sn.title,
          description: sn.description || '',
          publishedAt: sn.publishedAt,
          thumbnail: pickThumbnail(sn.thumbnails),
          duration: durations[videoId] || '',
          slug: makeSlug(sn.title),
        };
      });

      // Filter out hidden/deleted videos (YouTube returns these as titles "Private video"
      // or "Deleted video" with no real thumbnail)
      const filtered = videos.filter(v =>
        v.title !== 'Private video' &&
        v.title !== 'Deleted video' &&
        v.thumbnail
      );

      writeCache(filtered);
      return filtered;
    } catch (err) {
      console.error('[SGI YouTube] Failed to load:', err);
      return [];
    }
  }

  // --- Helpers --------------------------------------------------------

  function pickThumbnail(thumbnails) {
    if (!thumbnails) return null;
    return (thumbnails.maxres && thumbnails.maxres.url) ||
           (thumbnails.standard && thumbnails.standard.url) ||
           (thumbnails.high && thumbnails.high.url) ||
           (thumbnails.medium && thumbnails.medium.url) ||
           (thumbnails.default && thumbnails.default.url) ||
           null;
  }

  function parseISODuration(iso) {
    // Converts "PT12M14S" → "12:14"; "PT1H5M30S" → "1:05:30"
    const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!m) return '';
    const h = parseInt(m[1] || 0, 10);
    const min = parseInt(m[2] || 0, 10);
    const s = parseInt(m[3] || 0, 10);
    const pad = (n) => String(n).padStart(2, '0');
    if (h > 0) return h + ':' + pad(min) + ':' + pad(s);
    return min + ':' + pad(s);
  }

  function makeSlug(title) {
    return String(title)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 80);
  }

  function formatDate(iso) {
    const date = new Date(iso);
    const diffDays = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return diffDays + ' days ago';
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return Math.floor(diffDays / 7) + ' weeks ago';
    if (diffDays < 60) return '1 month ago';
    if (diffDays < 365) return Math.floor(diffDays / 30) + ' months ago';
    const years = Math.floor(diffDays / 365);
    return years + (years === 1 ? ' year ago' : ' years ago');
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getCardLink(video) {
    // Phase 1: link to YouTube directly. Phase 2 (per-video pages with
    // transcripts): change to '/preview/sgi/education/' + video.slug
    return 'https://www.youtube.com/watch?v=' + video.id;
  }

  function getCardLinkAttrs(video) {
    // External (YouTube) links open in new tab; internal (per-video page) won't.
    const href = getCardLink(video);
    const isExternal = href.indexOf('http') === 0;
    return isExternal
      ? 'href="' + href + '" target="_blank" rel="noopener"'
      : 'href="' + href + '"';
  }

  // --- Renderers ------------------------------------------------------

  function renderFeaturedEmbed(video, container) {
    var origin = (window.location.origin && window.location.origin !== 'null')
      ? window.location.origin
      : 'https://thegoldwindow.ai';
    container.innerHTML =
      '<iframe ' +
        'src="https://www.youtube.com/embed/' + encodeURIComponent(video.id) +
          '?enablejsapi=1&origin=' + encodeURIComponent(origin) + '" ' +
        'title="' + escapeHtml(video.title) + '" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
        'referrerpolicy="strict-origin-when-cross-origin" ' +
        'allowfullscreen ' +
        'frameborder="0" ' +
        'loading="lazy"></iframe>';
  }

  function renderFeaturedMeta(video) {
    const titleEl = document.getElementById('sgi-yt-featured-title');
    const descEl = document.getElementById('sgi-yt-featured-desc');
    const metaEl = document.getElementById('sgi-yt-featured-meta');

    if (titleEl) titleEl.textContent = video.title;
    if (descEl) {
      // Use the first paragraph or first 280 chars of the YouTube description
      const firstPara = (video.description.split(/\n\n/)[0] || '').trim();
      const truncated = firstPara.length > 280
        ? firstPara.slice(0, 280).replace(/\s\S*$/, '') + '…'
        : firstPara;
      descEl.textContent = truncated || 'Click play to watch.';
    }
    if (metaEl) {
      const parts = [];
      if (video.duration) parts.push(video.duration);
      parts.push(formatDate(video.publishedAt));
      metaEl.textContent = parts.join(' · ');
    }
  }

  function archiveCardHtml(video) {
    return '' +
      '<a class="e-vid-card" ' + getCardLinkAttrs(video) + '>' +
        '<div class="e-vid-thumb" style="background-image: url(\'' + escapeHtml(video.thumbnail) + '\'); background-size: cover; background-position: center;">' +
          '<div class="e-vid-play"></div>' +
          (video.duration ? '<div class="e-vid-duration">' + escapeHtml(video.duration) + '</div>' : '') +
        '</div>' +
        '<div class="e-vid-body">' +
          '<div class="e-vid-cat">Tory Aggeler</div>' +
          '<div class="e-vid-title">' + escapeHtml(video.title) + '</div>' +
          '<div class="e-vid-date">' + escapeHtml(formatDate(video.publishedAt)) + '</div>' +
        '</div>' +
      '</a>';
  }

  function previewCardHtml(video) {
    return '' +
      '<a class="video-card" ' + getCardLinkAttrs(video) + '>' +
        '<div class="video-thumb" style="background-image: url(\'' + escapeHtml(video.thumbnail) + '\'); background-size: cover; background-position: center;">' +
          '<div class="video-play"></div>' +
        '</div>' +
        '<div class="video-body">' +
          '<div class="video-meta">' + (video.duration ? escapeHtml(video.duration) + ' · ' : '') + escapeHtml(formatDate(video.publishedAt)) + '</div>' +
          '<div class="video-title">' + escapeHtml(video.title) + '</div>' +
          '<div class="video-duration">Tory Aggeler</div>' +
        '</div>' +
      '</a>';
  }

  // --- Page integrations ----------------------------------------------

  async function renderEducationPage() {
    const featuredEmbed = document.getElementById('sgi-yt-featured-embed');
    const archive = document.getElementById('sgi-yt-archive');
    if (!featuredEmbed && !archive) return;

    const videos = await loadVideos();
    if (videos.length === 0) {
      if (featuredEmbed) {
        featuredEmbed.innerHTML = '<div class="e-featured-placeholder"><div>Unable to load videos. Please try again later.</div></div>';
      }
      if (archive) {
        archive.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);font-size:14px;padding:40px 0;">Unable to load videos. Please try again later.</p>';
      }
      return;
    }

    // Featured = videos[0] (most recent)
    if (featuredEmbed) renderFeaturedEmbed(videos[0], featuredEmbed);
    renderFeaturedMeta(videos[0]);

    // Archive = videos[1..] — every other video, sorted newest first.
    // Tory's "rotation" is the natural result of date ordering: when a new
    // video drops, it slots in as videos[0] and everything shifts down by one.
    // No video is removed from the page (preserves per-video SEO over time).
    if (archive) {
      const others = videos.slice(1);
      if (others.length === 0) {
        archive.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);font-size:14px;padding:40px 0;">More videos coming soon.</p>';
      } else {
        archive.innerHTML = others.map(archiveCardHtml).join('');
      }
    }
  }

  async function renderHomePage() {
    const previewGrid = document.getElementById('sgi-yt-preview');
    if (!previewGrid) return;

    const videos = await loadVideos();
    if (videos.length === 0) return;

    const preview = videos.slice(0, 3);
    previewGrid.innerHTML = preview.map(previewCardHtml).join('');
  }

  // --- Entrypoint -----------------------------------------------------

  function init() {
    renderEducationPage();
    renderHomePage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
