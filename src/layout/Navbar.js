import React from 'react'

function Navbar({icon,title}) {
  return (
    <nav className='navigation'>
     <i className={icon}></i>
     <h1 className='navigation-header'>{title}</h1>
    </nav>
  )
}
Navbar.defaultProps={
    icon: "nav-icon fa-solid fa-film fa-2x",
    title: "Movie-Suggestion"
}
export default Navbar