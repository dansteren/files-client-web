import * as Thumbnails from "./thumbnails";
import { FileType } from "./types";
import styles from "./FileIcon.module.css";

interface Props {
  file: FileType;
}

export default function FileIcon({ file }: Props) {
  const thumbnail =
    file.type === "dir" ? (
      <Thumbnails.Folder height="49" />
    ) : (
      <Thumbnails.File height="59" />
    );
  const displayName =
    file.name.length > 19
      ? `${file.name.substr(0, file.name.length - 16).trim()}...${file.name
          .substr(-8)
          .trim()}`
      : file.name;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>{thumbnail}</div>
      <span className={styles.filename}>{displayName}</span>
    </div>
  );
}
