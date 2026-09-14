// Counts FAQ entries and blog posts by reading the actual data arrays,
// not by grepping for "question:" (which also matches the FAQItem interface
// declaration in src/lib/faq.ts and inflates the count by one).
import { faqCategories } from "../src/lib/faq";
import { blogPosts } from "../src/lib/blog";

const totalFaqs = faqCategories.reduce((sum, cat) => sum + cat.items.length, 0);

console.log("FAQ counts by category:");
for (const cat of faqCategories) {
  console.log(`  ${cat.id.padEnd(20)} ${String(cat.items.length).padStart(4)}  (${cat.title})`);
}
console.log(`  ${"TOTAL".padEnd(20)} ${String(totalFaqs).padStart(4)}`);

console.log("\nBlog post count:");
console.log(`  ${"TOTAL".padEnd(20)} ${String(blogPosts.length).padStart(4)}`);
