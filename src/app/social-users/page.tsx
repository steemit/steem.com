"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function SocialUsers() {
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
                    Social Users
                  </h6>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Create, share, curate
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed">
                    Here&apos;s why Steem is a great place for social users to create, share, and curate content on the Steem blockchain for their community.
                  </p>
                  <div className="flex justify-center md:hidden mt-5">
                    <div className="w-3/4">
                      <Image
                        className="img-fluid"
                        src="/images/Steem_Landing_ForSocialUsers.png"
                        alt="Steem for Social Users"
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
                  src="/images/Steem_Landing_ForSocialUsers.png"
                  alt="Steem for Social Users"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-gray-200">
          <div className="container mx-auto px-4">
            {/* Creators Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 py-12 lg:py-16">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  className="w-48 h-72 object-contain"
                  src="/images/Steem_Icon_CoinFalling.png"
                  alt="Creators"
                  width={200}
                  height={300}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-blue text-2xl font-bold mb-2">Creators</h2>
                <h3 className="text-3xl font-bold mb-6">Get paid to play.</h3>
                <p className="text-lg mb-4 leading-relaxed">
                  Everyone who contributes content on a Steem-based app has the same opportunity to earn money from the rewards pool. Steem apps enable creators to earn money for pursuing their passions via shared content.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  By posting your content, you can earn upvotes from community members. The upvotes you receive entitle you to a portion of the &quot;rewards pool,&quot; which depends on how much Steem Power you have.
                </p>
                <Link href="https://steemit.com/" className="btn btn-blue" target="_blank">
                  Start Creating
                </Link>
              </div>
            </div>

            {/* Curators Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 py-12 lg:py-16">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  className="w-48 h-72 object-contain"
                  src="/images/Steem_Icon_CoinFunnel.png"
                  alt="Curators"
                  width={200}
                  height={300}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-blue text-2xl font-bold mb-2">Curators</h2>
                <h3 className="text-3xl font-bold mb-6">Help your community thrive and grow by upvoting high quality content.</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  If you discover a post on a Steem-based app and upvote it before it becomes popular, you earn a curation reward. The reward amount will depend on the amount of rewards the post earns over time.
                </p>
                <Link href="https://steemit.com/" className="btn btn-blue" target="_blank">
                  Start Curating
                </Link>
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
