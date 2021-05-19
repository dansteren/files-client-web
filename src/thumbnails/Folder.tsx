import { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties;
  width?: string;
  height?: string;
  className?: string;
}

const Folder: FC<Props> = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 118 98"
    >
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H33C40 0 45 9 51 9H108C113.523 9 118 13.4772 118 19V88C118 93.5228 113.523 98 108 98H10C4.47715 98 0 93.5228 0 88V10Z"
        fill="url(#paint0_linear)"
      />
      <rect y="16" width="118" height="82" rx="10" fill="url(#paint1_linear)" />
      <path
        d="M1.99927 94C1.53698 93.3845 1.14405 92.714 0.832092 92H117.168C116.856 92.714 116.463 93.3845 116.001 94H1.99927Z"
        fill="black"
        fillOpacity="0.08"
      />
      <path
        d="M0.200036 90C0.0688605 89.3538 0 88.6849 0 88H118C118 88.6849 117.931 89.3538 117.8 90H0.200036Z"
        fill="black"
        fillOpacity="0.08"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="59"
          y1="4.5"
          x2="59"
          y2="27.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9E9E9E" />
          <stop offset="1" stopColor="#252525" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="59"
          y1="88"
          x2="59"
          y2="98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9E9E9E" />
          <stop offset="1" stopColor="#616161" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Folder;
