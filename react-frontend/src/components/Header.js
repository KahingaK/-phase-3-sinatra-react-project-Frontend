import React from 'react'

function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <nav>
    <header>
      <h1>PROJECT MANAGEMENT APP</h1>
      
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          checked={isDarkMode}
          onChange={(e) => onToggleDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle-dark-mode"></label>
      </div>
    </header>
    </nav>
  )
}

export default Header