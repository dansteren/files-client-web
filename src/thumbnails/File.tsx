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
      viewBox="0 0 95 123"
    >
      <path
        d="M5 9C2.23858 9 0 11.2386 0 14V118C0 120.761 2.23858 123 5 123H81C83.7614 123 86 120.761 86 118V42L53 9H5Z"
        fill="#F4F4F4"
      />
      <g filter="url(#filter0_d)">
        <path
          d="M53 9V37C53 39.7614 55.2386 42 58 42H86L53 9Z"
          fill="#F4F4F4"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="42"
          y="0"
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
