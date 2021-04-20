import { CSSProperties, FC } from 'react'

interface Props {
  style?: CSSProperties
  width?: string
  height?: string
  className?: string
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
        d="M59 16H10C4.47715 16 0 20.4772 0 26V88C0 93.5228 4.47715 98 10 98H59V16Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M59 16H108C113.523 16 118 20.4772 118 26V88C118 93.5228 113.523 98 108 98H59V16Z"
        fill="url(#paint3_linear)"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="16"
        width="118"
        height="82"
      >
        <rect y="16" width="118" height="82" rx="10" fill="#666666" />
      </mask>
      <g mask="url(#mask0)">
        <line
          y1="89"
          x2="118"
          y2="89"
          stroke="black"
          strokeOpacity="0.08"
          strokeWidth="2"
        />
        <line
          y1="93"
          x2="118"
          y2="93"
          stroke="black"
          strokeOpacity="0.08"
          strokeWidth="2"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="59"
          y1="4.5"
          x2="59"
          y2="27.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#666666" />
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
          <stop stopColor="#666666" />
          <stop offset="1" stopColor="#424242" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="10"
          y1="54"
          x2="1.53416e-06"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="108"
          y1="54"
          x2="118"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default Folder
