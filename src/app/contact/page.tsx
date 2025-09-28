import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header variant="blue" />
      
      <main className="main">
        {/* Hero Section */}
        <section className="bg-wave py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4 mt-7 my-lg-8 my-xl-10">
            <div className="row items-center justify-center md:justify-start">
              <div className="col-12 md:col-7 lg:col-6 xxl:col-5">
                <div className="nomargin-container text-steem-offblack">
                  <h6 className="text-steem-lightblue text-uppercase text-sm font-bold mb-2">Contact Us</h6>
                  <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">
                    Get in touch with our team
                  </h2>
                  <p className="text-lg leading-relaxed">
                    If you have any questions about our platform or cryptocurrency, send us an email and we'll be in touch.
                  </p>
                </div>
              </div>
              <div className="col-6 md:col-3 xl:col-2 md:offset-1 lg:offset-2 xxl:offset-3 nomargin-container">
                <Image
                  className="img-fluid mt-4 md:mt-0"
                  src="/images/icon-cube-dark.png"
                  alt="Contact Icon"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-7 py-lg-8 py-xl-10 bg-offwhite">
          <div className="container mx-auto px-4">
            <div className="row justify-center">
              <div className="md:col-8 lg:col-6">
                <div className="bg-white border-rounded box-shadow p-6 lg:p-8">
                  <h3 className="text-steem-blue text-2xl font-bold mb-6">Send us a message</h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steem-grey mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steem-blue focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-steem-grey mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steem-blue focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-steem-grey mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steem-blue focus:border-transparent"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-steem-grey mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-steem-blue focus:border-transparent"
                        placeholder="Tell us more about your question or inquiry..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-blue w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="py-7 py-lg-8 py-xl-10">
          <div className="container mx-auto px-4">
            <div className="row justify-center">
              <div className="md:col-10 lg:col-8">
                <div className="text-center">
                  <h2 className="text-steem-blue text-3xl lg:text-4xl font-bold mb-6">Other ways to reach us</h2>
                  
                  <div className="row mt-8">
                    <div className="col-12 md:col-4 mb-6">
                      <div className="text-center">
                        <div className="figure-circle mx-auto mb-4">
                          <Image
                            className="img-fluid img-icon"
                            src="/images/Steem_Icon_News_Temp.png"
                            alt="Community"
                            width={60}
                            height={60}
                          />
                        </div>
                        <h3 className="text-steem-blue text-xl font-bold mb-3">Community</h3>
                        <p className="text-steem-grey mb-4">
                          Join our community discussions and get help from other users.
                        </p>
                        <a
                          href="https://steemit.com/@steemitblog"
                          target="_blank"
                          rel="noopener"
                          className="btn btn-blue"
                        >
                          Visit Community
                        </a>
                      </div>
                    </div>
                    
                    <div className="col-12 md:col-4 mb-6">
                      <div className="text-center">
                        <div className="figure-circle mx-auto mb-4">
                          <Image
                            className="img-fluid img-icon"
                            src="/images/Steem_Wrench.png"
                            alt="Developers"
                            width={60}
                            height={60}
                          />
                        </div>
                        <h3 className="text-steem-blue text-xl font-bold mb-3">Developers</h3>
                        <p className="text-steem-grey mb-4">
                          Technical questions? Check out our developer resources.
                        </p>
                        <a
                          href="https://developers.steem.io/"
                          target="_blank"
                          rel="noopener"
                          className="btn btn-blue"
                        >
                          Developer Portal
                        </a>
                      </div>
                    </div>
                    
                    <div className="col-12 md:col-4 mb-6">
                      <div className="text-center">
                        <div className="figure-circle mx-auto mb-4">
                          <Image
                            className="img-fluid img-icon"
                            src="/images/Steem_Logo_Blue.png"
                            alt="Support"
                            width={60}
                            height={60}
                          />
                        </div>
                        <h3 className="text-steem-blue text-xl font-bold mb-3">Support</h3>
                        <p className="text-steem-grey mb-4">
                          Need immediate help? Check our FAQ or contact support.
                        </p>
                        <a
                          href="/faq/"
                          className="btn btn-blue"
                        >
                          View FAQ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
