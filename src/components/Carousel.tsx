'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'sliding'>('idle');

  // Animation parameters
  const fadeTime = 1000;
  const fadeTimeDelay = 500;
  const interval = 4000;
  const visible = 3;

  // Figures data
  const figures = [
    {
      id: 0,
      profile: "/images/man-1.jpg",
      username: "@TimFloyd87",
      platform: "Steem Retrogames",
      platformUrl: "https://steem-retrogames.com/",
      mobileLogo: "/images/steem-retrogames-mobile.png",
      desktopLogo: "/images/steem-retrogames.png"
    },
    {
      id: 1,
      profile: "/images/girl-4.jpg",
      username: "@JessEjiohuo",
      platform: "SteemAtlas",
      platformUrl: "https://steematlas.com/",
      mobileLogo: "/images/steematlas-mobile.png",
      desktopLogo: "/images/steematlas.png"
    },
    {
      id: 2,
      profile: "/images/girl-1.jpg",
      username: "@Flowerpowergurl",
      platform: "Steemit",
      platformUrl: "https://steemit.com/",
      mobileLogo: "/images/SteemIt-Mobile.jpg",
      desktopLogo: "/images/SteemIt.jpg"
    },
    {
      id: 3,
      profile: "/images/h4lab-logo.jpeg",
      username: "@h4lab",
      platform: "HARI RAID",
      platformUrl: "https://hari-raid.h4lab.com/",
      mobileLogo: "/images/hari-raid-logo-mobile.webp",
      desktopLogo: "/images/hari-raid-logo.webp"
    },
  ];

  // Get currently visible figures (show 3, preload 1)
  const getVisibleFigures = () => {
    const visibleFigures = [];
    // Render 4 figures: first 3 visible + 4th preloaded (hidden)
    for (let i = 0; i < visible + 1; i++) {
      const figureIndex = (currentIndex + i) % figures.length;
      visibleFigures.push({
        ...figures[figureIndex],
        displayIndex: i,
        isFirst: i === 0,
        isLast: i === visible - 1,
        isPreload: i === visible, // 4th is preloaded
        animationClass: getAnimationClass(i)
      });
    }
    return visibleFigures;
  };

  // Get animation class name
  const getAnimationClass = (displayIndex: number) => {
    if (initialLoad) {
      // During initial load, only first 3 figures fade in, 4th is hidden
      if (displayIndex < visible) {
        return 'fade-in';
      }
      return 'hidden';
    }
    
    if (animationPhase === 'sliding') {
      if (displayIndex === 0) {
        return 'slide-up'; // First figure slides up and fades out
      } else {
        return 'slide-move'; // Other figures (including 4th) slide up
      }
    }
    
    // In non-sliding state, 4th figure is hidden
    if (displayIndex === visible) {
      return 'hidden';
    }
    
    return '';
  };

  // Get figure style class name
  const getFigureClassName = (figure: { animationClass?: string }) => {
    let className = "figure-social flex box-shadow";
    
    if (figure.animationClass) {
      className += ` ${figure.animationClass}`;
    }
    
    return className;
  };

  // Initial load animation
  useEffect(() => {
    if (initialLoad) {
      // Fade in first 3 figures sequentially
      for (let i = 0; i < visible; i++) {
        setTimeout(() => {
          // CSS animation will handle fade-in effect automatically
        }, i * fadeTimeDelay);
      }
      
      // Start carousel after initial load completes
      setTimeout(() => {
        setInitialLoad(false);
      }, visible * fadeTimeDelay + fadeTime);
    }
  }, [initialLoad, fadeTime, fadeTimeDelay, visible]);

  // Carousel loop
  useEffect(() => {
    if (!initialLoad && !isAnimating) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setAnimationPhase('sliding');
        
        // Update index after slide animation completes (simulate DOM movement)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % figures.length);
          setIsAnimating(false);
          setAnimationPhase('idle');
        }, fadeTime);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [initialLoad, isAnimating, interval, fadeTime, figures.length]);

  return (
    <div className="carousel-vertical">
      {getVisibleFigures().map((figure) => (
        <figure key={`${figure.id}-${currentIndex}`} className={getFigureClassName(figure)}>
          <div className="meta flex items-center">
            <Image
              className="img-fluid img-profile rounded-full mr-3"
              src={figure.profile}
              alt="User profile"
              width={40}
              height={40}
            />
            <div className="meta-text">
              <p className="m-0 small font-weight-bold text-blue">{figure.username}</p>
              <p className="m-0 small text-grey">
                {figure.platform === "Steem Retrogames" || figure.platform === "HARI RAID" ? "Played on" : 
                 figure.platform === "SteemAtlas" ? "Shared on" : "Posted on"}{" "}
                <Link href={figure.platformUrl} target="_blank" rel="noopener">
                  <u>{figure.platform}</u>
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-image logo block lg:hidden" style={{backgroundImage: `url(${figure.mobileLogo})`}}></div>
          <div className="bg-image logo hidden lg:block" style={{backgroundImage: `url(${figure.desktopLogo})`}}></div>
        </figure>
      ))}
    </div>
  );
}
