import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialUsers() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="bg-page-landing py-7 lg:py-8 xl:py-10">
          <div className="container mx-auto px-4 mt-5 md:mt-7 mb-md-5 my-lg-8 my-xl-10">
            <div className="row items-center">
              <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3">
                <div className="nomargin-container text-white">
                  <h6 className="translucent text-uppercase text-sm font-bold mb-2">Social Users</h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get paid for your content</h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Everyone who contributes content on a Steem-based app has the same opportunity to earn money from the rewards pool. Steem apps enable creators to earn money for pursuing their passions via shared content.
                  </p>
                  <div className="row justify-center md:hidden mt-5">
                    <div className="w-3/4">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_Landing_ForSocialUsers.png"
                        alt="Steem for Social Users"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                  <Link
                    href="https://steemit.com/"
                    className="btn btn-white mt-4"
                    target="_blank"
                  >
                    Start Earning
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-5/12 lg:w-1/3 xl:w-1/4 md:ml-auto lg:ml-1/6 xl:ml-1/4 nomargin-container">
                <Image
                  className="img-fluid hidden md:block"
                  src="/images/Steem_Landing_ForSocialUsers.png"
                  alt="Steem for Social Users"
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
              <div className="w-full lg:w-10/12">
                <div className="row justify-center">
                  <div className="w-full md:w-5/12">
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Earn Rewards</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="w-full md:w-5/12 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Get paid for creating and curating quality content</h3>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-auto nomargin-container">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      On Steem-based platforms, every user has the opportunity to earn cryptocurrency rewards for their contributions. Whether you&apos;re creating original content, curating posts, or engaging with the community, your participation is valued and rewarded.
                    </p>
                    <p className="text-lg text-white leading-relaxed">
                      The more valuable your content is to the community, the more rewards you can earn. This creates a fair and transparent system where quality content rises to the top.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-10/12">
                <hr className="border border-steem-offblack w-full my-5 md:my-6 lg:my-7 xl:my-8"/>
              </div>

              <div className="w-full lg:w-10/12">
                <div className="row justify-center">
                  <div className="w-full md:w-5/12">
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Own Your Data</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="w-full md:w-5/12 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Your content, your data, your control</h3>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-auto nomargin-container">
                    <p className="text-lg text-white leading-relaxed">
                      Unlike traditional social media platforms, Steem gives you complete control over your content and data. Your posts are stored on the blockchain, making them permanent and censorship-resistant. You can also export your content and take it with you to other Steem-based platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-10/12">
                <hr className="border border-steem-offblack w-full my-5 md:my-6 lg:my-7 xl:my-8"/>
              </div>

              <div className="w-full lg:w-10/12">
                <div className="row justify-center">
                  <div className="w-full md:w-5/12">
                    <h2 className="mb-2 text-steem-blue text-3xl font-bold text-md-center">Community Driven</h2>
                  </div>
                  <div className="mt-md-3 mt-lg-4 mt-xl-5 w-full"></div>
                  <div className="w-full md:w-5/12 mb-3 md:mb-0">
                    <h3 className="text-2xl font-bold text-white">Be part of a decentralized community that values your input</h3>
                  </div>
                  <div className="w-full md:w-1/2 md:ml-auto nomargin-container">
                    <p className="text-lg text-white leading-relaxed mb-4">
                      Steem communities are governed by their users through a decentralized consensus mechanism. This means that the community itself decides what content is valuable and deserves rewards, rather than algorithms or corporate interests.
                    </p>
                    <p className="text-lg text-white leading-relaxed">
                      As a user, you have a voice in how the platform evolves and grows. Your stake in the platform gives you voting power and influence over its direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Apps Section */}
        <section className="py-7 py-lg-8 py-xl-10 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="row justify-center">
              <div className="w-full md:w-1/2 xl:w-5/12 2xl:w-1/3 nomargin-container text-center">
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">Popular Steem Apps</h2>
                <p className="text-lg mb-8 leading-relaxed">
                  Discover the most popular applications built on the Steem blockchain.
                </p>
                
                <div className="space-y-4">
                  <Link
                    href="https://steemit.com/"
                    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    target="_blank"
                  >
                    <h3 className="text-xl font-bold text-steem-blue mb-2">Steemit</h3>
                    <p className="text-steem-grey">The original social blogging platform on Steem</p>
                  </Link>
                  
                  <Link
                    href="https://esteem.app/"
                    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    target="_blank"
                  >
                    <h3 className="text-xl font-bold text-steem-blue mb-2">eSteem</h3>
                    <p className="text-steem-grey">Mobile app for Steem content creation and curation</p>
                  </Link>
                  
                  <Link
                    href="https://steemretrogames.com/"
                    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    target="_blank"
                  >
                    <h3 className="text-xl font-bold text-steem-blue mb-2">Steem Retrogames</h3>
                    <p className="text-steem-grey">Play retro games and earn rewards</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4">
            <div className="row justify-center">
              <div className="w-full md:w-1/2 xl:w-5/12 2xl:w-1/3 nomargin-container text-center">
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">Ready to start earning?</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Join the Steem community and start earning rewards for your content today.
                </p>
                <Link
                  href="https://steemit.com/"
                  className="btn btn-blue"
                  target="_blank"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-white">
          <div className="container mx-auto px-4">
            <div className="row items-center justify-between text-center md:text-left">
              <div className="w-full md:w-1/2">
                <h2 className="mb-md-0 text-steem-blue text-2xl font-bold">Contact</h2>
              </div>
              <div className="w-full md:w-5/12 lg:w-1/3 text-md-right">
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
