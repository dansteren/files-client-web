export default function Folder({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
        fill="currentColor"
      />
    </svg>
  );
}
