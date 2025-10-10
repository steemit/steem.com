"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import StatCounter from "@/components/StatCounter";
import ContactSection from "@/components/ContactSection";
import ResourcesSection from "@/components/ResourcesSection";
import Icon from "@/components/Icon";
import TopAppsSection from "@/components/TopAppsSection";

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="order-1">
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
                  <div className="order-2 md:hidden">
                    <hr className="my-6" />
                  </div>
                  <div className="order-3 md:order-2">
                    <Carousel />
                  </div>
                </div>
              </div>
            </section>

            {/* Social Media Model Section */}
            <section className="py-7 lg:py-8 xl:py-10">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-1">
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
                  <div className="order-2 flex items-center">
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
                              <Icon name="angle-right" className="text-lightblue ml-2" size="sm" />
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
                              <Icon name="angle-right" className="text-lightblue ml-2" size="sm" />
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
                              <Icon name="angle-right" className="text-lightblue ml-2" size="sm" />
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
                              <Icon name="angle-right" className="text-lightblue ml-2" size="sm" />
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
            <section className="bg-offwhite py-12 lg:py-14 xl:py-20">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 place-items-center my-18">
                  <div className="col-span-12 md:col-span-9 md:col-start-2 lg:col-span-7 lg:col-start-3 xl:col-span-6 xl:col-start-4 text-center">
                    <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                      Welcome to the next generation of blockchain technology
                    </h2>
                    <p className="text-lg leading-relaxed">
                      Unlike most blockchains that are too slow and expensive
                      to be used for apps, Steem is fast, free, and scalable.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12 lg:my-6 xl:my-6">
                  <div className="text-center">
                    <div className="bg-white border-rounded box-shadow flex items-center h-full">
                      <div className="py-4 lg:py-5 px-3 xl:px-4 w-full">
                        <Image
                          className="img-fluid img-icon-bigger mb-3 mx-auto block"
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
                  <div className="text-center">
                    <div className="bg-white border-rounded box-shadow flex items-center h-full">
                      <div className="py-4 lg:py-5 px-3 xl:px-4 w-full">
                        <Image
                          className="img-fluid img-icon-bigger mb-3 mx-auto block"
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
                  <div className="text-center">
                    <div className="bg-white border-rounded box-shadow flex items-center h-full">
                      <div className="py-4 lg:py-5 px-3 xl:px-4 w-full">
                        <Image
                          className="img-fluid img-icon-bigger mb-3 mx-auto block"
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
            <section className="py-12 lg:py-14 xl:py-20">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  <div className="order-1">
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
                  <div className="order-2">
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

            <TopAppsSection
              title="The top 3 Steem-based apps"
              subtitle="Steem-based apps get a boost from the 1 million users already plugged into the Steem blockchain."
              apps={[
                {
                  title: "Steemit",
                  description: "Social blogging platform",
                  href: "https://steemit.com/",
                  rank: 1
                },
                {
                  title: "SteemPro",
                  description: "Steem-based app",
                  href: "https://www.steempro.com/",
                  rank: 2
                },
                {
                  title: "HARI RAID",
                  description: "Steem-based Tap2Earn game",
                  href: "https://hari-raid.h4lab.com/",
                  rank: 3
                }
              ]}
              statsLink="http://blocktivity.info/"
              statsLinkText="View more Steem statistics"
            />

            <ResourcesSection
              title="Go down the rabbit hole"
              subtitle="Learn about the features and technology underpinning the Steem blockchain."
              resources={[
                {
                  title: "Steem Bluepaper",
                  description: "A high level overview of the Steem blockchain.",
                  href: "/steem-bluepaper.pdf",
                  alt: "Steem Bluepaper"
                },
                {
                  title: "Steem Whitepaper",
                  description: "A technical explanation of how the Steem blockchain works.",
                  href: "/steem-whitepaper.pdf",
                  alt: "Steem Whitepaper"
                },
                {
                  title: "SMT Whitepaper",
                  description: "A technical paper on the proposed Smart Media Tokens protocol.",
                  href: "/smt-whitepaper.pdf",
                  alt: "SMT Whitepaper"
                }
              ]}
            />

            <ContactSection />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
