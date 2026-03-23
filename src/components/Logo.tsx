export default function Logo({ size = 44 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GoldSilverSelect logo"
    >
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.46}
        stroke="#C5A44E"
        strokeWidth="1.2"
        fill="none"
      />
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.36}
        stroke="#C5A44E"
        strokeWidth="1.2"
        fill="none"
      />
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.26}
        stroke="#C5A44E"
        strokeWidth="1.2"
        fill="none"
      />
      <text
        x={cx}
        y={cy + size * 0.1}
        textAnchor="middle"
        fill="#C5A44E"
        fontSize={size * 0.36}
        fontFamily="Georgia, serif"
      >
        G
      </text>
    </svg>
  );
}
