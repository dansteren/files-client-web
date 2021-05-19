import { CSSProperties } from "react";
import styles from "./Loader.module.css";

interface Props {
  className?: string;
  width?: number;
  duration?: number;
}

export default function Loader({
  width = 100,
  duration = 1.5,
  className,
}: Props) {
  const style = {
    "--width": `${width}px`,
    "--duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div
      className={[className, styles.container].filter(Boolean).join(" ")}
      style={style}
    >
      <span className={[styles.common, styles.one].join(" ")}></span>
      <span className={[styles.common, styles.two].join(" ")}></span>
      <span className={[styles.common, styles.three].join(" ")}></span>
      <span className={[styles.common, styles.four].join(" ")}></span>
      <span className={[styles.common, styles.five].join(" ")}></span>
      <span className={[styles.common, styles.six].join(" ")}></span>
    </div>
  );
}
