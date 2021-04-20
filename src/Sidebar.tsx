import * as Icons from './icons'
import './Sidebar.css'

interface Favorite {
  id: string
  name: string
}

interface Props {
  favorites: Favorite[]
}

export default function Sidebar({ favorites }: Props) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header"></div>
      <span className="sidebar-group-title">Favorites</span>
      <ul>
        {favorites.map((favorite) => {
          return (
            <li key={favorite.id}>
              <Icons.Folder />
              <span className="no-select">{favorite.name}</span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
