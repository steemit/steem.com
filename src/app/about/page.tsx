import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header variant="blue" />
      
      <main className="main">
        {/* Hero Section */}
        <section className="bg-wave py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4 mt-7 my-lg-8 my-xl-10">
            <div className="row d-flex align-items-center justify-content-center justify-content-md-start">
              <div className="col-12 col-md-7 col-lg-6 col-xxl-5">
                <div className="nomargin-container text-steem-offblack">
                  <h6 className="text-steem-lightblue text-uppercase small font-weight-bold mb-2">The Steem Blockchain</h6>
                  <h2 className="text-steem-blue text-3xl lg:text-4xl font-weight-bold mb-6">
                    <span className="text-md-nowrap">Building better communities,</span> <span className="text-md-nowrap">creating rewarding opportunities</span> <span className="text-md-nowrap">and empowering entrepreneurs</span>
                  </h2>
                  <p className="text-lg leading-relaxed">
                    We see a world where people get paid for their content and attention — a future where digital content is monetized without the necessity for advertising or selling user data, and communities have the same fundraising capabilities online as they do in everyday life. That&apos;s why we&apos;re building new token-based economic models on the Steem blockchain that create opportunities for people to bridge their passions with success via cryptocurrency rewards.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3 col-xl-2 offset-md-1 offset-lg-2 offset-xxl-3 nomargin-container">
                <Image
                  className="img-fluid mt-4 md:mt-0"
                  src="/images/Steem_Icon_CoinFalling.png"
                  alt="Steem Icon"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-7 py-lg-8 py-xl-10 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="row mb-5 md:mb-6">
              <div className="col-12 text-center">
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold">Our story, so far...</h2>
              </div>
            </div>
            <div className="row justify-center">
              <div className="md:col-10 lg:col-8 xl:col-7">
                <div className="border-rounded box-shadow row items-md-center bg-white p-md-4 mb-4">
                  <div className="col-3 md:col-4 text-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_GenesisBlock.png"
                      alt="Genesis Block"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-9 md:col-7 md:offset-1">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-steem-lightblue text-sm font-bold mb-2">2016</h5>
                      <h3 className="text-steem-blue text-xl font-bold mb-3">Genesis block</h3>
                      <p className="text-steem-grey">
                        The genesis block of the Steem blockchain was broadcast to the world on 24 March 2016.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-rounded box-shadow row items-md-center bg-white p-md-4 mb-4">
                  <div className="col-3 md:col-4 text-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_FirstApp.png"
                      alt="First App"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-9 md:col-7 md:offset-1">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-steem-lightblue text-sm font-bold mb-2">2016</h5>
                      <h3 className="text-steem-blue text-xl font-bold mb-3">First app on Steem</h3>
                      <p className="text-steem-grey">
                        Steemit was the first app to run on Steem, giving people an easy place to earn cryptocurrency rewards by creating and curating content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-rounded box-shadow row items-md-center bg-white p-md-4 mb-4">
                  <div className="col-3 md:col-4 text-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_Lightblue.png"
                      alt="First Payout"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-9 md:col-7 md:offset-1">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-steem-lightblue text-sm font-bold mb-2">2016</h5>
                      <h3 className="text-steem-blue text-xl font-bold mb-3">First payout</h3>
                      <p className="text-steem-grey">
                        The first rewards payout on 4 July 2016 kickstarted growth and we&apos;ve been scaling up ever since.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-rounded box-shadow row items-md-center bg-white p-md-4 mb-4">
                  <div className="col-3 md:col-4 text-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_Wrench.png"
                      alt="Improving Systems"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-9 md:col-7 md:offset-1">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-steem-lightblue text-sm font-bold mb-2">2017</h5>
                      <h3 className="text-steem-blue text-xl font-bold mb-3">Improving systems</h3>
                      <p className="text-steem-grey">
                        2017 our hard work produced over 19 hardforks and other major improvements to the stability and scalability of the blockchain.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border my-5"/>
                
                <div className="border-rounded box-shadow row items-center bg-gradient p-3 md:p-4 mb-4 text-white">
                  <div className="md:col-4 text-center">
                    <Image
                      className="img-fluid img-icon-about my-4 md:my-0"
                      src="/images/Steem_Icon_SMT-White.png"
                      alt="SMT"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="md:col-7 md:offset-1">
                    <div className="nomargin-container my-3">
                      <h5 className="translucent text-uppercase text-sm font-bold mb-2">What&apos;s next?</h5>
                      <h3 className="text-2xl font-bold mb-3">A smarter way to grow</h3>
                      <p className="text-steem-grey">
                        The next evolution of Steem will begin with the upcoming launch of Smart Media Tokens. Smart Media Tokens will allow anyone to create their own token, similar to STEEM, and use those tokens to fundraise, monetize content, and grow their own social communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4">
            <div className="row mb-5 md:mb-6" style={{marginBottom: '3em !important'}}>
              <div className="col-12 text-center">
                <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-4">The Team</h2>
                <p className="text-lg">
                  Steem is supported by a team of full-time individuals, <a href='https://github.com/steemit/steem/graphs/contributors' target='_blank' className="underline text-steem-blue">open source contributors</a> and community members just like you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
