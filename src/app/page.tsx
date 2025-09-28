import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="main">
        {/* Hero Section */}
        <section className="bg-landing py-7 py-lg-8 py-xl-10">
          <div className="container mt-7 my-lg-8 my-xl-10">
            <div className="row">
              <div className="col-12 md:col-6 lg:col-5">
                <div className="nomargin-container text-white">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="text-nowrap">Powering Communities</span> and Opportunities
                  </h1>
                  <p className="text-lg mb-8 leading-relaxed">
                    Steem is a social blockchain that grows communities and makes immediate revenue streams possible for users by rewarding them for sharing content. It&apos;s currently the only blockchain that can power real applications via social apps like Steemit.
                  </p>
                  <Link 
                    href="https://signup.steemit.com/" 
                    className="btn btn-white"
                    target="_blank"
                  >
                    Create an account
                  </Link>
                </div>
              </div>
              <div className="md:hidden col-12">
                <hr className="my-6"/>
              </div>
              <div className="col-12 md:col-6 lg:col-5 lg:offset-2 pl-md-5 lg:px-0">
                <Carousel />
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Model Section */}
        <section className="py-7 py-lg-8 py-xl-10">
          <div className="container">
            <div className="row">
              <div className="col-12 md:col-6 lg:col-5 xl:col-4 xl:offset-1">
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">
                  <span className="text-nowrap">A new social media model</span><br />
                  <span className="text-nowrap">where contributors get</span><br />
                  big perks
                </h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Shareholders of social media platforms made billions of dollars from user-generated content. The content creators? They made nothing.
                </p>
                <p className="text-lg leading-relaxed">
                  Steem flips the model and returns the value to the people who contribute the most. Users become platform stakeholders, maintaining control over their data, and earning cryptocurrency rewards for each contribution they make.
                </p>
              </div>
              <div className="col-12 md:col-6 lg:col-5 lg:offset-1 flex items-center mt-4 md:mt-0">
                <div className="bg-dots py-7 text-center w-full">
                  <h1 className="stat-counter text-gradient text-6xl font-bold mb-4">59,595,935</h1>
                  <h4 className="font-normal mx-5 mx-xl-8 text-steem-purple text-xl">
                    Rewards paid out to Steem users since June
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="bg-half">
          <div className="container">
            <div className="row justify-center">
              <div className="col-12 md:col-6 lg:col-5 xl:col-3 bg-pseudoclip my-1 md:my-2 xl:my-0">
                <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                  <div className="row items-center">
                    <div className="col-3 xl:col-12 flex items-center justify-center">
                      <Image
                        className="img-fluid img-icon mb-xl-3"
                        src="/images/Steem_Wrench.png"
                        alt="Developers icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="col-9 xl:col-12">
                      <div className="text-xl-center">
                        <Link href="/developers/" className="hover-shiftright block">
                          <h5 className="text-xl font-bold mb-2">
                            For Developers <i className="fa fa-chevron-right ml-2 translucent">→</i>
                          </h5>
                          <p className="m-0 text-sm">Find open source code & docs to help you start building.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12 md:col-6 lg:col-5 xl:col-3 bg-pseudoclip my-1 md:my-2 xl:my-0">
                <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                  <div className="row items-center">
                    <div className="col-3 xl:col-12 flex items-center justify-center">
                      <Image
                        className="img-fluid img-icon mb-xl-3"
                        src="/images/Steem_Lightbulb.png"
                        alt="Entrepreneurs icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="col-9 xl:col-12">
                      <div className="text-xl-center">
                        <Link href="/entrepreneurs/" className="hover-shiftright block">
                          <h5 className="text-xl font-bold mb-2">
                            For Entrepreneurs <i className="fa fa-chevron-right ml-2 translucent">→</i>
                          </h5>
                          <p className="m-0 text-sm">Build apps, monetize content & grow your community.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12 md:col-6 lg:col-5 xl:col-3 bg-pseudoclip my-1 md:my-2 xl:my-0">
                <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                  <div className="row items-center">
                    <div className="col-3 xl:col-12 flex items-center justify-center">
                      <Image
                        className="img-fluid img-icon mb-xl-3"
                        src="/images/Steem_Logo_Translucent.png"
                        alt="HODLers icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="col-9 xl:col-12">
                      <div className="text-xl-center">
                        <Link href="/buying-steem-tokens/" className="hover-shiftright block">
                          <h5 className="text-xl font-bold mb-2">
                            For HODLers <i className="fa fa-chevron-right ml-2 translucent">→</i>
                          </h5>
                          <p className="m-0 text-sm">Learn about tokens and where to buy & trade.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12 md:col-6 lg:col-5 xl:col-3 bg-pseudoclip my-1 md:my-2 xl:my-0">
                <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                  <div className="row items-center">
                    <div className="col-3 xl:col-12 flex items-center justify-center">
                      <Image
                        className="img-fluid img-icon mb-xl-3"
                        src="/images/Steemit_Chatbubble.png"
                        alt="Social Users icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="col-9 xl:col-12">
                      <div className="text-xl-center">
                        <Link href="/social-users/" className="hover-shiftright block">
                          <h5 className="text-xl font-bold mb-2">
                            For Social Users <i className="fa fa-chevron-right ml-2 translucent">→</i>
                          </h5>
                          <p className="m-0 text-sm">Get paid for good content & grow your following.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row items-center justify-between text-center md:text-left">
              <div className="md:col-6">
                <h2 className="md:mb-0 text-steem-blue text-2xl font-bold">Contact</h2>
              </div>
              <div className="md:col-5 lg:col-4 md:text-right">
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