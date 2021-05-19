import * as Icons from "./icons";
import styles from "./Sidebar.module.css";

interface Favorite {
  id: string;
  name: string;
}

interface Props {
  favorites: Favorite[];
}

export default function Sidebar({ favorites }: Props) {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.header}></div>
      <span className={styles.groupTitle}>Favorites</span>
      <ul>
        {favorites.map((favorite) => {
          return (
            <li key={favorite.id}>
              <Icons.Folder />
              <span className={styles.noSelect}>{favorite.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
