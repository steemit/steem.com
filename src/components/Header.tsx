'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  variant?: 'white' | 'blue';
}

export default function Header({ variant = 'white' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isBlueVariant = variant === 'blue';
  const logoColor = isBlueVariant ? 'Steem_Logo_Blue.png' : 'Steem_Logo_White.png';
  const textColor = isBlueVariant ? 'text-blue' : 'text-white';
  const hamburgerClass = isBlueVariant ? 'hamburger-blue' : '';

  return (
    <header className="banner py-4 my-lg-2">
      <div id="top" className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <Link href="/" className="brand">
              <Image
                className="img-fluid img-brand"
                src={`/images/${logoColor}`}
                alt="Steem Logo"
                width={120}
                height={40}
              />
            </Link>
            <div className="d-flex align-items-center">
              <nav className={`nav-primary d-none d-lg-block mr-3 ${textColor}`}>
                <div className="menu-primary-container">
                  <ul className="nav d-flex">
                    <li>
                      <Link href="/developers/">
                        Developers
                      </Link>
                    </li>
                    <li>
                      <Link href="/entrepreneurs/">
                        Entrepreneurs
                      </Link>
                    </li>
                    <li>
                      <Link href="/social-users/">
                        Social Users
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className={`hamburger ${hamburgerClass} ${isMobileMenuOpen ? 'state-active' : ''}`} onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      <div 
        id="mobileOverlay" 
        className={`text-white p-lg-3 ${isMobileMenuOpen ? 'state-active' : ''}`}
      >
        <div className="container">
          <div className="d-none d-lg-flex hamburger ml-auto mt-3" onClick={closeMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <div className="menu-primary-container">
              <ul className="nav nav-mobile mt-8 d-lg-none">
                <li className="menu-item">
                  <Link href="/developers/" onClick={closeMobileMenu}>
                    Developers
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/entrepreneurs/" onClick={closeMobileMenu}>
                    Entrepreneurs
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/social-users/" onClick={closeMobileMenu}>
                    Social Users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav>
            <div className="menu-secondary-container">
              <ul className="mt-3 nav nav-footer justify-content-center translucent">
                <li className="menu-item">
                  <Link href="/about/" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/brand/" onClick={closeMobileMenu}>
                    Brand
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/faq/" onClick={closeMobileMenu}>
                    FAQ
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact/" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="mobileFooter" className="container">
          <hr className="border border-bottom-0 border-offwhite w-100 d-lg-none"/>
          <div className="row justify-content-center justify-content-lg-start text-center text-lg-left">
            <div className="col-8 md:col-3 lg:col-10 mt-lg-5">
              <Link href="https://steemit.com/" target="_blank" onClick={closeMobileMenu}>
                <Image
                  className="img-fluid img-brand mb-3"
                  src="/images/Steem_Icon_News_Temp.png"
                  alt="Steem News"
                  width={120}
                  height={40}
                />
              </Link>
              <p className="smaller translucent">Keep updated through our social platform.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
