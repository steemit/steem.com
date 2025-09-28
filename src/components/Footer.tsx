import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="bg-footer content-info py-4 py-xl-4 text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 md:col-5 lg:col-12 xl:flex items-center justify-between mb-4 lg:mb-0">
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
                <p className="inline-block translucent md:mt-2 ml-3 mb-0 text-sm">
                  &copy;2018 Steemit Inc.
                </p>
              </div>
              <div className="menu-footer-container">
                <ul className="nav-footer hidden lg:flex items-center mt-2">
                  <li>
                    <Link
                      href="https://steemit.com/@steemitblog"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Steem Blog on Steemit.com"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.reddit.com/r/steemit/"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Steemit on Reddit.com"
                    >
                      Reddit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/steemit"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Official Twitter Steemit profile"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/steemit/"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Official Facebook Steemit profile"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://steemit.com/"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Steemit.com, social blogging platform"
                    >
                      Steemit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://steemdb.io/"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="SteemDB"
                    >
                      Block explorer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://developers.steem.io/"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Official Steem developer portal"
                    >
                      Developers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/steemit"
                      target="_blank"
                      className="text-white hover:opacity-100 transition-opacity"
                      title="Official Github Steemit profile"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:hidden col-6 md:col-3 md:offset-1">
            <div className="menu-primary-container">
              <ul className="nav-footer">
                <li>
                  <Link href="/developers/" className="text-white hover:opacity-100 transition-opacity">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link href="/entrepreneurs/" className="text-white hover:opacity-100 transition-opacity">
                    Entrepreneurs
                  </Link>
                </li>
                <li>
                  <Link href="/social-users/" className="text-white hover:opacity-100 transition-opacity">
                    Social Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:hidden col-6 md:col-3">
            <div className="menu-social-container">
              <ul className="nav-footer">
                <li>
                  <Link
                    href="https://www.reddit.com/r/steemit/"
                    target="_blank"
                    className="text-white hover:opacity-100 transition-opacity"
                    title="Steemit on Reddit.com"
                  >
                    Reddit
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/steemit"
                    target="_blank"
                    className="text-white hover:opacity-100 transition-opacity"
                    title="Official Twitter Steemit profile"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/steemit/"
                    target="_blank"
                    className="text-white hover:opacity-100 transition-opacity"
                    title="Official Facebook Steemit profile"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/steemit"
                    target="_blank"
                    className="text-white hover:opacity-100 transition-opacity"
                    title="Official Github Steemit profile"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
