import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="bg-footer content-info py-5 xl:py-5 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-5/12 lg:w-full xl:flex xl:items-center xl:justify-between mb-4 lg:mb-0 px-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Link href="/" className="brand">
                  <Image
                    className="img-fluid img-brand"
                    src="/images/Steem_Logo_White.png"
                    alt="Steem Logo"
                    width={120}
                    height={40}
                  />
                </Link>
                <p className="inline-block translucent ml-4 text-xl">
                  &copy;2018 Steemit Inc.
                </p>
              </div>
              <div className="menu-footer-container">
                <ul className="nav-footer hidden lg:flex items-center mt-2">
                  <li className="menu-item">
                    <a
                      href="https://steemit.com/@steemitblog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Steem Blog on Steemit.com"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://www.reddit.com/r/steemit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Steemit on Reddit.com"
                    >
                      Reddit
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://twitter.com/steemit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Official Twitter Steemit profile"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://www.facebook.com/steemit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Official Facebook Steemit profile"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://steemit.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Steemit.com, social blogging platform"
                    >
                      Steemit
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://steemdb.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="SteemDB"
                    >
                      Block explorer
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://developers.steem.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Official Steem developer portal"
                    >
                      Developers
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://github.com/steemit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-100 transition-opacity no-underline"
                      title="Official Github Steemit profile"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:hidden w-6/12 md:w-3/12 md:ml-4 px-4">
            <div className="menu-primary-container">
              <ul className="nav-footer">
                <li className="menu-item">
                  <Link href="/developers/" className="text-white hover:opacity-100 transition-opacity">
                    Developers
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/entrepreneurs/" className="text-white hover:opacity-100 transition-opacity">
                    Entrepreneurs
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/social-users/" className="text-white hover:opacity-100 transition-opacity">
                    Social Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:hidden w-6/12 md:w-3/12 px-4">
            <div className="menu-social-container">
              <ul className="nav-footer">
                <li className="menu-item">
                  <a
                    href="https://www.reddit.com/r/steemit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-100 transition-opacity no-underline"
                    title="Steemit on Reddit.com"
                  >
                    Reddit
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://twitter.com/steemit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-100 transition-opacity no-underline"
                    title="Official Twitter Steemit profile"
                  >
                    Twitter
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://www.facebook.com/steemit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-100 transition-opacity no-underline"
                    title="Official Facebook Steemit profile"
                  >
                    Facebook
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://github.com/steemit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-100 transition-opacity no-underline"
                    title="Official Github Steemit profile"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}