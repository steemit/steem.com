import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header variant="blue" />

      <main className="main">
        {/* Hero Section */}
        <section className="bg-wave py-7 lg:py-8 xl:py-10">
          <div className="container mx-auto px-4 mt-7 my-lg-8 my-xl-10">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-6/12 lg:w-1/2 2xl:w-5/12">
                <div className="nomargin-container text-offblack">
                  <h6 className="text-lightblue text-uppercase small font-weight-bold mb-2">
                    The Steem Blockchain
                  </h6>
                  <h2 className="text-blue text-3xl lg:text-4xl font-weight-bold mb-6">
                    <span className="text-md-nowrap">
                      Building better communities,
                    </span>{" "}
                    <span className="text-md-nowrap">
                      creating rewarding opportunities
                    </span>{" "}
                    <span className="text-md-nowrap">
                      and empowering entrepreneurs
                    </span>
                  </h2>
                  <p className="text-lg leading-relaxed">
                    We see a world where people get paid for their content and
                    attention — a future where digital content is monetized
                    without the necessity for advertising or selling user data,
                    and communities have the same fundraising capabilities
                    online as they do in everyday life. That&apos;s why
                    we&apos;re building new token-based economic models on the
                    Steem blockchain that create opportunities for people to
                    bridge their passions with success via cryptocurrency
                    rewards.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-1/2 xl:w-1/2 2xl:w-1/2 nomargin-container flex items-center justify-center">
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
            <div className="flex flex-col mb-5 md:mb-6">
              <div className="w-full text-center">
                <h2 className="text-blue text-3xl lg:text-4xl font-bold">
                  Our story, so far...
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="md:w-10/12 lg:w-2/3 xl:w-7/12">
                <div className="border-rounded box-shadow flex flex-row items-center md:items-center bg-white p-4 mb-4">
                  <div className="w-1/4 md:w-1/3 text-center flex items-center justify-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_GenesisBlock.png"
                      alt="Genesis Block"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-3/4 md:w-7/12 md:ml-auto">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-lightblue text-sm font-bold mb-2">
                        2016
                      </h5>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        Genesis block
                      </h3>
                      <p className="text-grey">
                        The genesis block of the Steem blockchain was broadcast
                        to the world on 24 March 2016.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-rounded box-shadow flex flex-wrap items-center md:items-center bg-white p-4 mb-4">
                  <div className="w-1/4 md:w-1/3 text-center flex items-center justify-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_FirstApp.png"
                      alt="First App"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-3/4 md:w-7/12 md:ml-auto">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-lightblue text-sm font-bold mb-2">
                        2016
                      </h5>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        First app on Steem
                      </h3>
                      <p className="text-grey">
                        Steemit was the first app to run on Steem, giving people
                        an easy place to earn cryptocurrency rewards by creating
                        and curating content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-rounded box-shadow flex flex-wrap items-center md:items-center bg-white p-4 mb-4">
                  <div className="w-1/4 md:w-1/3 text-center flex items-center justify-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_Lightblue.png"
                      alt="First Payout"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-3/4 md:w-7/12 md:ml-auto">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-lightblue text-sm font-bold mb-2">
                        2016
                      </h5>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        First payout
                      </h3>
                      <p className="text-grey">
                        The first rewards payout on 4 July 2016 kickstarted
                        growth and we&apos;ve been scaling up ever since.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-rounded box-shadow flex flex-wrap items-center md:items-center bg-white p-4 mb-4">
                  <div className="w-1/4 md:w-1/3 text-center flex items-center justify-center">
                    <Image
                      className="img-fluid img-icon-about mt-4 md:mt-0"
                      src="/images/Steem_Icon_Wrench.png"
                      alt="Improving Systems"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-3/4 md:w-7/12 md:ml-auto">
                    <div className="small-container nomargin-container my-3">
                      <h5 className="text-lightblue text-sm font-bold mb-2">
                        2017
                      </h5>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        Improving systems
                      </h3>
                      <p className="text-grey">
                        2017 our hard work produced over 19 hardforks and other
                        major improvements to the stability and scalability of
                        the blockchain.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border my-10 mx-auto" />

                <div className="border-rounded box-shadow flex flex-row items-center bg-gradient p-3 md:p-4 mb-4 text-white">
                  <div className="w-full md:w-1/4 flex items-center justify-center">
                    <Image
                      className="img-fluid img-icon-about my-8 md:my-0"
                      src="/images/Steem_Icon_SMT-White.png"
                      alt="SMT"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="w-full md:w-7/12 md:ml-auto">
                    <div className="nomargin-container my-3">
                      <h5 className="translucent text-uppercase text-sm font-bold mb-2">
                        What&apos;s next?
                      </h5>
                      <h3 className="text-2xl font-bold mb-3">
                        A smarter way to grow
                      </h3>
                      <p>
                        The next evolution of Steem will begin with the upcoming
                        launch of Smart Media Tokens. Smart Media Tokens will
                        allow anyone to create their own token, similar to
                        STEEM, and use those tokens to fundraise, monetize
                        content, and grow their own social communities.
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
            <div
              className="flex flex-wrap mb-5 md:mb-6"
              style={{ marginBottom: "3em !important" }}
            >
              <div className="w-full text-center">
                <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-4">
                  The Team
                </h2>
                <p className="text-lg">
                  Steem is supported by a team of full-time individuals,{" "}
                  <a
                    href="https://github.com/steemit/steem/graphs/contributors"
                    target="_blank"
                    className="underline text-blue"
                  >
                    open source contributors
                  </a>{" "}
                  and community members just like you.
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
