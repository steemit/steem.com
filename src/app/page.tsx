"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import StatCounter from "@/components/StatCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="wrap" role="document">
        <div className="content">
          <main className="main">
            {/* Hero Section */}
            <section className="bg-landing py-7 lg:py-8 xl:py-10">
              <div className="container mx-auto px-4 lg:my-8 xl:my-10">
                <div className="flex flex-row -mx-4">
                  <div className="w-full md:w-6/12 lg:w-5/12 px-4">
                    <div className="nomargin-container text-white">
                      <h1>
                        <span className="text-nowrap">
                          Powering Communities
                        </span>{" "}
                        and Opportunities
                      </h1>
                      <p className="text-lg mb-4 leading-relaxed">
                        Steem is a social blockchain that grows communities and
                        makes immediate revenue streams possible for users by
                        rewarding them for sharing content. It&apos;s currently
                        the only blockchain that can power real applications via
                        social apps like Steemit.
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
                  <div className="md:hidden w-full px-4">
                    <hr className="my-6" />
                  </div>
                  <div className="w-full md:w-6/12 lg:w-5/12 lg:ml-2 px-4 md:pl-5 lg:px-0">
                    <Carousel />
                  </div>
                </div>
              </div>
            </section>

            {/* Social Media Model Section */}
            <section className="py-7 lg:py-8 xl:py-10">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3 xl:ml-1/4">
                    <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                      <span className="whitespace-nowrap">A new social media model</span><br />
                      <span className="whitespace-nowrap">where contributors get</span><br />
                      big perks
                    </h2>
                    <p className="text-lg mb-4 leading-relaxed">
                      Shareholders of social media platforms made billions of dollars from user-generated content. The content creators? They made nothing.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Steem flips the model and returns the value to the people who contribute the most. Users become platform stakeholders, maintaining control over their data, and earning cryptocurrency rewards for each contribution they make.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-5/12 lg:ml-1/12 flex items-center mt-4 md:mt-0">
                    <div className="bg-dots py-7 text-center w-full">
                      <h1 className="display-1 stat-counter text-gradient mb-4">
                        <StatCounter target={59595935} />
                      </h1>
                      <h4 className="font-normal mx-5 xl:mx-8 text-purple text-xl">
                        Rewards paid out to Steem <br/>users since June
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Target Audience Section */}
            <section className="bg-half">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-center">
                  <div className="bg-pseudoclip my-1 md:my-2 xl:my-0">
                    <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                      <div className="flex items-center xl:flex-col xl:text-center">
                        <div className="w-1/4 xl:w-full flex items-center justify-center">
                          <Image
                            className="img-fluid img-icon mb-xl-3"
                            src="/images/Steem_Wrench.png"
                            alt="Developers icon"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="w-3/4 xl:w-full">
                          <Link
                            href="/developers/"
                            className="block"
                          >
                            <h5 className="text-xl font-bold mb-2">
                              For Developers{" "}
                              <i className="fa fa-chevron-right ml-2 translucent">
                                →
                              </i>
                            </h5>
                            <p className="m-0 text-sm">
                              Find open source code & docs to help you start
                              building.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pseudoclip my-1 md:my-2 xl:my-0">
                    <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                      <div className="flex items-center xl:flex-col xl:text-center">
                        <div className="w-1/4 xl:w-full flex items-center justify-center">
                          <Image
                            className="img-fluid img-icon mb-xl-3"
                            src="/images/Steem_Lightbulb.png"
                            alt="Entrepreneurs icon"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="w-3/4 xl:w-full">
                          <Link
                            href="/entrepreneurs/"
                            className="block"
                          >
                            <h5 className="text-xl font-bold mb-2">
                              For Entrepreneurs{" "}
                              <i className="fa fa-chevron-right ml-2 translucent">
                                →
                              </i>
                            </h5>
                            <p className="m-0 text-sm">
                              Build apps, monetize content & grow your
                              community.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pseudoclip my-1 md:my-2 xl:my-0">
                    <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                      <div className="flex items-center xl:flex-col xl:text-center">
                        <div className="w-1/4 xl:w-full flex items-center justify-center">
                          <Image
                            className="img-fluid img-icon mb-xl-3"
                            src="/images/Steem_Logo_Translucent.png"
                            alt="HODLers icon"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="w-3/4 xl:w-full">
                          <Link
                            href="/buying-steem-tokens/"
                            className="block"
                          >
                            <h5 className="text-xl font-bold mb-2">
                              For HODLers{" "}
                              <i className="fa fa-chevron-right ml-2 translucent">
                                →
                              </i>
                            </h5>
                            <p className="m-0 text-sm">
                              Learn about tokens and where to buy & trade.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pseudoclip my-1 md:my-2 xl:my-0">
                    <div className="text-white px-3 lg:px-4 py-4 lg:py-5">
                      <div className="flex items-center xl:flex-col xl:text-center">
                        <div className="w-1/4 xl:w-full flex items-center justify-center">
                          <Image
                            className="img-fluid img-icon mb-xl-3"
                            src="/images/Steemit_Chatbubble.png"
                            alt="Social Users icon"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="w-3/4 xl:w-full">
                          <Link
                            href="/social-users/"
                            className="block"
                          >
                            <h5 className="text-xl font-bold mb-2">
                              For Social Users{" "}
                              <i className="fa fa-chevron-right ml-2 translucent">
                                →
                              </i>
                            </h5>
                            <p className="m-0 text-sm">
                              Get paid for good content & grow your following.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Blockchain Technology Section */}
            <section className="bg-offwhite py-6 py-lg-7 py-xl-10">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full md:w-9/12 lg:w-7/12 xl:w-6/12 text-center md:text-center px-4">
                    <div className="nomargin-container">
                      <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                        Welcome to the next generation of blockchain technology
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Unlike most blockchains that are too slow and expensive
                        to be used for apps, Steem is fast, free, and scalable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 lg:mt-5 xl:mt-6">
                  <div className="w-full md:w-1/3 my-2 xl:my-0 text-center px-4">
                    <div className="bg-white border-rounded box-shadow flex items-center h-full">
                      <div className="py-4 lg:py-5 px-3 xl:px-4 w-full">
                        <Image
                          className="img-fluid img-icon-bigger mb-3"
                          src="/images/Steem_Free.png"
                          alt="Free Transactions"
                          width={80}
                          height={80}
                        />
                        <h3 className="text-blue text-xl font-bold mb-3">
                          Free Transactions
                        </h3>
                        <p className="m-0 text-grey">
                          Intelligent bandwidth allocation enables free
                          transactions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 my-2 xl:my-0 text-center px-4">
                    <div className="bg-white border-rounded box-shadow flex items-center h-full">
                      <div className="py-4 lg:py-5 px-3 xl:px-4 w-full">
                        <Image
                          className="img-fluid img-icon-bigger mb-3"
                          src="/images/Steem_Timer.png"
                          alt="Fast Transactions"
                          width={80}
                          height={80}
                        />
                        <h3 className="text-blue text-xl font-bold mb-3">
                          Fast Transactions
                        </h3>
                        <p className="m-0 text-grey">
                          Processing occurs every 3 seconds, 24/7/365
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 my-2 xl:my-0 text-center px-4">
                    <div className="bg-white border-rounded box-shadow flex items-center h-full">
                      <div className="py-4 lg:py-5 px-3 xl:px-4 w-full">
                        <Image
                          className="img-fluid img-icon-bigger mb-3"
                          src="/images/Steem_People.png"
                          alt="Built to Scale"
                          width={80}
                          height={80}
                        />
                        <h3 className="text-blue text-xl font-bold mb-3">
                          Built to Scale
                        </h3>
                        <p className="m-0 text-grey">
                          The only blockchain that can handle social
                          applications at scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transaction Comparison Section */}
            <section className="py-6 py-lg-7 py-xl-10">
              <div className="container">
                <div className="flex flex-wrap items-end -mx-4">
                  <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 xl:ml-1/12 mb-6 xl:mb-0 px-8">
                    <Image
                      id="transactions_up"
                      className="img-fluid hidden md:block"
                      src="/images/Steem_Arrow.png"
                      alt="Transaction comparison"
                      width={200}
                      height={100}
                    />
                    <figure
                      id="transactions"
                      className="flex items-end m-0 pb-4 xl:pb-5"
                    >
                      <div
                        className="blockchain flex items-center"
                        data-blockchain="Steem"
                      >
                        <span className="line"></span>
                        <Image
                          className="img-fluid mr-3"
                          src="/images/Steem_Icon_Blue-e1537216818812.png"
                          alt="Steem"
                          width={40}
                          height={40}
                        />
                        <div className="text">
                          <h3 className="m-0 text-xl font-bold">Steem</h3>
                          <h3 className="m-0 font-light text-roboto text-grey text-tx text-2xl">
                            1,169,182
                          </h3>
                        </div>
                      </div>
                      <div
                        className="blockchain flex items-center"
                        data-blockchain="Ethereum"
                      >
                        <span className="line"></span>
                        <Image
                          className="img-fluid mr-3"
                          src="/images/Ethereum_Icon-e1537216851935.png"
                          alt="Ethereum"
                          width={40}
                          height={40}
                        />
                        <div className="text">
                          <h3 className="m-0 text-xl font-bold">Ethereum</h3>
                          <h3 className="m-0 font-light text-roboto text-grey text-tx text-2xl">
                            545,224
                          </h3>
                        </div>
                      </div>
                      <div
                        className="blockchain flex items-center"
                        data-blockchain="Bitcoin"
                      >
                        <span className="line"></span>
                        <Image
                          className="img-fluid mr-3"
                          src="/images/Bitcoin_Icon-e1537216865628.png"
                          alt="Bitcoin"
                          width={40}
                          height={40}
                        />
                        <div className="text">
                          <h3 className="m-0 text-xl font-bold">Bitcoin</h3>
                          <h3 className="m-0 font-light text-roboto text-grey text-tx text-2xl">
                            530,125
                          </h3>
                        </div>
                      </div>
                      <figcaption>
                        <p className="text-sm text-grey">
                          <i>
                            Total transactions<sup>(TX)</sup> - Live 24h
                          </i>
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-full md:w-5/12 xl:w-4/12 xl:ml-1/12 px-4">
                    <div className="nomargin-container pb-md-6 mb-md-3 xl:mb-0 pb-xl-5">
                      <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                        Steem processes more transactions than Bitcoin and
                        Ethereum
                      </h2>
                      <p className="text-lg mb-4 leading-relaxed">
                        It&apos;s already used by over 1 million people on more
                        than 324 Steem-based apps.
                      </p>
                      <Link
                        href="/wp-content/uploads/2025/07/whitepaper20250711.pdf"
                        className="btn btn-blue"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Top Apps Section */}
            <section className="bg-offwhite py-6 py-lg-7 py-xl-10">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-5/12 xl:w-4/12 xl:ml-1/12 px-4">
                    <div className="py-xl-3">
                      <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                        The top 3<br />
                        Steem-based apps
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Steem-based apps get a boost from the 1 million users
                        already plugged into the Steem blockchain.
                      </p>
                      <Link
                        href="http://blocktivity.info/"
                        className="btn btn-blue hidden md:inline-block"
                      >
                        View more Steem statistics
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 md:ml-1/12 lg:w-5/12 xl:w-4/12 xl:ml-2/12 px-4">
                    <Link
                      href="https://steemit.com/"
                      className="border border-white border-left-0 border-right-0 border-top-0 hover-shiftright flex items-center justify-between py-3"
                    >
                      <div>
                        <h3 className="mb-0 font-normal text-blue text-xl">
                          1. Steemit
                        </h3>
                        <p className="mb-0 text-grey">
                          Social blogging platform
                        </p>
                      </div>
                      <i className="fa fa-angle-right text-lightblue">→</i>
                    </Link>
                    <Link
                      href="https://esteem.app/"
                      className="border border-white border-left-0 border-right-0 border-top-0 hover-shiftright flex items-center justify-between py-3"
                    >
                      <div>
                        <h3 className="mb-0 font-normal text-blue text-xl">
                          2. eSteem
                        </h3>
                        <p className="mb-0 text-grey">Steem-based mobile app</p>
                      </div>
                      <i className="fa fa-angle-right text-lightblue">→</i>
                    </Link>
                    <Link
                      href="https://hari-raid.h4lab.com/"
                      className="border border-white border-left-0 border-right-0 border-top-0 hover-shiftright flex items-center justify-between py-3"
                    >
                      <div>
                        <h3 className="mb-0 font-normal text-blue text-xl">
                          3. HARI RAID
                        </h3>
                        <p className="mb-0 text-grey">
                          Steem-based Tap2Earn game
                        </p>
                      </div>
                      <i className="fa fa-angle-right text-lightblue">→</i>
                    </Link>
                    <Link
                      className="btn btn-blue md:hidden mt-4"
                      href="http://blocktivity.info/"
                    >
                      <span>View more Steem statistics</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* SMT Section - Mobile Only */}
            <section className="bg-gradient py-5 py-xl-10 md:hidden">
              <div className="container text-white">
                <div className="row items-center">
                  <div className="w-full px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="w-1/6 flex justify-center">
                        <Image
                          className="img-fluid"
                          src="/images/smt_circle@3x.png"
                          alt="SMT Circle"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <Image
                          className="img-fluid"
                          src="/images/smt_triangle@3x.png"
                          alt="SMT Triangle"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <Image
                          className="img-fluid"
                          src="/images/smt_square@3x.png"
                          alt="SMT Square"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <Image
                          className="img-fluid"
                          src="/images/smt_diamond@3x.png"
                          alt="SMT Diamond"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <Image
                          className="img-fluid"
                          src="/images/smt_penta@3x.png"
                          alt="SMT Pentagon"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <Image
                          className="img-fluid"
                          src="/images/smt_hex@3x.png"
                          alt="SMT Hexagon"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <h2 className="text-3xl font-bold mb-4">
                      Smart Media Tokens will revolutionize web applications.
                    </h2>
                    <p className="text-lg mb-6 leading-relaxed">
                      A Smart Media Token (SMT) is a native digital asset on the
                      Steem blockchain. SMTs are STEEM-like cryptocurrency
                      tokens that can be integrated it into web applications and
                      used to create incentives to entice your users to
                      participate in, and grow, your platform.
                    </p>
                    <Link
                      href="https://smt.steem.io/"
                      className="btn btn-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section className="py-4 pb-6 py-md-6 py-lg-7 py-xl-10 overflow-hidden border border-top-0">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full ml-1/4 mb-5 md:hidden">
                    <Image
                      id="dots"
                      className="img-fluid"
                      src="/images/steemit_bg_dots_lg.png"
                      alt="Dots"
                      width={200}
                      height={100}
                    />
                  </div>
                  <div className="w-full md:w-1/2 xl:w-5/12 2xl:w-1/3 text-center md:text-center">
                    <div className="nomargin-container">
                      <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                        Go down the rabbit hole
                      </h2>
                      <p className="text-lg leading-relaxed">
                        Learn about the features and technology underpinning the
                        Steem blockchain.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-around xl:justify-center text-center mt-5 xl:mt-5">
                  <div className="w-full md:w-1/3 xl:w-1/4 mt-5 xl:mt-0 mx-3 flex flex-col justify-between">
                    <div>
                      <figure className="figure-circle">
                        <Image
                          className="img-fluid img-icon"
                          src="/images/Steem_File.png"
                          alt="Steem Bluepaper"
                          width={60}
                          height={60}
                        />
                      </figure>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        Steem Bluepaper
                      </h3>
                      <p className="px-4 md:px-3 lg:px-4 xl:px-0 text-grey">
                        A high level overview of the Steem blockchain.
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/wp-content/uploads/2018/10/steem-bluepaper-1.pdf"
                        className="btn btn-blue mx-md-3 mx-lg-4"
                        download
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 mt-5 xl:mt-0 mx-3 flex flex-col justify-between">
                    <div>
                      <figure className="figure-circle">
                        <Image
                          className="img-fluid img-icon"
                          src="/images/Steem_File.png"
                          alt="Steem Whitepaper"
                          width={60}
                          height={60}
                        />
                      </figure>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        Steem Whitepaper
                      </h3>
                      <p className="px-4 md:px-3 lg:px-4 xl:px-0 text-grey">
                        A technical explanation of how the Steem blockchain
                        works.
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/wp-content/uploads/2025/07/whitepaper20250711.pdf"
                        className="btn btn-blue mx-md-3 mx-lg-4"
                        download
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 xl:w-1/4 mt-5 xl:mt-0 mx-3 flex flex-col justify-between">
                    <div>
                      <figure className="figure-circle">
                        <Image
                          className="img-fluid img-icon"
                          src="/images/Steem_File.png"
                          alt="SMT Whitepaper"
                          width={60}
                          height={60}
                        />
                      </figure>
                      <h3 className="text-blue text-xl font-bold mb-3">
                        SMT Whitepaper
                      </h3>
                      <p className="px-4 md:px-3 lg:px-4 xl:px-0 text-grey">
                        A technical paper on the proposed Smart Media Tokens
                        protocol.
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/wp-content/uploads/2018/11/smt-whitepaper-nov-3-2018.pdf"
                        className="btn btn-blue mx-md-3 mx-lg-4"
                        download
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-5 bg-white">
              <div className="container">
                <div className="flex flex-wrap items-center justify-between text-center md:text-left">
                  <div className="w-full md:w-1/2">
                    <h2 className="md:mb-0 text-blue text-2xl font-bold">
                      Contact
                    </h2>
                  </div>
                  <div className="w-full md:w-5/12 lg:w-1/3 md:text-right">
                    <Link href="/contact/" className="btn btn-blue">
                      <i className="fa fa-envelope mr-3">✉</i>Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
