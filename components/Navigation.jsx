"use client";

import Link from 'next/link'
import { use, useState } from 'react';
import Image from 'next/image'

function Navigation() {

  const [navBG, setNavBG] = useState(false);
  const [ImageNav, setImageNav] = useState(false);
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
      setImageNav(true);
    } else {
      setNavBG(false);
      setImageNav(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <div>
      <div className={menuMobile ? 'menuMobile active' : 'menuMobile'}>
            <div>
              <Image className='' src="\Logo-Arvien.svg" alt="Arvien Logo" width={0} height={0} style={{ width: '90%', height: '90%' }}/>
            </div>
            <div>
                <Link onClick={toggleMenu} className="text-menu-mobile" href="/">INICIO</Link>
            </div>
            <div>
                <Link onClick={toggleMenu} className="text-menu-mobile" href="/nosotros">NOSOTROS</Link>
            </div>
      </div>
      <div className={menuWeb ? 'menuWeb active' : 'menuWeb'}>
          <nav className={navBG ? 'navBG active' : 'navBG'}>
          <nav className="navbar navbar-expand-lg navBG">
            <div className="container btnMenu">
                <button className="buttonNav" onClick={toggleMenu} width="100%">     
                  <Image className="menuBtn" src="\menu.svg" alt="Menu" width={1000} height={1000} style={{ width: 'auto'}}/>
                </button>
                <Image className={ImageNav ? 'ImageNav active' : 'ImageNav'} src="\Logo-Arvien2.svg" alt="Arvien Logo" width={0} height={0} style={{ width: 'auto', height: '60px' }}/>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link1" href="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link1" href="/nosotros">Nosotros</Link>
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