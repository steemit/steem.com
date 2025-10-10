"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import TopSection from "@/components/TopSection";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function BuyingSteemTokens() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="main">
        {/* Hero Section */}
        <section className="bg-page-landing py-7 lg:py-8 xl:py-10">
          <div className="container mx-auto px-4 mt-5 md:mt-7 mb-md-5 my-lg-8 my-xl-10">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 lg:w-5/12 xl:w-1/3">
                <div className="nomargin-container text-white">
                  <h6 className="translucent text-uppercase text-sm font-bold mb-2">
                    HODLers
                  </h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Buy, sell, or earn<br/>Steem tokens
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Get to know the three types of Steem tokens and where to buy, sell, and earn them.
                  </p>
                  <div className="flex justify-center md:hidden mt-5">
                    <div className="w-3/4">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_LandingImage_Investors-1.png"
                        alt="Steem for Investors"
                        width={300}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12 lg:w-1/3 xl:w-1/4 md:ml-auto lg:ml-1/6 xl:ml-1/4 nomargin-container flex justify-center">
                <Image
                  className="img-fluid hidden md:block"
                  src="/images/Steem_LandingImage_Investors-1.png"
                  alt="Steem for Investors"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steem Tokens Section */}
        <section className="bg-offwhite py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="py-xl-3">
                  <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                    Steem tokens power next-gen social apps
                  </h2>
                  <p className="text-lg mb-4 leading-relaxed">
                    Steem enables social networks to be placed on a blockchain with cryptocurrency so users can get paid for contributing good content.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The Steem Blockchain contains three unique tokens with three different attributes. Whether you want to increase your social app influence, HODL wisely, or zero in on cash, there's a Steem token for you.
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex items-center border-rounded box-shadow bg-white p-4">
                    <Image
                      className="img-fluid img-rounded rounded-circle mr-4"
                      src="/images/Steem_Icon_Steem.png"
                      alt="Steem Token"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h3 className="mb-1 text-blue text-xl font-bold">Steem</h3>
                      <p className="mb-1 text-grey">Liquid token for short term traders</p>
                      <Link href="/faq/#what-can-i-do-with-my-steem-tokens" className="a-underline text-lightblue">
                        Find out more
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center border-rounded box-shadow bg-white p-4">
                    <Image
                      className="img-fluid img-rounded rounded-circle mr-4"
                      src="/images/Steem_Icon_Lightning.png"
                      alt="Steem Power Token"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h3 className="mb-1 text-blue text-xl font-bold">Steem Power</h3>
                      <p className="mb-1 text-grey">Vesting token for HODLers</p>
                      <Link href="/faq/#what-is-a-mvest" className="a-underline text-lightblue">
                        Find out more
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center border-rounded box-shadow bg-white p-4">
                    <Image
                      className="img-fluid img-rounded rounded-circle mr-4"
                      src="/images/Steem_Icon_Dollar.png"
                      alt="SBD Token"
                      width={60}
                      height={60}
                    />
                    <div>
                      <h3 className="mb-1 text-blue text-xl font-bold">SBD</h3>
                      <p className="mb-1 text-grey">Stablecoin that seeks price stability to USD</p>
                      <Link href="/faq/#what-can-i-do-with-my-sbd-tokens" className="a-underline text-lightblue">
                        Find out more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Tokens Section */}
        <section className="py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 place-items-center mb-12">
              <div className="col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-5 text-center">
                <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                  How do I get Steem tokens?
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="px-lg-3">
                  <Image
                    className="img-fluid img-icon-bigger mb-3 mx-auto block"
                    src="/images/Steem_Icon_Lightblue.png"
                    alt="Create Content"
                    width={80}
                    height={80}
                  />
                  <h3 className="text-blue text-xl font-bold mb-3">
                    Create content,<br />get rewarded.
                  </h3>
                  <p className="text-grey mb-4">
                    Get rewarded with free Steem tokens for creating and curating content on Steem-based social apps like Steemit, DTube, and Utopian.
                  </p>
                  <Link
                    href="https://signup.steemit.com/"
                    className="btn btn-blue w-full"
                    target="_blank"
                  >
                    Sign up for Steemit
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="px-lg-3">
                  <Image
                    className="img-fluid img-icon-bigger mb-3 mx-auto block"
                    src="/images/Steem_Icon_Lightblue.png"
                    alt="Buy from Exchange"
                    width={80}
                    height={80}
                  />
                  <h3 className="text-blue text-xl font-bold mb-3">
                    Buy from an<br />exchange.
                  </h3>
                  <p className="text-grey mb-4">
                    No Steem account? No problem. Steem-based tokens are listed on some of the biggest exchanges in the world, like Binance, Bittrex, Upbit, and GOPAX.
                  </p>
                  <Link
                    href="https://www.binance.com/en/trade/STEEM_BTC"
                    className="btn btn-blue w-full"
                    target="_blank"
                  >
                    Buy from Binance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Exchanges Section */}
        <TopSection
          title="Top STEEM Exchanges"
          subtitle="Ranked by trading volume, here are the top 5 places where you can buy, sell, and trade STEEM."
          apps={[
            {
              title: "HTX",
              description: "Global cryptocurrency exchange",
              href: "https://www.huobi.com/en-us/exchange/steem_usdt",
              rank: 1
            },
            {
              title: "MEXC",
              description: "Global cryptocurrency exchange",
              href: "https://www.mexc.com/exchange/STEEM_USDT",
              rank: 2
            },
            {
              title: "Poloniex",
              description: "Global cryptocurrency exchange",
              href: "https://poloniex.com/trade/STEEM_USDT/?type=spot",
              rank: 3
            },
            {
              title: "Binance",
              description: "Global cryptocurrency exchange",
              href: "https://www.binance.com/en/trade/STEEM_USDT",
              rank: 4
            },
            {
              title: "Upbit",
              description: "Korean cryptocurrency exchange",
              href: "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-STEEM",
              rank: 5
            }
          ]}
          statsLink="/faq/#where-do-the-new-steem-tokens-come-from"
          statsLinkText="View more exchanges"
        />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
