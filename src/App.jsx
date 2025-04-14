import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div className="logo">cv insights</div>
      </nav>
      <main>
        <div className="subtext">This application showcases the <strong>cv insights</strong> resume parser and its ability to parse information from a resume PDF.</div>
        <div className="upload-file">
          <div className="upload-file-subtext">
            Browse a <strong>pdf</strong> file or drop it here
          </div>
          <div className="upload-file-text"><span role="img" aria-label="lock" style={{ marginRight: '6px' }}>🔒</span>File data will always be secured</div>
          <button className="browse-file-button">Browse File</button>
        </div>
        <div className="credits">Project by <strong>Kushagra Singh </strong> and <strong>Abhuday Sudhir</strong></div>
      </main>
    </>
  )
}

export default App
