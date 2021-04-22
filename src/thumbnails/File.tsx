import { CSSProperties, FC } from 'react'

interface Props {
  style?: CSSProperties
  width?: string
  height?: string
  className?: string
}

const File: FC<Props> = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 86 114"
    >
      <path
        d="M5 0C2.23858 0 0 2.23858 0 5V109C0 111.761 2.23858 114 5 114H81C83.7614 114 86 111.761 86 109V33L53 0H5Z"
        fill="#F4F4F4"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="86"
        height="114"
      >
        <path d="M0 0H53L86 33V114H0V0Z" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <g filter="url(#filter0_d)">
          <path
            d="M53 0V28C53 30.7614 55.2386 33 58 33H86L53 0Z"
            fill="#F4F4F4"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="42"
          y="-9"
          width="53"
          height="53"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-1" dy="1" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default File
