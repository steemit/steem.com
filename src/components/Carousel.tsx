import Image from 'next/image';
import Link from 'next/link';

export default function Carousel() {
  return (
    <div className="carousel-vertical">
      <figure className="figure-social box-shadow">
        <div className="meta d-flex align-items-center">
          <Image
            className="img-fluid img-profile rounded-circle mr-3"
            src="/images/man-1.jpg"
            alt="User profile"
            width={40}
            height={40}
          />
          <div className="meta-text">
            <p className="m-0 small font-weight-bold text-blue">@TimFloyd87</p>
            <p className="m-0 small text-grey">Played on <Link href="https://steem-retrogames.com/" target="_blank" rel="noopener"><u>Steem Retrogames</u></Link></p>
          </div>
        </div>
        <div className="bg-image logo d-block d-lg-none" style={{backgroundImage: 'url(/images/steem-retrogames-mobile.png)'}}></div>
        <div className="bg-image logo d-none d-lg-block" style={{backgroundImage: 'url(/images/steem-retrogames.png)'}}></div>
      </figure>
      
      <figure className="figure-social box-shadow">
        <div className="meta d-flex align-items-center">
          <Image
            className="img-fluid img-profile rounded-circle mr-3"
            src="/images/girl-4.jpg"
            alt="User profile"
            width={40}
            height={40}
          />
          <div className="meta-text">
            <p className="m-0 small font-weight-bold text-blue">@JessEjiohuo</p>
            <p className="m-0 small text-grey">Shared on <Link href="https://steematlas.com/" target="_blank" rel="noopener"><u>SteemAtlas</u></Link></p>
          </div>
        </div>
        <div className="bg-image logo d-block d-lg-none" style={{backgroundImage: 'url(/images/steematlas-mobile.png)'}}></div>
        <div className="bg-image logo d-none d-lg-block" style={{backgroundImage: 'url(/images/steematlas.png)'}}></div>
      </figure>
      
      <figure className="figure-social box-shadow">
        <div className="meta d-flex align-items-center">
          <Image
            className="img-fluid img-profile rounded-circle mr-3"
            src="/images/girl-1.jpg"
            alt="User profile"
            width={40}
            height={40}
          />
          <div className="meta-text">
            <p className="m-0 small font-weight-bold text-blue">@Flowerpowergurl</p>
            <p className="m-0 small text-grey">Posted on <Link href="https://steemit.com/" target="_blank" rel="noopener"><u>Steemit</u></Link></p>
          </div>
        </div>
        <div className="bg-image logo d-block d-lg-none" style={{backgroundImage: 'url(/images/SteemIt-Mobile.jpg)'}}></div>
        <div className="bg-image logo d-none d-lg-block" style={{backgroundImage: 'url(/images/SteemIt.jpg)'}}></div>
      </figure>
      
      <figure className="figure-social box-shadow">
        <div className="meta d-flex align-items-center">
          <Image
            className="img-fluid img-profile rounded-circle mr-3"
            src="/images/h4lab-logo.jpeg"
            alt="User profile"
            width={40}
            height={40}
          />
          <div className="meta-text">
            <p className="m-0 small font-weight-bold text-blue">@h4lab</p>
            <p className="m-0 small text-grey">Played on <Link href="https://hari-raid.h4lab.com/" target="_blank" rel="noopener"><u>HARI RAID</u></Link></p>
          </div>
        </div>
        <div className="bg-image logo d-block d-lg-none" style={{backgroundImage: 'url(/images/hari-raid-logo-mobile.webp)'}}></div>
        <div className="bg-image logo d-none d-lg-block" style={{backgroundImage: 'url(/images/hari-raid-logo.webp)'}}></div>
      </figure>
    </div>
  );
}
