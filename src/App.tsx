import './styles.css'

export default function App() {
  return (
    <div className="App">
      <nav className="sidebar">
        <div className="sidebar-header"></div>
        <ul>
          <li className="active">
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">AirDrop</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Recents</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Applications</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Desktop</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Documents</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Downloads</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Pictures</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Portal</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Screenshots</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Repos</span>
          </li>
          <li>
            <svg viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 4C1 2.89543 1.89543 2 3 2H4.29289C4.74565 2 5.17986 2.17986 5.5 2.5C5.82014 2.82014 6.25435 3 6.70711 3H13C14.1046 3 15 3.89543 15 5V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12V4ZM14 5V6H2V4C2 3.44772 2.44772 3 3 3H4.29289C4.48043 3 4.66028 3.0745 4.79289 3.20711C5.30057 3.71479 5.98914 4 6.70711 4H13C13.5523 4 14 4.44772 14 5ZM2 7V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V7H2Z"
                fill="currentColor"
              />
            </svg>
            <span className="no-select">Home</span>
          </li>
        </ul>
      </nav>
      <section id="main">
        <header>
          <button type="button">
            <svg className="back" viewBox="0 0 20 20" fill="none">
              <path
                d="M13.0152 3.51517L6.48485 10.0151L13.0152 16.4848"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button type="button">
            <svg
              className="forward"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.98485 3.51517L13.5151 10.0151L6.98484 16.4848"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div id="path-selector">AirDrop</div>
          <button type="button">
            <svg className="search" viewBox="0 0 20 20" fill="none">
              <circle
                cx="9.5"
                cy="8.5"
                r="5.75"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M13.5 13L17.7929 17.2071"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>
        <main></main>
      </section>
      <div className="main"></div>
    </div>
  )
}
