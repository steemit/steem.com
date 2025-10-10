"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Link from "next/link";

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


        {/* Divider */}
        <hr className="border-t border-gray-200" />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
