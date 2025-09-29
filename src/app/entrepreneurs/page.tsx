import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Entrepreneurs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="bg-page-landing py-7 lg:py-8 xl:py-10">
          <div className="container mx-auto px-4 mt-5 md:mt-7 mb-md-5 my-lg-8 my-xl-10">
            <div className="row items-center">
              <div className="col-12 md:col-6 lg:col-5 xl:col-4">
                <div className="nomargin-container text-white">
                  <h6 className="translucent text-uppercase text-sm font-bold mb-2">Entrepreneurs</h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">The blockchain of opportunity</h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Steem enables entrepreneurs to build apps and monetize content so you can build & grow your own social media community on the blockchain.
                  </p>
                  <div className="row justify-center md:hidden mt-5">
                    <div className="col-9">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_Landing_ForEntrepreneurs.png"
                        alt="Steem for Entrepreneurs"
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
                  src="/images/Steem_Landing_ForEntrepreneurs.png"
                  alt="Steem for Entrepreneurs"
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
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Monetize Your Content</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="md:col-5 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Build and monetize content without traditional advertising</h3>
                  </div>
                  <div className="md:col-6 md:offset-1 nomargin-container">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      Steem provides entrepreneurs with the tools to create engaging social media applications that reward users for their contributions. Unlike traditional platforms that rely on advertising revenue, Steem-based apps can monetize through cryptocurrency rewards and token economics.
                    </p>
                    <p className="text-lg text-white leading-relaxed">
                      This creates a sustainable business model where both the platform and its users benefit from the value they create together.
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
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Community Building</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="md:col-5 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Grow your community with built-in incentives</h3>
                  </div>
                  <div className="md:col-6 md:offset-1 nomargin-container">
                    <p className="text-lg text-white leading-relaxed">
                      Steem&apos;s reward system naturally encourages community growth and engagement. Users are incentivized to create quality content, curate good posts, and participate actively in the community. This creates a self-reinforcing cycle of growth that benefits both entrepreneurs and their users.
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
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Low Barrier to Entry</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="md:col-5 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Start building immediately with existing infrastructure</h3>
                  </div>
                  <div className="md:col-6 md:offset-1 nomargin-container">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      Unlike building a blockchain from scratch, Steem provides entrepreneurs with a ready-made infrastructure that includes user accounts, content storage, reward distribution, and governance systems. This allows you to focus on building your unique value proposition rather than reinventing the wheel.
                    </p>
                    <p className="text-lg text-white leading-relaxed">
                      With comprehensive APIs and developer tools, you can launch your social media platform in weeks rather than years.
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
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">Ready to build your platform?</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Start building your social media platform on the Steem blockchain today.
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
