"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface TransactionData {
  name: string;
  count: number;
  icon: string;
  alt: string;
}

const TransactionComparison = () => {
  const transactionsRef = useRef<HTMLElement>(null);
  const blockchainRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!transactionsRef.current || hasAnimated.current) return;

      const rect = transactionsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 检查组件是否完全在视口内显示
      const isFullyVisible = rect.top >= 0 && rect.bottom <= windowHeight;

      if (isFullyVisible) {
        hasAnimated.current = true;
        
        blockchainRefs.current.forEach((blockchain) => {
          if (blockchain) {
            blockchain.style.transition = '1s';
            
            const line = blockchain.querySelector('.line') as HTMLElement;
            const text = blockchain.querySelector('.text') as HTMLElement;
            const textTx = blockchain.querySelector('.text-tx') as HTMLElement;
            
            if (line) {
              line.style.transition = '1s';
            }
            
            if (text) {
              text.style.transition = '1s';
            }

            // Animate to final state
            setTimeout(() => {
              blockchain.style.transform = 'translateY(0px)';
              if (line) line.style.transform = 'scaleY(1)';
              if (text) text.style.opacity = '1';
              
              // Start count animation
              if (textTx) {
                startCountAnimation(textTx);
              }
            }, 100);
          }
        });
      }
    };

    // Initial setup
    blockchainRefs.current.forEach((blockchain) => {
      if (blockchain) {
        const marginBottom = getComputedStyle(blockchain).marginBottom;
        blockchain.style.transform = `translateY(${marginBottom})`;
        
        const line = blockchain.querySelector('.line') as HTMLElement;
        const text = blockchain.querySelector('.text') as HTMLElement;
        
        if (line) {
          line.style.transform = 'scaleY(0)';
        }
        
        if (text) {
          text.style.opacity = '0';
        }
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const startCountAnimation = (element: HTMLElement) => {
    if (element.dataset.triggered) return;
    
    const countTo = parseFloat(element.textContent?.replace(/,/g, '') || '0');
    const startAt = Math.floor(4 * countTo / 5);
    
    element.dataset.triggered = 'true';
    
    let current = startAt;
    const increment = (countTo - startAt) / 100;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= countTo) {
        current = countTo;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString();
    }, 20);
  };

  const transactions: TransactionData[] = [
    {
      name: "Steem",
      count: 1169182,
      icon: "/images/Steem_Icon_Blue-e1537216818812.png",
      alt: "Steem"
    },
    {
      name: "Ethereum", 
      count: 545224,
      icon: "/images/Ethereum_Icon-e1537216851935.png",
      alt: "Ethereum"
    },
    {
      name: "Bitcoin",
      count: 530125,
      icon: "/images/Bitcoin_Icon-e1537216865628.png",
      alt: "Bitcoin"
    }
  ];

  return (
    <div>
      <Image
        id="transactions_up"
        className="img-fluid hidden md:block"
        src="/images/Steem_Arrow.png"
        alt="Transaction comparison"
        width={200}
        height={100}
      />
      <figure
        id="transactions"
        ref={transactionsRef}
        className="flex items-end m-0 pb-4 xl:pb-5"
      >
        {transactions.map((tx, index) => (
          <div
            key={tx.name}
            ref={(el) => {
              blockchainRefs.current[index] = el;
            }}
            className="blockchain flex items-center"
            data-blockchain={tx.name}
          >
            <span className="line"></span>
            <Image
              className="img-fluid mr-3"
              src={tx.icon}
              alt={tx.alt}
              width={40}
              height={40}
            />
            <div className="text">
              <h3 className="m-0 text-xl font-bold">{tx.name}</h3>
              <h3 className="m-0 font-light text-roboto text-grey text-tx text-2xl">
                {tx.count.toLocaleString()}
              </h3>
            </div>
          </div>
        ))}
        <figcaption>
          <p className="text-sm text-grey">
            <i>
              Total transactions<sup>(TX)</sup> - Live 24h
            </i>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default TransactionComparison;
