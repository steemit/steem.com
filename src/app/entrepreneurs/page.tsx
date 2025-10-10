"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function Entrepreneurs() {
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
                    Entrepreneurs
                  </h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    <span className="md:whitespace-nowrap">Welcome to the blockchain</span> of opportunity
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Steem enables entrepreneurs to build apps and monetize content so you can build & grow your own social media community on the blockchain.
                  </p>
                  <div className="flex justify-center md:hidden mt-5">
                    <div className="w-3/4">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_Landing_ForEntrepreneurs.png"
                        alt="Steem for Entrepreneurs"
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
                  src="/images/Steem_Landing_ForEntrepreneurs.png"
                  alt="Steem for Entrepreneurs"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-cloud-dots py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full md:w-7/12 lg:w-5/12 text-center">
                <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                  More transactions than any blockchain in the world
                </h2>
                <p className="text-lg leading-relaxed">
                  Steem processes more transactions than every other blockchain combined. It has been battle tested by over 1 million people on more than 324 Steem-based apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Apps Section */}
        <section className="bg-offwhite py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-5/12 xl:w-1/3">
                <div className="py-8">
                  <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                    The top 3<br />
                    Steem-based apps
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Steem-based apps get a boost from the 1 million users already plugged into the Steem blockchain.
                  </p>
                  <Link 
                    href="http://blocktivity.info/" 
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 hidden md:inline-block"
                    target="_blank"
                  >
                    View more Steem statistics
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/3">
                <div className="space-y-0">
                  <Link 
                    href="https://steemit.com/" 
                    className="flex items-center justify-between py-3 border-b border-gray-200 hover:translate-x-2 transition-transform"
                    target="_blank"
                  >
                    <div>
                      <h3 className="text-blue text-xl font-normal mb-0">1. Steemit</h3>
                      <p className="text-gray-600 mb-0">Social blogging platform</p>
                    </div>
                    <i className="fa fa-angle-right text-lightblue"></i>
                  </Link>
                  <Link 
                    href="https://www.steempro.com/" 
                    className="flex items-center justify-between py-3 border-b border-gray-200 hover:translate-x-2 transition-transform"
                    target="_blank"
                  >
                    <div>
                      <h3 className="text-blue text-xl font-normal mb-0">2. SteemPro</h3>
                      <p className="text-gray-600 mb-0">Steem-based app</p>
                    </div>
                    <i className="fa fa-angle-right text-lightblue"></i>
                  </Link>
                  <Link 
                    href="https://hari-raid.h4lab.com/" 
                    className="flex items-center justify-between py-3 border-b border-gray-200 hover:translate-x-2 transition-transform"
                    target="_blank"
                  >
                    <div>
                      <h3 className="text-blue text-xl font-normal mb-0">3. HARI RAID</h3>
                      <p className="text-gray-600 mb-0">Steem-based Tap2Earn game</p>
                    </div>
                    <i className="fa fa-angle-right text-lightblue"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-gradient py-12 lg:py-16 xl:py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-5/12 xl:w-1/3">
                <h5 className="text-sm font-bold uppercase mb-2 opacity-70">Case Study</h5>
                <h2 className="text-3xl lg:text-4xl font-bold">Steem Whitepaper</h2>
              </div>
              <div className="w-full lg:w-7/12 xl:w-2/3">
                <p className="text-lg leading-relaxed">
                  Running a rewards-based decentralized social network required new advances in blockchain technology. 
                  Steem is a next-generation blockchain, uniquely designed to run real-time applications with near instant, 
                  fee-free transactions. Steem has been battled-tested over the last 18 months, already processing 
                  more transactions per second than Bitcoin and Ethereum. 
                  <Link className="text-lightblue underline" href="/steem-whitepaper.pdf" target="_blank">Continue Reading</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Network Section */}
        <section className="py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="w-full lg:w-7/12 xl:w-1/3">
                <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                  A social network that pays its community
                </h2>
                <p className="text-lg mb-4 leading-relaxed">
                  Steemit was the first app built on the Steem blockchain. It&apos;s an open source blogging platform that pays people for good content.
                </p>
                <p className="text-lg leading-relaxed">
                  Powered by Steem&apos;s &apos;proof-of-brain&apos; rewards, Steemit has grown to become a top 1000 website by global traffic within 2 years.
                </p>
              </div>
              <div className="w-full lg:w-4/12 xl:w-1/3">
                <Image
                  className="img-fluid md:block"
                  src="/images/Steem_Icon_Community.png"
                  alt="Steem Community"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wired Quote Section */}
        <section className="bg-gradient-dark py-12 lg:py-16 xl:py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-5/12 xl:w-1/3">
                <Image
                  className="img-fluid md:block"
                  src="/images/Wired_Logo.png"
                  alt="Wired Logo"
                  width={200}
                  height={60}
                />
                <h2 className="text-3xl lg:text-4xl font-bold">
                  The social network <br/>
                  doling out millions <br/>
                  in ephemeral money
                </h2>
              </div>
              <div className="w-full lg:w-7/12 xl:w-2/3">
                <h4 className="text-xl font-normal leading-relaxed">
                  &quot;Steemit is a nascent social media platform&hellip; it rewards its users with cold, hard cash in the form of a cryptocurrency. Everything that you do on Steemit—every post, every comment, and every like—translates to a fraction of a digital currency called Steem. Over time, as Steem accumulates, it can be cashed out for normal currency.&quot; <span className="text-sm"><Link className="text-offwhite underline" href="https://www.wired.com/story/the-social-network-doling-out-millions-in-ephemeral-money" target="_blank">wired.com</Link></span>
                </h4>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}