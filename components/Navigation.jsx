"use client";

import Link from 'next/link'
import { use, useState } from 'react';

function Navigation() {

  const [navBG, setNavBG] = useState(false);
  const [imgNav, setimgNav] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [menuWeb, setMenuWeb] = useState(false);

  const toggleMenu = () => {
    setMenuMobile(!menuMobile);
    setMenuWeb(!menuMobile);
    window.scrollTo(0, 0);
  };

  const changeBackground = () => {
    //console.log(window.scrollY);
    if(window.scrollY >= 350) {
      setNavBG(true);
      setimgNav(true);
    } else {
      setNavBG(false);
      setimgNav(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <div>
      <div className={menuMobile ? 'menuMobile active' : 'menuMobile'}>
            <div>
                <Link onClick={toggleMenu} className="text-menu-mobile" href="/">INICIO</Link>
            </div>
            <div>
                <Link onClick={toggleMenu} className="text-menu-mobile" href="/nosotros">NOSOTROS</Link>
            </div>
            <div>
                <button onClick={toggleMenu} className="btn-orange-nav-mobile" type="button"><Link className="text-menu-mobile" href="/contacto">CONTACTO</Link></button>
            </div>
      </div>
      <div className={menuWeb ? 'menuWeb active' : 'menuWeb'}>
          <nav className={navBG ? 'navBG active' : 'navBG'}>
          <nav className="navbar navbar-expand-lg navBG">
            <div className="container  btnMenu">
                <button className="buttonNav" onClick={toggleMenu}>     
                <img className="menuBtn" src="\menu.svg" alt="Menu"/>
                </button>
                <img className={imgNav ? 'imgNav active' : 'imgNav'} src="\Logo-Arvien.svg" alt="Arvien Logo" height="100%"/>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link1" href="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link1" href="/nosotros">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn-orange-nav" type="button"><Link className="nav-link1" href="/contacto">CONTACTO</Link></button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </nav>
      </div>
    </div>
  )
}

export default Navigation