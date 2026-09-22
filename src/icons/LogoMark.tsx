export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      <path d="M22 2 40 8v13c0 11-7.6 18.6-18 21C11.6 39.6 4 32 4 21V8z" fill="#CE2222" />
      <path
        d="M14 22.5 19.5 28 31 16.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
