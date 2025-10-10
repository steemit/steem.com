"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function Developers() {
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
                    Developers
                  </h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Why develop on Steem?
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Steem is the only blockchain protocol in existence that was built from the ground up to power web and content applications.
                  </p>
                  
                  <Link
                    href="https://developers.steem.io/"
                    className="btn btn-white mt-4"
                    target="_blank"
                  >
                    Start Building
                  </Link>
                  <div className="flex justify-center md:hidden mt-5">
                    <div className="w-3/4">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_Landing_ForDevelopers.png"
                        alt="Steem for Developers"
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
                  src="/images/Steem_Landing_ForDevelopers.png"
                  alt="Steem for Developers"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="bg-developers py-12 lg:py-16 xl:py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full lg:w-10/12">
                {/* Turnkey Blockchain */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                  <div className="w-full lg:w-5/12">
                    <h2 className="mb-2 text-blue text-3xl font-bold text-center lg:text-left">
                      Turnkey Blockchain
                    </h2>
                    <div className="mt-8 lg:mt-12"></div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Why build your own blockchain when you can use ours for free?
                    </h3>
                  </div>
                  <div className="w-full lg:w-7/12">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Steem has near-instant fee-less transactions and its built-in content specific primitives make building an engaging and functional blockchain-powered application easier than ever. Steem handles more transactions than bitcoin and ethereum combined, which means it can easily handle every transaction your app generates.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Steem processes more transactions than every other blockchain combined. It&apos;s been battle tested by over 1 million people on more than 324 Steem-based apps.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-200 mb-12" />

                {/* Turnkey Cryptocurrency */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                  <div className="w-full lg:w-5/12">
                    <h2 className="mb-2 text-blue text-3xl font-bold text-center lg:text-left">
                      Turnkey Cryptocurrency
                    </h2>
                    <div className="mt-8 lg:mt-12"></div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Incentivize your users for free with Steem&apos;s turnkey cryptocurrency: STEEM
                    </h3>
                  </div>
                  <div className="w-full lg:w-7/12">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Steem integration enables developers to instantly begin incentivizing their users to post and engage on their platform, without costing the developer anything. Steem&apos;s unique Reward Sharing feature enables the developer to monetize this participation and engagement by collecting a percentage of whatever STEEM rewards their users earn. This means that developers can reward their users for free, and even get paid for doing so! Numerous apps like Utopian​ are already leveraging this feature to fund operations.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-200 mb-12" />

                {/* Turnkey Userbase & Ecosystem */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="w-full lg:w-5/12">
                    <h2 className="mb-2 text-blue text-3xl font-bold text-center lg:text-left">
                      Turnkey Userbase & Ecosystem
                    </h2>
                    <div className="mt-8 lg:mt-12"></div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Get instant users via our ever-growing 1 million+ user base.
                    </h3>
                  </div>
                  <div className="w-full lg:w-7/12">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      User acquisition is often the hardest and most expensive part of developing your application. But when you build on Steem, you gain immediate access to its exponentially growing, 1 million plus, user base. And because Steem is open source with a passionate developer base, there is an entire ecosystem of powerful tools that make Steem integration easier than any other blockchain protocol.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      For example, SteemConnect ​is a single sign-on solution for Steem. By adding just a few lines of code to any web application, a developer can enable any Steem account holder to sign into their app using their Steem keys, and without compromising the user&apos;s security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16 xl:py-20 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full md:w-1/2 xl:w-5/12 2xl:w-1/3 text-center">
                <h2 className="text-blue text-3xl lg:text-4xl font-bold mb-6">
                  Ready to start developing?
                </h2>
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

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}