import React from 'react'

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navSocial">
        <div className="socialContent">
          <div className="address">
            <span class="fa fa-phone" aria-hidden="true"></span><p>01-800-123-22-22</p>
            <span class="fa fa-envelope-o" aria-hidden="true"></span><p>dentista@mail.com</p>
            <span class="fa fa-map-marker" aria-hidden="true"></span><p>Plutarco Elias calles, C.P 123, col Indeco</p>
          </div>

          <div className="socialIcons">
            <span class="fa fa-facebook circle" aria-hidden="true"></span>
            <span class="fa fa-instagram circle" aria-hidden="true"></span>
            <span class="fa fa-twitter circle" aria-hidden="true"></span>
          </div>
        </div>
      </div>
      <div className="navContent">
        <h3>Dr. Dentista</h3>
        <ul>
          <li><a href="/some">Home</a></li>
          <li><a href="/some">About</a></li>
          <li><a href="/some">News</a></li>
          <li><a href="/some">Gallery</a></li>
          <li><a href="/some">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
