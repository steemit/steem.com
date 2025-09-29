'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'sliding'>('idle');

  // 动画参数
  const fadeTime = 1000;
  const fadeTimeDelay = 500;
  const interval = 5000;
  const visible = 3;

  // figures数据
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

  // 获取当前显示的figures（只显示3个）
  const getVisibleFigures = () => {
    const visibleFigures = [];
    for (let i = 0; i < visible; i++) {
      const figureIndex = (currentIndex + i) % figures.length;
      visibleFigures.push({
        ...figures[figureIndex],
        displayIndex: i,
        isFirst: i === 0,
        isLast: i === visible - 1,
        animationClass: getAnimationClass(i)
      });
    }
    return visibleFigures;
  };

  // 获取动画类名
  const getAnimationClass = (displayIndex: number) => {
    if (initialLoad) {
      return 'fade-in';
    }
    
    if (animationPhase === 'sliding') {
      if (displayIndex === 0) {
        return 'slide-up'; // 第一个figure向上滑出
      } else if (displayIndex === visible - 1) {
        return 'slide-in'; // 最后一个figure从下方滑入
      }
    }
    
    return '';
  };

  // 获取figure的样式类名
  const getFigureClassName = (figure: any) => {
    let className = "figure-social flex box-shadow";
    
    if (figure.animationClass) {
      className += ` ${figure.animationClass}`;
    }
    
    return className;
  };

  // 初始加载动画
  useEffect(() => {
    if (initialLoad) {
      // 依次淡入前3个figure
      for (let i = 0; i < visible; i++) {
        setTimeout(() => {
          // CSS动画会自动处理淡入效果
        }, i * fadeTimeDelay);
      }
      
      // 初始加载完成后开始轮播
      setTimeout(() => {
        setInitialLoad(false);
      }, visible * fadeTimeDelay + fadeTime);
    }
  }, [initialLoad, fadeTime, fadeTimeDelay, visible]);

  // 轮播循环
  useEffect(() => {
    if (!initialLoad && !isAnimating) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setAnimationPhase('sliding');
        
        // 滑动动画完成后更新索引（模拟DOM移动）
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
