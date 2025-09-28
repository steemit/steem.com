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
              <div className={`hamburger ${hamburgerClass}`} onClick={toggleMobileMenu}>
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
        className={`text-white p-lg-3 fixed inset-0 bg-gradient z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      >
        <div className="container">
          <div className="hidden lg:flex hamburger ml-auto mt-3" onClick={closeMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <div className="menu-primary-container">
              <ul className="nav nav-mobile mt-8 lg:hidden">
                <li>
                  <Link href="/developers/" onClick={closeMobileMenu} className="block py-2 text-white">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="/entrepreneurs/" onClick={closeMobileMenu} className="block py-2 text-white">
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link href="/social-users/" onClick={closeMobileMenu} className="block py-2 text-white">
                    Social Users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav>
            <div className="menu-secondary-container">
              <ul className="mt-3 nav nav-footer justify-center translucent">
                <li>
                  <Link href="/about/" onClick={closeMobileMenu} className="block py-1 text-white hover:opacity-80">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/brand/" onClick={closeMobileMenu} className="block py-1 text-white hover:opacity-80">
                    Brand
                  </Link>
                </li>
                <li>
                  <Link href="/faq/" onClick={closeMobileMenu} className="block py-1 text-white hover:opacity-80">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" onClick={closeMobileMenu} className="block py-1 text-white hover:opacity-80">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div id="mobileFooter" className="container">
          <hr className="border border-bottom-0 border-offwhite w-full lg:hidden"/>
          <div className="row justify-center lg:justify-start text-center lg:text-left">
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
              <p className="text-sm translucent">Keep updated through our social platform.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
