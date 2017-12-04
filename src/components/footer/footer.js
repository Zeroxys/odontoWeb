import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footerInfoContent">
        <section className="footerInfo">
          <h2>Acerca de</h2>
          <p>Thank you for visiting our site! You are at the right place! We are focused on providing integrated solutions and services to customers around the world. Putting our clients’ interests first, we work hard to exceed your expectations.
We can meet the requirements even of the whimsical clients. Thanks for your choice!</p>
        </section>

        <section className="footerInfo">
          <h2>Noticias</h2>
          <p>Thank you for visiting our site! You are at the right place! We are focused on providing integrated solutions and services to customers around the world. Putting our clients’ interests first, we work hard to exceed your expectations.
We can meet the requirements even of the whimsical clients. Thanks for your choice!</p>
        </section>

        <section className="footerInfo">
          <h2>Contactanaos</h2>
          <address>
            <span class="fa fa-2x fa-map-marker" aria-hidden="true"></span>
            <p>Av Siempre viva</p>
          </address>
          <div>
            <span class="fa fa-2x fa-mobile" aria-hidden="true"></span>
            <p>Cel: 1234123123</p>
          </div>
        </section>
      </div>

      <div>Dentista © 2017 · Privacy Policy</div>
    </footer>
  )
}

export default Footer
