import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Developers() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="bg-page-landing py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4 mt-5 md:mt-7 mb-md-5 my-lg-8 my-xl-10">
            <div className="row items-center">
              <div className="col-12 md:col-6 lg:col-5 xl:col-4">
                <div className="nomargin-container text-white">
                  <h6 className="translucent text-uppercase text-sm font-bold mb-2">Developers</h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why develop on Steem?</h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Steem is the only blockchain protocol in existence that was built from the ground up to power web and content applications.
                  </p>
                  <div className="row justify-center md:hidden mt-5">
                    <div className="col-9">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_Landing_ForDevelopers.png"
                        alt="Steem for Developers"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <Link
                    href="https://developers.steem.io/"
                    className="btn btn-white mt-4"
                    target="_blank"
                  >
                    Start Building
                  </Link>
                </div>
              </div>
              <div className="col-12 md:col-5 lg:col-4 xl:col-3 md:offset-1 lg:offset-2 xl:offset-3 nomargin-container">
                <Image
                  className="img-fluid hidden md:block"
                  src="/images/Steem_Landing_ForDevelopers.png"
                  alt="Steem for Developers"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-developers py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4">
            <div className="row justify-center">
              <div className="lg:col-10">
                <div className="row justify-center">
                  <div className="md:col-5">
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Turnkey Blockchain</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="md:col-5 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Why build your own blockchain when you can use ours for free?</h3>
                  </div>
                  <div className="md:col-6 md:offset-1 nomargin-container">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      Steem has near-instant fee-less transactions and its built-in content specific primitives make building an engaging and functional blockchain-powered application easier than ever. Steem handles more transactions than bitcoin and ethereum combined, which means it can easily handle every transaction your app generates.
                    </p>
                    <p className="text-lg text-white leading-relaxed">
                      Steem processes more transactions than every other blockchain combined. It's been battle tested by over 1 million people on more than 324 Steem-based apps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-10">
                <hr className="border border-steem-offblack w-full my-5 md:my-6 lg:my-7 xl:my-8"/>
              </div>

              <div className="lg:col-10">
                <div className="row justify-center">
                  <div className="md:col-5">
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Turnkey Cryptocurrency</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="md:col-5 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Incentivize your users for free with Steem's turnkey cryptocurrency: STEEM</h3>
                  </div>
                  <div className="md:col-6 md:offset-1 nomargin-container">
                    <p className="text-lg text-white leading-relaxed">
                      Steem integration enables developers to instantly begin incentivizing their users to post and engage on their platform, without costing the developer anything. Steem's unique Reward Sharing feature enables the developer to monetize this participation and engagement by collecting a percentage of whatever STEEM rewards their users earn. This means that developers can reward their users for free, and even get paid for doing so! Numerous apps like Utopian​ are already leveraging this feature to fund operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-10">
                <hr className="border border-steem-offblack w-full my-5 md:my-6 lg:my-7 xl:my-8"/>
              </div>

              <div className="lg:col-10">
                <div className="row justify-center">
                  <div className="md:col-5">
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Turnkey Userbase & Ecosystem</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="md:col-5 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Get instant users via our ever-growing 1 million+ user base.</h3>
                  </div>
                  <div className="md:col-6 md:offset-1 nomargin-container">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      User acquisition is often the hardest and most expensive part of developing your application. But when you build on Steem, you gain immediate access to its exponentially growing, 1 million plus, user base. And because Steem is open source with a passionate developer base, there is an entire ecosystem of powerful tools that make Steem integration easier than any other blockchain protocol.
                    </p>
                    <p className="text-lg text-white leading-relaxed">
                      For example, SteemConnect ​is a single sign-on solution for Steem. By adding just a few lines of code to any web application, a developer can enable any Steem account holder to sign into their app using their Steem keys, and without compromising the user's security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-7 py-lg-8 py-xl-10 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="row justify-center">
              <div className="md:col-6 xl:col-5 xxl:col-4 nomargin-container text-center">
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">Ready to start developing?</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Access our APIs to start developing your own app on the Steem blockchain.
                </p>
                <Link
                  href="https://developers.steem.io/"
                  className="btn btn-blue"
                  target="_blank"
                >
                  Start Building
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-white">
          <div className="container mx-auto px-4">
            <div className="row items-center justify-between text-center md:text-left">
              <div className="md:col-6">
                <h2 className="mb-md-0 text-steem-blue text-2xl font-bold">Contact</h2>
              </div>
              <div className="md:col-5 lg:col-4 text-md-right">
                <Link href="/contact/" className="btn btn-blue">
                  <i className="fa fa-envelope mr-3">✉</i>Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
