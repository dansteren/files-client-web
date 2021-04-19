import './styles.css'
import * as Icons from './icons'

export default function App() {
  return (
    <div className="App">
      <nav className="sidebar">
        <div className="sidebar-header"></div>
        <ul>
          <li className="active">
            <Icons.Folder />
            <span className="no-select">AirDrop</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Recents</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Applications</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Desktop</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Documents</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Downloads</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Pictures</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Portal</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Screenshots</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Repos</span>
          </li>
          <li>
            <Icons.Folder />
            <span className="no-select">Home</span>
          </li>
        </ul>
      </nav>
      <section id="main">
        <header>
          <button type="button">
            <Icons.BackArrow />
          </button>
          <button type="button">
            <Icons.Forward />
          </button>
          <div id="path-selector">AirDrop</div>
          <button type="button">
            <Icons.Search />
          </button>
        </header>
        <main></main>
      </section>
      <div className="main"></div>
    </div>
  )
}
