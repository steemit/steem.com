import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BrandPage() {
  return (
    <>
      <Header variant="blue" />
      <div className="wrap" role="document">
        <div className="content">
          <main className="main">
            <section className="bg-wave pt-20">
              <div className="container mt-5 mt-md-7 mb-md-5 my-lg-8 my-xl-10">
                <div className="row align-items-center justify-center justify-md-start">
                  <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                    <div className="nomargin-container text-offblack">
                      <h2 className="text-blue">
                        Brand Assets – we made this for the community
                      </h2>
                      <p>
                        We see a world where people get paid for their content
                        and attention. A future where digital content is
                        monetized without resorting to advertising or selling
                        user data. We&apos;re busy building that world by creating
                        new token-based economic models. We use tokens to
                        transparently align incentives between all parties in a
                        social platform—from the founders to the end users.
                      </p>
                      <p>
                        <a
                          className="btn btn-blue"
                          href="/wp-content/uploads/2018/10/Steem-Logos-and-Usage-Guide.zip"
                          download=""
                        >
                          Download assets
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-xl-4 offset-md-1 offset-lg-2 nomargin-container">
                    <Image
                      className="img-fluid fullwidth mt-4 mt-md-0"
                      src="/images/icon-army-dark-1.png"
                      alt="Steem Brand Assets"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              id="Steem_Background"
              className="bg-gradient py-7 py-lg-8 py-xl-10 text-white transition"
            >
              <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-10">
                    <h2
                      id="Steem_Title"
                      className="text-center text-md-left transition"
                    >
                      Logos
                    </h2>
                    <div className="row justify-center my-md-5 my-lg-6 my-xl-7 my-xxl-8">
                      <div className="col-md-8 col-lg-6">
                        <figure className="my-5">
                          <svg
                            version="1.1"
                            id="Steem_Logo"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 1930 615"
                            xmlSpace="preserve"
                          >
                            <style type="text/css">
                              {`.path-steem{fill:white;}`}
                            </style>
                            <path
                              className="path-steem"
                              d="M300.9,15C137.7,15,5.4,147.3,5.4,310.5s132.3,295.5,295.5,295.5s295.5-132.3,295.5-295.5S464.1,15,300.9,15z   M227,412.6l-2.8,2.8c-5.8,5.8-12,11.3-18.4,16.4l-7.4,5.8c-0.5,0.4-1.1,0.6-1.7,0.6c-0.5,0-1-0.1-1.4-0.4c-1-0.6-1.5-1.7-1.2-2.9  l2.9-13.1c3.2-14.2,2.5-29.1-2-43l-1.6-4.8c-1.8-5.6-4-11.1-6.3-16.5l0,0L153,277l-3.7-11c-1.1-3.4-1.9-6.9-2.3-10.5l-0.6-5.5  c-1.7-15.5,3.6-30.7,14.6-41.7l2.8-2.8c5.8-5.8,12-11.3,18.4-16.4l7.4-5.8c0.9-0.7,2.1-0.8,3.1-0.2c1,0.6,1.5,1.7,1.2,2.9l-2.9,13.1  c-3.2,14.2-2.5,29.1,2,43l1.6,4.8c1.8,5.6,4,11.1,6.3,16.5l34.2,80.5l3.7,11c1.1,3.4,1.9,6.9,2.3,10.5l0.6,5.5  C243.3,386.3,238,401.5,227,412.6z M342.4,439l-3.6,3.6c-7.3,7.3-15.1,14.3-23.2,20.6l-9.6,7.6c-0.5,0.4-1.2,0.6-1.8,0.6  c-0.5,0-1.1-0.2-1.6-0.5c-1.1-0.7-1.6-1.9-1.3-3.1l3.8-16.9c4-18,3.1-36.8-2.6-54.3l-2-6.1c-2.3-7.1-5-14.1-8-20.9l0,0l-43.1-101.5  l-4.6-13.8c-1.4-4.2-2.4-8.7-2.9-13.1l-0.8-7c-2.2-19.4,4.5-38.4,18.2-52.3l3.6-3.6c7.3-7.3,15.1-14.3,23.2-20.6l9.6-7.6  c1-0.8,2.3-0.9,3.4-0.2c1.1,0.7,1.6,1.9,1.3,3.1l-3.8,16.9c-4,18-3.1,36.8,2.6,54.3l2,6.1c2.3,7,5,14.1,8,20.9l43.1,101.6l4.6,13.8  c1.4,4.2,2.4,8.7,2.9,13.1l0.8,7C362.8,406.1,356.1,425.2,342.4,439z M440.8,412.6l-2.8,2.8c-5.8,5.8-12,11.3-18.4,16.4l-7.4,5.8  c-0.5,0.4-1.1,0.6-1.7,0.6c-0.5,0-1-0.1-1.4-0.4c-1-0.6-1.5-1.7-1.2-2.9l2.9-13.1c3.2-14.2,2.5-29.1-2-43l-1.6-4.8  c-1.8-5.6-4-11.1-6.3-16.5l0,0L366.7,277l-3.7-11c-1.1-3.4-1.9-6.9-2.3-10.5l-0.6-5.5c-1.7-15.5,3.6-30.7,14.6-41.7l2.8-2.8  c5.8-5.8,12-11.3,18.4-16.4l7.4-5.8c0.9-0.7,2.1-0.8,3.1-0.2c1,0.6,1.5,1.7,1.2,2.9l-2.9,13.1c-3.2,14.2-2.5,29.1,2,43l1.6,4.8  c1.8,5.6,4,11.1,6.3,16.5l34.2,80.5l3.7,11c1.1,3.4,1.9,6.9,2.3,10.5l0.6,5.5C457.1,386.3,451.8,401.5,440.8,412.6z"
                            />
                            <path
                              className="path-steem"
                              d="M929.5,296l-39.7-16.7c-24.4-9.9-46.9-18.5-46.9-41.5c0-21.6,18-34.7,46-34.7c22.6,0,41.3,7.6,58.2,20.6  l32.6-29c-23-22.8-56.2-37.1-90.8-37.1c-57.3,0-98.8,36.1-98.8,83c0,43.3,30.2,66.3,59.5,78.5l40.1,17.6c27.1,11.3,46,18.9,46,43.3  c0,23-18.5,37.9-51.4,37.9c-25.4,0-51.7-11.6-72.2-29L777,420c28,27.5,66.3,43.3,106,43.3c66.3,0,106-39.7,106-87.5  C989,333,964.7,310.9,929.5,296z"
                            />
                            <path
                              className="path-steem"
                              d="M1117.6,421.9c-21.2,0-31.1-12.6-31.1-38.8V280.6h46.5v-41h-46.5v-78.9l-47.7,42.4l-1.9,36.5h-34.3v41h31.6  v102.5c0,47.8,18.9,80.3,70.4,80.3c14.8,0,28-2.9,39-6.2c2.1-0.6,4.1-1.3,6.1-1.9l-15.3-36.1C1129,420.7,1123,421.9,1117.6,421.9z"
                            />
                            <path
                              className="path-steem"
                              d="M1856.8,231.1c-28,0-50.1,17.1-71.3,39.7c-10.4-24.8-28.9-39.7-61.3-39.7c-27.5,0-49.2,15.8-67.7,35.6h-1.8  l-3.6-30.2h-42.9v221.5h51.9V305.8c0-1.6,0.7-3.2,1.8-4.4c16.5-17.2,31.6-25.6,44.7-25.6c23.5,0,34.3,13.5,34.3,50.1v132.2h51.9  V305.8c0-1.6,0.7-3.2,1.8-4.4c16.4-17.2,31.2-25.6,44.7-25.6c23,0,33.8,13.5,33.8,50.1v132.2h52.3V319  C1925.4,263.1,1903.7,231.1,1856.8,231.1z"
                            />
                            <path
                              className="path-steem"
                              d="M1478.3,231.1c-51.9,0-101.9,44.2-101.9,116.4c0,73.1,47.8,115.9,109.2,115.9c28,0,54.6-9.9,75.8-23.9  l-14.8-34.8c-15.3,13.4-35.3,18.6-54.3,18.6c-35.6,0-60.9-22.6-65.4-62.7h140.7c1.4-5.4,2.3-14.4,2.3-24.4  C1569.9,274.4,1538.3,231.1,1478.3,231.1z M1426.5,327.6c4.5-37,27.1-56.4,53.2-56.4c30.2,0,45.1,21.2,45.1,56.4H1426.5z"
                            />
                            <path
                              className="path-steem"
                              d="M1261,231.1c-51.9,0-101.9,44.2-101.9,116.4c0,73.1,47.8,115.9,109.2,115.9c28,0,54.6-9.9,75.8-23.9l-14.8-34.8  c-15.3,13.4-35.3,18.6-54.3,18.6c-35.6,0-60.9-22.6-65.4-62.7h140.7c1.4-5.4,2.3-14.4,2.3-24.4C1352.6,274.4,1321,231.1,1261,231.1z   M1209.1,327.6c4.5-37,27.1-56.4,53.2-56.4c30.2,0,45.1,21.2,45.1,56.4H1209.1z"
                            />
                          </svg>
                        </figure>
                      </div>
                    </div>
                    <div className="d-flex justify-center">
                      <button className="arrow arrow-prev mx-3 transition"></button>
                      <button className="arrow arrow-next mx-3 transition"></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-7 py-lg-8 py-xl-10">
              <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-10">
                    <h2 className="text-blue text-center text-md-left mb-md-4">
                      Colors
                    </h2>
                    <div className="row">
                      <div className="col-md-6 col-lg-4 my-4">
                        <div className="d-flex justify-center justify-md-start">
                          <div
                            className="img-profile rounded-circle"
                            style={{ backgroundColor: "#171fc9" }}
                          ></div>
                          <div className="ml-4">
                            <h3>Deep Blue</h3>
                            <table className="text-grey">
                              <tbody>
                                <tr>
                                  <td className="pr-3">hex:</td>
                                  <td>#171fc9</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">rgb:</td>
                                  <td>23 / 31 / 201</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">cmyk:</td>
                                  <td>89 / 85 / 0 / 21</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 my-4">
                        <div className="d-flex justify-center justify-md-start">
                          <div
                            className="img-profile rounded-circle"
                            style={{ backgroundColor: "#11a7f2" }}
                          ></div>
                          <div className="ml-4">
                            <h3>Oxygen Blue</h3>
                            <table className="text-grey">
                              <tbody>
                                <tr>
                                  <td className="pr-3">hex:</td>
                                  <td>#11a7f2</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">rgb:</td>
                                  <td>17 / 167 / 242</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">cmyk:</td>
                                  <td>93 / 31 / 0 / 5</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 my-4">
                        <div className="d-flex justify-center justify-md-start">
                          <div
                            className="img-profile rounded-circle"
                            style={{ backgroundColor: "#5f00de" }}
                          ></div>
                          <div className="ml-4">
                            <h3>Electric Violet</h3>
                            <table className="text-grey">
                              <tbody>
                                <tr>
                                  <td className="pr-3">hex:</td>
                                  <td>#5f00de</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">rgb:</td>
                                  <td>95 / 0 / 222</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">cmyk:</td>
                                  <td>57 / 100 / 0 / 13</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 my-4">
                        <div className="d-flex justify-center justify-md-start">
                          <div
                            className="border border-grey img-profile rounded-circle"
                            style={{ backgroundColor: "#ffffff" }}
                          ></div>
                          <div className="ml-4">
                            <h3>White</h3>
                            <table className="text-grey">
                              <tbody>
                                <tr>
                                  <td className="pr-3">hex:</td>
                                  <td>#ffffff</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">rgb:</td>
                                  <td>255 / 255 / 255</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">cmyk:</td>
                                  <td>0 / 0 / 0 / 0</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 my-4">
                        <div className="d-flex justify-center justify-md-start">
                          <div
                            className="img-profile rounded-circle"
                            style={{ backgroundColor: "#f5f5f5" }}
                          ></div>
                          <div className="ml-4">
                            <h3>Concrete</h3>
                            <table className="text-grey">
                              <tbody>
                                <tr>
                                  <td className="pr-3">hex:</td>
                                  <td>#f5f5f5</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">rgb:</td>
                                  <td>245 / 245 / 245</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">cmyk:</td>
                                  <td>0 / 0 / 0 / 4</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 my-4">
                        <div className="d-flex justify-center justify-md-start">
                          <div
                            className="img-profile rounded-circle"
                            style={{ backgroundColor: "#212529" }}
                          ></div>
                          <div className="ml-4">
                            <h3>Midnight</h3>
                            <table className="text-grey">
                              <tbody>
                                <tr>
                                  <td className="pr-3">hex:</td>
                                  <td>#212529</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">rgb:</td>
                                  <td>33 / 37 / 41</td>
                                </tr>
                                <tr>
                                  <td className="pr-3">cmyk:</td>
                                  <td>20 / 10 / 0 / 84</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-offwhite py-7 py-lg-8 py-xl-10">
              <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-10 mb-4">
                    <h2 className="text-blue text-center text-md-left">
                      Assets
                    </h2>
                    <p className="small mt-4">Background textures:</p>
                    <div className="row">
                      <div className="col-6 col-md-4">
                        <div
                          className="bg-image bg-landscape box-shadow border-rounded"
                          style={{
                            backgroundImage:
                              "url(/images/Steem_Gradient_Blue.png)",
                          }}
                        ></div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div
                          className="bg-image bg-landscape box-shadow border-rounded"
                          style={{
                            backgroundImage:
                              "url(/images/Steem_Wave_Grey-1.png)",
                          }}
                        ></div>
                      </div>
                    </div>
                    <p className="small mt-4">Icons:</p>
                    <div className="row">
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-network-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-cube-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-funnel-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-coinstack-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-people-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-clipboard-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-genesis-darkblue.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-improvements-darkblue.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-payout-darkblue.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-smt-darkblue.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-steemit-darkblue.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-circlesteem-gradient.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-circlelightning-gradient.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-circledollar-gradient.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-army-dark.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-4 col-md-3 col-lg-2 mb-3">
                        <div className="box-shadow border-rounded bg-white p-4">
                          <div
                            className="bg-square bg-icon"
                            style={{
                              backgroundImage:
                                "url(/images/icon-cloud-black.png)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-7 py-lg-8 py-xl-10 text-center text-md-left">
              <div className="container">
                <div className="row justify-center">
                  <div className="col-lg-10">
                    <h2 className="text-blue">Fonts</h2>
                    <div className="row">
                      <div className="col-md-6 my-4">
                        <p className="small text-grey">Headings</p>
                        <div className="my-4">
                          <h2 className="mb-2 font-weight-700">
                            Raleway Heavy
                          </h2>
                          <h2 className="mb-2 font-weight-600">Raleway Bold</h2>
                          <h2 className="mb-2 font-weight-400">
                            Raleway Medium
                          </h2>
                          <h2 className="mb-2 font-weight-300">
                            Raleway Regular
                          </h2>
                          <h2 className="mb-2 font-weight-200">
                            Raleway Extra Light
                          </h2>
                        </div>
                        <p className="mb-1 small text-grey">
                          Plus 4 more variants
                        </p>
                        <p className="mb-1 small">
                          <Link
                            className="a-underline text-lightblue text-underline"
                            href="https://fonts.google.com/specimen/Raleway"
                            target="_blank"
                            rel="noopener"
                          >
                            Implement via Google Fonts
                          </Link>
                        </p>
                      </div>
                      <div className="col-md-6 my-4">
                        <p className="small text-grey">Body</p>
                        <div className="my-4">
                          <h2 className="mb-2 text-roboto">Roboto</h2>
                          <h2 className="mb-2 text-roboto">
                            <em>Roboto Bold Italic</em>
                          </h2>
                          <h2 className="mb-2 text-roboto font-weight-400">
                            Roboto Regular
                          </h2>
                          <h2 className="mb-2 text-roboto font-weight-400">
                            <em>Roboto Italic</em>
                          </h2>
                          <h2 className="mb-2 text-roboto font-weight-300">
                            Roboto Light
                          </h2>
                        </div>
                        <p className="mb-1 small text-grey">
                          Plus 7 more variants
                        </p>
                        <p className="mb-1 small">
                          <a
                            className="a-underline text-lightblue text-underline"
                            href="https://fonts.google.com/specimen/Roboto"
                            target="_blank"
                            rel="noopener"
                          >
                            Implement via Google Fonts
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-offwhite py-5 py-md-6 py-lg-7 py-xl-10 overflow-hidden">
              <div className="container">
                <div className="row justify-center text-center">
                  <div className="col-md-4 col-xl-3">
                    <div>
                      <figure className="figure-circle bg-white">
                        <Image
                          className="img-fluid img-icon"
                          src="/images/Steem_File.png"
                          alt="Steem File"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </figure>
                      <h3>Complete Package</h3>
                      <p className="text-grey">
                        Download our complete set of assets to use across a wide
                        range of materials
                      </p>
                    </div>
                    <div>
                      <a
                        href="/wp-content/uploads/2018/10/Steem-Logos-and-Usage-Guide.zip"
                        className="btn btn-blue mx-md-3 mx-lg-4"
                        download
                      >
                        Download .zip
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-5 bg-white">
              <div className="container">
                <div className="row align-items-center justify-between text-center text-md-left">
                  <div className="col-md-6">
                    <h2 className="mb-md-0 text-blue">Contact</h2>
                  </div>
                  <div className="col-md-5 col-lg-4 text-md-right">
                    <Link href="/contact/" className="btn btn-blue">
                      <i className="fa fa-envelope mr-3"></i>Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
