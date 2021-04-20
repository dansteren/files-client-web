import './styles.css'
import * as Icons from './icons'
import * as Thumbnails from './thumbnails'
import Sidebar from './Sidebar'
import DB from './mockDB'

export default function App() {
  return (
    <div className="App">
      <Sidebar favorites={DB.favorites} />
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
        <main>
          <Thumbnails.Folder height="49" />
          <Thumbnails.Folder height="49" />
          <Thumbnails.Folder height="49" />
          <Thumbnails.Folder height="49" />
          <Thumbnails.Folder height="49" />
        </main>
      </section>
    </div>
  )
}
