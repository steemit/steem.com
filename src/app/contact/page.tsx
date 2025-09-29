import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Header variant="blue" />
      <div className="wrap">
        <div className="content">
          <main className="main">
            <section className="bg-wave py-7 lg:py-8 xl:py-10">
              <div className="container mt-5 mt-md-7 mb-md-5 my-lg-8 my-xl-10">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="text-center">
                      <div className="nomargin-container">
                        <h2 className="text-blue">Contact</h2>
                        <p>
                          If you have any questions about our platform or
                          cryptocurrency, send us an email and we&apos;ll be in
                          touch.
                        </p>
                        <h4 className="mt-4">
                          <a href="mailto:contact@steem.com">
                            contact@steem.com
                          </a>
                        </h4>
                      </div>
                      <Image
                        className="img-fluid mt-10 px-3 px-md-5"
                        src="/images/icon-cube-dark.png"
                        alt="Contact Icon"
                        width={376}
                        height={268}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
