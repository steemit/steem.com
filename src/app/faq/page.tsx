"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function FAQ() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300); // scroll more than 300px to show button
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header variant="blue" />
      <div className="wrap" role="document">
        <div className="content">
          <main className="main">
            <section className="bg-wave faq-section py-7 lg:py-8 xl:py-10">
              <div id="faq" className="container">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <h2 id="faq_title" className="text-blue m-0 pt-3">
                      FAQ
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="w-full lg:w-5/12 xl:w-1/3 relative">
                    <div id="questions" className="scroll-container">
                      <h3 className="text-lightblue mt-4 mt-md-5 mb-3">
                        <a href="#Blockchain">Blockchain</a>
                      </h3>
                      <ul>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-do-i-use-cli_wallet">
                              How do I use cli_wallet?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#can-i-mine-steem">Can I mine STEEM?</a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#where-can-i-find-the-information-for-the-official-launch-of-the-blockchain">
                              Where can I find the information for the official
                              launch of the blockchain?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#is-there-a-way-to-see-the-raw-data-that-is-stored-in-the-blockchain">
                              Is there a way to see the raw data that is stored
                              in the blockchain?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-often-does-the-steem-blockchain-produce-a-new-block">
                              How often does the Steem blockchain produce a new
                              block?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-is-the-difference-between-proof-of-work-proof-of-stake-and-delegated-proof-of-stake">
                              What is the difference between Proof of Work,
                              Proof of Stake, and Delegated Proof of Stake?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-is-steem-different-from-bitcoin">
                              How is Steem different from Bitcoin?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-is-the-difference-between-steem-and-steemit">
                              What is the difference between Steem and Steemit?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-does-bandwidth-work-on-the-steem-blockchain">
                              How does bandwidth work on the Steem blockchain?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-is-the-steem-blockchain">
                              What is the Steem blockchain?
                            </a>
                          </p>
                        </li>
                      </ul>

                      <h3 className="text-lightblue mt-4 mt-md-5 mb-3">
                        <a href="#Developers">Developers</a>
                      </h3>
                      <ul>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-is-available-for-developers-interested-in-steem">
                              What is available for developers interested in
                              Steem?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#is-there-a-github-page-for-the-steem-blockchain">
                              Is there a Github page for the Steem blockchain?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#are-the-steem-blockchain-and-steemit-com-code-open-source">
                              Are the Steem blockchain and steemit.com code
                              open-source?
                            </a>
                          </p>
                        </li>
                      </ul>

                      <h3 className="text-lightblue mt-4 mt-md-5 mb-3">
                        <a href="#Economics">Economics</a>
                      </h3>
                      <ul>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#where-do-the-new-steem-tokens-come-from">
                              Where do the new STEEM tokens come from?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-long-does-it-take-to-transfer-steem-or-sbd-tokens-between-users">
                              How long does it take to transfer STEEM or SBD
                              tokens between users?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#are-there-fees-for-powering-up-powering-down-trading-on-the-internal-market-or-converting-sbd-to-steem">
                              Are there fees for Powering Up, Powering Down,
                              trading on the internal market, or converting SBD
                              to STEEM?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-much-are-the-transaction-fees-for-sending-tokens-to-other-users">
                              How much are the transaction fees for sending
                              tokens to other users?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#will-i-get-a-1099-from-steemit">
                              Will I get a 1099 from Steemit?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-can-i-withdraw-my-steem-or-sbd-coins">
                              How can I withdraw my STEEM or SBD coins?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#can-i-sell-goods-and-services-on-steemit">
                              Can I sell goods and services on Steemit?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-is-a-mvest">What is a MVEST?</a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-can-i-do-with-my-sbd-tokens">
                              What can I do with my SBD tokens?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-can-i-do-with-my-steem-tokens">
                              What can I do with my STEEM tokens?
                            </a>
                          </p>
                        </li>
                      </ul>

                      <h3 className="text-lightblue mt-4 mt-md-5 mb-3">
                        <a href="#Security">Security</a>
                      </h3>
                      <ul>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-do-i-report-a-security-vulnerability">
                              How do I report a security vulnerability?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-does-the-stolen-account-recovery-process-work">
                              How does the stolen account recovery process work?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-should-i-do-if-i-discover-that-someone-hacked-my-account">
                              What should I do if I discover that someone hacked
                              my account?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#are-my-steem-and-steem-dollar-tokens-insured-in-the-event-of-a-hack-or-if-someone-takes-over-my-account">
                              Are my STEEM and Steem Dollar tokens insured in
                              the event of a hack or if someone takes over my
                              account?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-do-i-do-if-i-lost-my-password-keys">
                              What do I do if I lost my password/keys?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-are-my-different-keys-for">
                              What are my different keys for?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#why-is-the-master-password-a-long-string-of-gibberish">
                              Why is the master password a long string of
                              gibberish?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#why-should-i-be-careful-with-my-master-password">
                              Why should I be careful with my master password?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-can-i-keep-my-steem-account-secure">
                              How can I keep my Steem account secure?
                            </a>
                          </p>
                        </li>
                      </ul>

                      <h3 className="text-lightblue mt-4 mt-md-5 mb-3">
                        <a href="#General">General</a>
                      </h3>
                      <ul>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#where-can-i-ask-for-help-if-my-question-was-not-answered-here">
                              Where can I ask for help if my question was not
                              answered here?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-is-the-steem-whitepaper-and-what-is-its-purpose">
                              What is the Steem Whitepaper and what is its
                              purpose?
                            </a>
                          </p>
                        </li>
                      </ul>

                      <h3 className="text-lightblue mt-4 mt-md-5 mb-3">
                        <a href="#Witnesses">Witnesses</a>
                      </h3>
                      <ul>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#how-can-i-vote-for-witnesses">
                              How can I vote for witnesses?
                            </a>
                          </p>
                        </li>
                        <li>
                          <p className="mb-2 small text-grey">
                            <a href="#what-are-steem-witnesses">
                              What are Steem witnesses?
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-7/12 xl:w-2/3">
                    <div id="answers" className="scroll-container">
                      <h3
                        id="Blockchain"
                        className="text-lightblue mt-4 mt-md-5 mb-3"
                      >
                        Blockchain
                      </h3>

                      <p
                        id="how-do-i-use-cli_wallet"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How do I use cli_wallet?
                      </p>
                      <div className="small-container">
                        <p>
                          Here is a guide from the user{" "}
                          <a
                            href="https://steemit.com/@pfunk"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            @pfunk
                          </a>{" "}
                          explaining how to use the cli_wallet:{" "}
                          <a
                            href="https://steemit.com/steemhelp/@pfunk/a-learner-s-guide-to-using-steem-s-cliwallet-part-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://steemit.com/steemhelp/@pfunk/a-learner-s-guide-to-using-steem-s-cliwallet-part-1
                          </a>
                        </p>
                      </div>

                      <p
                        id="can-i-mine-steem"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Can I mine STEEM?
                      </p>
                      <div className="small-container">
                        <p>
                          No. Proof of work mining has been removed from Steem.
                        </p>
                      </div>

                      <p
                        id="where-can-i-find-the-information-for-the-official-launch-of-the-blockchain"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Where can I find the information for the official launch
                        of the blockchain?
                      </p>
                      <div className="small-container">
                        <p>
                          The original launch of Steem was on March 23, 2016,
                          announced on{" "}
                          <a
                            href="https://bitcointalk.org/index.php?topic=1408726.0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Bitcointalk.org
                          </a>
                          . The blockchain launched on March 24, 2016, via{" "}
                          <a
                            href="https://bitcointalk.org/index.php?topic=1410943.0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Bitcointalk.org
                          </a>
                          .
                        </p>
                      </div>

                      <p
                        id="is-there-a-way-to-see-the-raw-data-that-is-stored-in-the-blockchain"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Is there a way to see the raw data that is stored in the
                        blockchain?
                      </p>
                      <div className="small-container">
                        <p>
                          Yes. The blockchain data can be viewed in different
                          ways with third-party tools such as{" "}
                          <a
                            href="https://steemd.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            steemd.com
                          </a>{" "}
                          and{" "}
                          <a
                            href="https://steemdb.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            steemdb.com
                          </a>
                          .
                        </p>
                      </div>

                      <p
                        id="how-often-does-the-steem-blockchain-produce-a-new-block"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How often does the Steem blockchain produce a new block?
                      </p>
                      <div className="small-container">
                        <p>
                          The Steem blockchain schedules witnesses to produce a
                          new block every 3 seconds. 21 witness nodes produce 21
                          blocks in each 63-second round.
                        </p>
                      </div>

                      <p
                        id="what-is-the-difference-between-proof-of-work-proof-of-stake-and-delegated-proof-of-stake"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What is the difference between Proof of Work, Proof of
                        Stake, and Delegated Proof of Stake?
                      </p>
                      <div className="small-container">
                        <p>
                          <strong>Proof of work</strong> – Miners solve a
                          complex mathematical problem. The miner that solves
                          the problem first adds the block to the blockchain.
                          The network rewards the miner for doing so.
                        </p>
                        <p>
                          <strong>Proof of stake</strong> – Requires ownership,
                          or stake, in the cryptocurrency. The more tokens you
                          own, the more block creation power you have. Benefits:
                          eliminates the need for expensive mining rigs, runs on
                          a tiny fraction of the power, and it requires block
                          producers to have a stake in the network.
                        </p>
                        <p>
                          <strong>Delegated proof of stake</strong> –
                          Block-creating accounts, called witnesses, are
                          collectively approved by Steem stakeholders. Instead
                          of relying on proof of work to find blocks, the Steem
                          network actively schedules these accounts to improve
                          the time between blocks to 3 seconds.
                        </p>
                      </div>

                      <p
                        id="how-is-steem-different-from-bitcoin"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How is Steem different from Bitcoin?
                      </p>
                      <div className="small-container">
                        <p>
                          On a technical level, the two networks rely on the
                          same model of a blockchain, but are built upon
                          different technologies and codebase. Steem is based on
                          a new state-of-the-art blockchain technology called
                          Graphene, which uses &quot;witnesses&quot; instead of
                          &quot;miners&quot; to produce blocks.
                        </p>
                        <p>
                          The &quot;delegated proof of stake&quot; model of
                          using witnesses instead of miners allows for greater
                          efficiency in block production. With BTC, 100% of the
                          new coins that are created are allocated to block
                          producers (miners). With the Steem blockchain, only
                          10% of the new coins are paid to block producers
                          (witnesses). The other 90% of new STEEM coins are
                          awarded to content producers, curators, and Steem
                          Power holders.
                        </p>
                      </div>

                      <p
                        id="what-is-the-difference-between-steem-and-steemit"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What is the difference between Steem and Steemit?
                      </p>
                      <div className="small-container">
                        <p>
                          Steem is the blockchain technology and cryptocurrency.
                          Steemit is a social media platform built on top of the
                          Steem blockchain. Steemit.com is just one of many
                          applications that can be built on the Steem
                          blockchain.
                        </p>
                      </div>

                      <p
                        id="how-does-bandwidth-work-on-the-steem-blockchain"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How does bandwidth work on the Steem blockchain?
                      </p>
                      <div className="small-container">
                        <p>
                          Bandwidth on the Steem blockchain is a resource that
                          gets consumed when users perform certain actions like
                          posting, commenting, voting, and transferring tokens.
                          Users with more Steem Power have more bandwidth
                          available to them. Bandwidth regenerates over time.
                        </p>
                      </div>

                      <p
                        id="what-is-the-steem-blockchain"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What is the Steem blockchain?
                      </p>
                      <div className="small-container">
                        <p>
                          Steem is a blockchain-based social media platform that
                          rewards users for creating and curating content. It
                          uses a Delegated Proof of Stake (DPoS) consensus
                          mechanism and features three types of tokens: STEEM,
                          Steem Power (SP), and Steem Dollars (SBD).
                        </p>
                      </div>

                      <h3
                        id="Developers"
                        className="text-lightblue mt-4 mt-md-5 mb-3"
                      >
                        Developers
                      </h3>

                      <p
                        id="what-is-available-for-developers-interested-in-steem"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What is available for developers interested in Steem?
                      </p>
                      <div className="small-container">
                        <p>
                          Developers have access to comprehensive APIs, SDKs,
                          and documentation to build applications on the Steem
                          blockchain. The Steem blockchain provides a robust
                          platform for creating social media applications,
                          games, and other decentralized applications.
                        </p>
                      </div>

                      <p
                        id="is-there-a-github-page-for-the-steem-blockchain"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Is there a Github page for the Steem blockchain?
                      </p>
                      <div className="small-container">
                        <p>
                          Yes, the Steem blockchain code is available on GitHub
                          at{" "}
                          <a
                            href="https://github.com/steemit/steem"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://github.com/steemit/steem
                          </a>
                          .
                        </p>
                      </div>

                      <p
                        id="are-the-steem-blockchain-and-steemit-com-code-open-source"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Are the Steem blockchain and steemit.com code
                        open-source?
                      </p>
                      <div className="small-container">
                        <p>
                          Yes, both the Steem blockchain and Steemit.com are
                          open-source projects. The code is available on GitHub
                          and developers are encouraged to contribute and build
                          upon the platform.
                        </p>
                      </div>

                      <h3
                        id="Economics"
                        className="text-lightblue mt-4 mt-md-5 mb-3"
                      >
                        Economics
                      </h3>

                      <p
                        id="where-do-the-new-steem-tokens-come-from"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Where do the new STEEM tokens come from?
                      </p>
                      <div className="small-container">
                        <p>
                          New STEEM tokens are created through the
                          blockchain&apos;s inflation mechanism. The inflation
                          rate starts at 9.5% per year and decreases by 0.5%
                          each year until it reaches 0.95% per year. These new
                          tokens are distributed to content creators, curators,
                          witnesses, and Steem Power holders.
                        </p>
                      </div>

                      <p
                        id="how-long-does-it-take-to-transfer-steem-or-sbd-tokens-between-users"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How long does it take to transfer STEEM or SBD tokens
                        between users?
                      </p>
                      <div className="small-container">
                        <p>
                          Transfers of STEEM and SBD tokens are processed within
                          3 seconds, as new blocks are produced every 3 seconds
                          on the Steem blockchain.
                        </p>
                      </div>

                      <p
                        id="are-there-fees-for-powering-up-powering-down-trading-on-the-internal-market-or-converting-sbd-to-steem"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Are there fees for Powering Up, Powering Down, trading
                        on the internal market, or converting SBD to STEEM?
                      </p>
                      <div className="small-container">
                        <p>
                          No, there are no fees for Powering Up, Powering Down,
                          trading on the internal market, or converting SBD to
                          STEEM. These operations are free on the Steem
                          blockchain.
                        </p>
                      </div>

                      <p
                        id="how-much-are-the-transaction-fees-for-sending-tokens-to-other-users"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How much are the transaction fees for sending tokens to
                        other users?
                      </p>
                      <div className="small-container">
                        <p>
                          There are no transaction fees for sending STEEM or SBD
                          tokens to other users on the Steem blockchain. The
                          network is designed to be free for users.
                        </p>
                      </div>

                      <p
                        id="will-i-get-a-1099-from-steemit"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Will I get a 1099 from Steemit?
                      </p>
                      <div className="small-container">
                        <p>
                          Steemit Inc. does not issue 1099 forms. Users are
                          responsible for reporting their own earnings and
                          complying with applicable tax laws in their
                          jurisdiction.
                        </p>
                      </div>

                      <p
                        id="how-can-i-withdraw-my-steem-or-sbd-coins"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How can I withdraw my STEEM or SBD coins?
                      </p>
                      <div className="small-container">
                        <p>
                          You can withdraw STEEM and SBD tokens by transferring
                          them to external exchanges or wallets that support
                          these tokens. Popular exchanges include Bittrex,
                          Poloniex, and others.
                        </p>
                      </div>

                      <p
                        id="can-i-sell-goods-and-services-on-steemit"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Can I sell goods and services on Steemit?
                      </p>
                      <div className="small-container">
                        <p>
                          Yes, you can promote and sell goods and services on
                          Steemit by creating posts about them. However, you
                          should comply with Steemit&apos;s terms of service and
                          avoid spam or misleading content.
                        </p>
                      </div>

                      <p
                        id="what-is-a-mvest"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What is a MVEST?
                      </p>
                      <div className="small-container">
                        <p>
                          MVEST stands for &quot;Mega VESTS&quot; and represents
                          1,000,000 VESTS. VESTS (Voting Equivalent Steem) is
                          the internal representation of Steem Power used by the
                          blockchain for calculations.
                        </p>
                      </div>

                      <p
                        id="what-can-i-do-with-my-sbd-tokens"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What can I do with my SBD tokens?
                      </p>
                      <div className="small-container">
                        <p>
                          SBD (Steem Dollar) tokens can be traded on exchanges,
                          converted to STEEM, used for purchases, or held as a
                          stable value token. They are designed to maintain a
                          value close to $1 USD.
                        </p>
                      </div>

                      <p
                        id="what-can-i-do-with-my-steem-tokens"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What can I do with my STEEM tokens?
                      </p>
                      <div className="small-container">
                        <p>
                          STEEM tokens can be traded on exchanges, converted to
                          Steem Power (SP) for increased voting power and
                          rewards, converted to SBD, or used for various
                          blockchain operations.
                        </p>
                      </div>

                      <h3
                        id="Security"
                        className="text-lightblue mt-4 mt-md-5 mb-3"
                      >
                        Security
                      </h3>

                      <p
                        id="how-do-i-report-a-security-vulnerability"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How do I report a security vulnerability?
                      </p>
                      <div className="small-container">
                        <p>
                          Security vulnerabilities can be reported through the
                          official Steem channels. Contact the development team
                          through GitHub or the official Steem Discord/Slack
                          channels.
                        </p>
                      </div>

                      <p
                        id="how-does-the-stolen-account-recovery-process-work"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How does the stolen account recovery process work?
                      </p>
                      <div className="small-container">
                        <p>
                          If your account is compromised, you should immediately
                          change your passwords and keys. The Steem blockchain
                          has a recovery process that allows account recovery
                          using the owner key if the account was recently
                          compromised.
                        </p>
                      </div>

                      <p
                        id="what-should-i-do-if-i-discover-that-someone-hacked-my-account"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What should I do if I discover that someone hacked my
                        account?
                      </p>
                      <div className="small-container">
                        <p>
                          If you discover your account has been hacked,
                          immediately change your passwords and keys using your
                          owner key. Contact Steemit support and consider using
                          the account recovery process if available.
                        </p>
                      </div>

                      <p
                        id="are-my-steem-and-steem-dollar-tokens-insured-in-the-event-of-a-hack-or-if-someone-takes-over-my-account"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Are my STEEM and Steem Dollar tokens insured in the
                        event of a hack or if someone takes over my account?
                      </p>
                      <div className="small-container">
                        <p>
                          No, STEEM and SBD tokens are not insured. Users are
                          responsible for securing their own accounts and keys.
                          It&apos;s important to use strong passwords and keep
                          your keys secure.
                        </p>
                      </div>

                      <p
                        id="what-do-i-do-if-i-lost-my-password-keys"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What do I do if I lost my password/keys?
                      </p>
                      <div className="small-container">
                        <p>
                          If you lose your password or keys, there is no way to
                          recover your account. This is why it&apos;s crucial to
                          securely store your keys and consider using a password
                          manager.
                        </p>
                      </div>

                      <p
                        id="what-are-my-different-keys-for"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What are my different keys for?
                      </p>
                      <div className="small-container">
                        <p>
                          Steem accounts have four different keys: Owner
                          (highest authority), Active (transfers and power
                          operations), Posting (posting and voting), and Memo
                          (private messages). Each key has different levels of
                          authority.
                        </p>
                      </div>

                      <p
                        id="why-is-the-master-password-a-long-string-of-gibberish"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Why is the master password a long string of gibberish?
                      </p>
                      <div className="small-container">
                        <p>
                          The master password is a long, random string to ensure
                          maximum security. It&apos;s generated using
                          cryptographic methods to make it virtually impossible
                          to guess or brute force.
                        </p>
                      </div>

                      <p
                        id="why-should-i-be-careful-with-my-master-password"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Why should I be careful with my master password?
                      </p>
                      <div className="small-container">
                        <p>
                          Your master password (owner key) has the highest
                          authority and can change all other keys. If someone
                          gains access to it, they can take complete control of
                          your account.
                        </p>
                      </div>

                      <p
                        id="how-can-i-keep-my-steem-account-secure"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How can I keep my Steem account secure?
                      </p>
                      <div className="small-container">
                        <p>
                          Keep your keys secure, use strong passwords, enable
                          two-factor authentication where possible, be cautious
                          of phishing attempts, and never share your private
                          keys with anyone.
                        </p>
                      </div>

                      <h3
                        id="General"
                        className="text-lightblue mt-4 mt-md-5 mb-3"
                      >
                        General
                      </h3>

                      <p
                        id="where-can-i-ask-for-help-if-my-question-was-not-answered-here"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        Where can I ask for help if my question was not answered
                        here?
                      </p>
                      <div className="small-container">
                        <p>
                          You can ask for help on the Steemit platform, join the
                          official Steem Discord or Slack channels, or visit the{" "}
                          <a
                            href="https://steemit.com/steemhelp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            SteemHelp
                          </a>{" "}
                          community.
                        </p>
                      </div>

                      <p
                        id="what-is-the-steem-whitepaper-and-what-is-its-purpose"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What is the Steem Whitepaper and what is its purpose?
                      </p>
                      <div className="small-container">
                        <p>
                          The Steem Whitepaper is the official technical
                          document that describes the Steem blockchain&apos;s
                          design, consensus mechanism, token economics, and
                          technical specifications. It serves as the blueprint
                          for the platform.
                        </p>
                      </div>

                      <h3
                        id="Witnesses"
                        className="text-lightblue mt-4 mt-md-5 mb-3"
                      >
                        Witnesses
                      </h3>

                      <p
                        id="how-can-i-vote-for-witnesses"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        How can I vote for witnesses?
                      </p>
                      <div className="small-container">
                        <p>
                          You can vote for witnesses using your Steem account.
                          Witnesses are responsible for producing blocks and
                          maintaining the blockchain. Voting for witnesses helps
                          secure the network.
                        </p>
                      </div>

                      <p
                        id="what-are-steem-witnesses"
                        className="font-weight-700 mt-5 mb-3"
                      >
                        What are Steem witnesses?
                      </p>
                      <div className="small-container">
                        <p>
                          Steem witnesses are block producers responsible for
                          creating new blocks on the blockchain. They are
                          elected by the community and play a crucial role in
                          maintaining the network&apos;s security and
                          efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
      
      {/* back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="back to top"
          title="back to top"
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
