import "./styles.css";
import * as Icons from "./icons";
import Sidebar from "./Sidebar";
import FileIcon from "./FileIcon";
import DB from "./mockDB";

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
          {DB.files.map((file) => (
            <FileIcon file={file} key={file.id} />
          ))}
        </main>
      </section>
    </div>
  );
}
