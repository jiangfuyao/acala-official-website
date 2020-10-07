import React from "react";
import classes from "./KusamaIPOContent.module.css";
import bg from "../assets/kusama.svg";
import redDot from "../assets/red-dot.svg";
import whatBG from "../assets/bitmap.svg";
import whatIcon1 from "../assets/what-light-icon-1.svg";
import whatIcon2 from "../assets/what-light-icon-2.svg";
import whatIcon3 from "../assets/what-light-icon-3.svg";
import whyIcon1 from "../assets/why-icon-1.svg";
import whyIcon2 from "../assets/why-icon-2.svg";
import whyIcon3 from "../assets/why-icon-3.svg";
import whyIcon4 from "../assets/why-icon-4.svg";
import whyIcon5 from "../assets/why-icon-5.svg";
import { useEffect } from "react";
import clsx from "clsx";

function KusamaIPOContent() {
    useEffect(() => {
        document.getElementsByTagName("body")[0].style.backgroundColor =
            "#000000";

        return () => {
            document.getElementsByTagName("body")[0].style.backgroundColor =
                "#ffffff";
        };
    });
    return (
        <div className="ipo_content">
            <section className={classes.cover}>
                <div className={classes.container}>
                    <img src={bg} className={classes.cover_bg} alt="ipo" />
                    <img
                        src={redDot}
                        className={classes.red_dot_up}
                        alt="dot"
                    />
                    <img
                        src={redDot}
                        className={classes.red_dot_down}
                        alt="dot"
                    />
                    <h1 className={classes.cover_title}>
                        Join the First-ever Blockchain IPO
                    </h1>
                    <div className={classes.cover_content}>
                        Acala's Karura network is the decentralized financial hub of{" "}
                        <a
                            href="http://kusama.network"
                            className={classes.exlink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kusama
                        </a>
                        . Be a part of Karura's fair and ethical token
                        distribution by participating in our initial parachain
                        offering (IPO).
                    </div>
                    <div className={classes.cover_action}>
                        <div className={classes.cover_button}>Get Started</div>
                        <div className={classes.cover_button}>Subscribe</div>
                    </div>
                </div>
            </section>
            <section className={classes.what}>
                <div className={classes.container}>
                    <img
                        src={whatBG}
                        className={classes.what_bg}
                        alt="parachain"
                    />
                    <div className={classes.what_title}>
                        What is an Initial Parachain Offering?
                    </div>
                    <div className={classes.what_content}>
                        <div className={classes.what_content_item}>
                            <div className={classes.what_content_icon}>
                                <img src={whatIcon1} alt="Security" />
                            </div>
                            <div>
                                <div className={classes.what_content_title}>
                                    Crowdfunding Network Security
                                </div>
                                <div className={classes.what_content_content}>
                                    KSM holders lock their tokens on Kusama for
                                    a period of time (6, 12 or 24 months TBD) to
                                    help Acala's Karura network lease a parachain slot and gain
                                    access to Kusama’s plug-and-play security
                                    provided by the validator set. In return for
                                    locking KSM, {" "} 
                                    <a
                                        href="https://github.com/AcalaNetwork/Acala/wiki/V.-ACA-&-KAR"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        KAR 
                                    </a>
                                    {' '} (Karura's native token) will be distributed to
                                    participants.
                                </div>
                            </div>
                        </div>
                        <div className={classes.what_content_item}>
                            <div className={classes.what_content_icon}>
                                <img src={whatIcon2} alt="Community Loan" />
                            </div>
                            <div>
                                <div className={classes.what_content_title}>
                                    Community Loan
                                </div>
                                <div className={classes.what_content_content}>
                                    Tokens will be returned to holders following
                                    parachain lease, with a guarantee of
                                    receiving your principal back. It can be
                                    seen as a loan from community members
                                    looking to contribute to the evolution of
                                    Kusama’s network, and will result in a net
                                    positive for KSM holders.
                                </div>
                            </div>
                        </div>
                        <div className={classes.what_content_item}>
                            <div className={classes.what_content_icon}>
                                <img
                                    src={whatIcon3}
                                    alt="Fair Network Bootstrapping"
                                />
                            </div>
                            <div>
                                <div className={classes.what_content_title}>
                                    Fair Network Bootstrapping
                                </div>
                                <div className={classes.what_content_content}>
                                    The KAR distributed to participants will be
                                    vested over a period of time, but the full
                                    balance can be used to participate in
                                    governance and other activities besides
                                    transferring. This helps us to build a
                                    strong and well-intentioned community from
                                    the ground up.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.why}>
                <div className={classes.container}>
                    <div className={classes.why_title}>
                        Why host an IPO and how does it work?
                    </div>
                    <div className={classes.why_content}>
                        <div className={classes.why_content_row}>
                            <div className={classes.why_item}>
                                <div className={classes.why_item_head}>
                                    <img
                                        className={classes.why_item_icon}
                                        src={whyIcon1}
                                        alt="acala"
                                    />
                                </div>
                                <div className={classes.why_item_title}>
                                    Kusama
                                </div>
                                <div className={classes.why_item_content}>
                                    Kusama is a sharded, multi-chain network
                                    that allows blockchains to connect for
                                    interoperability, scalability, and
                                    plug-and-play network security. Kusama is
                                    the canary network of Polkadot.
                                </div>
                            </div>
                            <div className={classes.why_item}>
                                <div className={classes.why_item_head}>
                                    <img
                                        className={classes.why_item_icon}
                                        src={whyIcon2}
                                        alt="acala"
                                    />
                                </div>
                                <div className={classes.why_item_title}>
                                    Acala & Karura
                                </div>
                                <div className={classes.why_item_content}>
                                    Acala will operate its DeFi parachain on
                                    Polkadot and Kusama to serve both
                                    communities. Karura is Acala’s parachain on
                                    Kusama.
                                </div>
                            </div>
                            <div className={classes.why_item}>
                                <div className={classes.why_item_head}>
                                    <img
                                        className={classes.why_item_icon}
                                        src={whyIcon3}
                                        alt="acala"
                                    />
                                </div>
                                <div className={classes.why_item_title}>
                                    Parachain Auction
                                </div>
                                <div className={classes.why_item_content}>
                                    To join Kusama’s network, all parachains
                                    must participate in and win an
                                    non-permissioned candle auction to secure a
                                    slot on the network. Parachains can choose to
                                    raise KSM in a variety of ways in order to
                                    participate in the auction.
                                </div>
                            </div>
                        </div>
                        <div className={classes.why_content_row}>
                            <div className={classes.why_item}>
                                <div className={classes.why_item_head}>
                                    <img
                                        className={classes.why_item_icon}
                                        src={whyIcon4}
                                        alt="acala"
                                    />
                                </div>
                                <div className={classes.why_item_title}>
                                    Karura IPO
                                </div>
                                <div className={classes.why_item_content}>
                                    Acala has chosen to host an IPO to crowdfund
                                    KSM, which will be used to participate in
                                    the Kusama parachain auction. In return,
                                    Acala will issue KAR, Karura's native token
                                    on Kusama, to participants depending on the
                                    outcome of the auction.
                                </div>
                            </div>
                            <div className={classes.why_item}>
                                <div className={classes.why_item_head}>
                                    <img
                                        className={classes.why_item_icon}
                                        src={whyIcon5}
                                        alt="acala"
                                    />
                                </div>
                                <div className={classes.why_item_title}>
                                    The Launch
                                </div>
                                <div className={classes.why_item_content}>
                                    After Acala hosts the crowdfund, we will
                                    participate in and aim to win the parachain
                                    auction. If so, Acala will launch Karura
                                    network on Kusama and become an the DeFi hub
                                    of Kusama as planned.
                                </div>
                            </div>
                            <div className={classes.why_item}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.how}>
                <div className={classes.container}>
                    <div className={classes.how_title}>
                        How do I participate?
                    </div>
                    <div className={classes.how_content}>
                        <div
                            className={clsx(
                                classes.how_item,
                                classes.how_item_1
                            )}
                        >
                            <div className={classes.how_item_wrapper}>
                                <div className={classes.how_item_title}>
                                    Step 1
                                </div>
                                <div className={classes.how_item_subtitle}>
                                    Learn
                                </div>
                                <div className={classes.how_item_content}>
                                    <a
                                        href="/"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn
                                    </a>{" "}
                                    how the IPO works
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                classes.how_item,
                                classes.how_item_2
                            )}
                        >
                            <div className={classes.how_item_wrapper}>
                                <div className={classes.how_item_title}>
                                    Step 2
                                </div>
                                <div className={classes.how_item_subtitle}>
                                    Follow us
                                </div>
                                <div className={classes.how_item_content}>
                                    Follow our{" "}
                                    <a
                                        href="https://acala.network/newsletter-sign-up.html"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Newsletter
                                    </a>
                                    ,{" "}
                                    <a
                                        href="https://twitter.com/karuranetwork"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Twitter
                                    </a>
                                    ,{" "}
                                    <a
                                        href="/"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="/"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Telegram
                                    </a>{" "}
                                    for updates on the IPO start date
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                classes.how_item,
                                classes.how_item_3
                            )}
                        >
                            <div className={classes.how_item_wrapper}>
                                <div className={classes.how_item_title}>
                                    Step 3
                                </div>
                                <div className={classes.how_item_subtitle}>
                                    Unbond your KSM
                                </div>
                                <div className={classes.how_item_content}>
                                    If your KSM are staked, you will need to unstake & 
                                    unbond your KSM at least 28 days before the
                                    IPO start date
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                classes.how_item,
                                classes.how_item_4
                            )}
                        >
                            <div className={classes.how_item_wrapper}>
                                <div className={classes.how_item_title}>
                                    Step 4
                                </div>
                                <div className={classes.how_item_subtitle}>
                                    Participate
                                </div>
                                <div className={classes.how_item_content}>
                                    When the IPO starts, join the action here or
                                    on Polkadot.js, Polkawallet and participating exchanges.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.faq}>
                <div className={classes.container}>
                    <div className={classes.faq_title}>FAQ</div>
                    <div className={classes.faq_content}>
                        {[
                            {
                                q: (
                                    <span>
                                        When is Karura (Acala on Kusama) IPO?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        <div>
                                            This is technically dependant on
                                            Kusama parachain auction
                                            readiness. Please follow our{" "}
                                            <a
                                                href="https://acala.network/newsletter-sign-up.html"
                                                className={classes.exlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Newsletter
                                            </a>
                                            ,{" "}
                                            <a
                                                href="https://twitter.com/karuranetwork"
                                                className={classes.exlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Twitter
                                            </a>
                                            ,{" "}
                                            <a
                                                href="https://discord.gg/vdbFVCH"
                                                className={classes.exlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Discord
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="https://t.me/karuranetwork"
                                                className={classes.exlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Telegram
                                            </a>{" "}
                                            for updates.
                                        </div>
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        How many ACA will I get for the KSM I
                                        contributed?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        <div>
                                            This depends on the lease/lock
                                            period of KSM and a few other
                                            factors. We will release a calculator soon
                                            to help you get a better idea.
                                        </div>
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        What does it mean to unbond my KSM, and
                                        how do I do it?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        When nominating on Kusama, you have a
                                        delayed exit period, called the
                                        unbonding period, which serves as a
                                        cooldown. You will not be able to
                                        transfer your tokens before this period
                                        has elapsed. Read more and find
                                        instructions on the{" "}
                                        <a
                                            href="https://guide.kusama.network/docs/en/maintain-guides-how-to-unbond"
                                            className={classes.exlink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Kusama wiki
                                        </a>
                                        .
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        Do I have to unbond my KSM if they are
                                        on an exchange?
                                    </span>
                                ),
                                a: <span>No.</span>,
                            },
                            {
                                q: (
                                    <span>
                                        Can I participate in the IPO from an
                                        exchange, or where do my tokens have to
                                        be?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        You can participate in the IPO from
                                        participating exchanges. If your KSM
                                        are on a different exchange, you can
                                        participate by transferring your KSM to
                                        Polkadot.js, Polkawallet, or
                                        participating exchanges.
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        How long will the KSM tokens be locked?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        <div>
                                            Your KSM will be locked for the
                                            full duration of Acala’s parachain
                                            lease, it’s a choice between 6, 12,
                                            18 and 24 months.
                                        </div>
                                        <div>
                                            b. Stay tuned and join the Karura
                                             Club to have your say.
                                        </div>
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        Will my KSM be returned after the
                                        parachain lease ends?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        Yes, your KSM will be automatically
                                        returned to you when the parachain lease
                                        ends.
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        What if Acala doesn’t win the parachain
                                        auction - what happens to my KSM?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        If Acala does not win the auction, your
                                        KSM will be automatically returned
                                        immediately.
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        What can Acala use the KSM contributed
                                        by the community?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        The KSM contributed through the
                                        crowdfund will be in a module on the
                                        Kusama Relay Chain and can only be used
                                        exclusively for the parachain bond and
                                        cannot be transferred.
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        Will I have the choice to participate in
                                        another IPO in the future after this
                                        first parachain lease ends?
                                    </span>
                                ),
                                a: <span>Yes.</span>,
                            },
                            {
                                q: (
                                    <span>
                                        What is the difference between the Acala
                                        IPO on Polkadot and the Acala IPO on
                                        Kusama?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        The IPO for Polkadot will contribute to
                                        the launch of Acala’s network on
                                        Polkadot. Similarly, Acala’s IPO on
                                        Kusama will help bootstrap the launch of
                                        Acala on Kusama. For participants, the
                                        key differences are that the parachain
                                        lease duration Kusama may be different and likely to be shorter than Polkadot. Also, participants
                                        in the Acala IPO on Polkadot will
                                        receive ACA, whereas participants in the
                                        Karura IPO on Kusama will receive KAR
                                        tokens.
                                    </span>
                                ),
                            },
                        ].map(({ q, a }, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className={classes.faq_item}>
                                        <div className={classes.faq_item_q}>
                                            <span
                                                className={
                                                    classes.faq_item_q_title
                                                }
                                            >
                                                Q.
                                            </span>
                                            {q}
                                        </div>
                                        <div className={classes.faq_item_a}>
                                            <span
                                                className={
                                                    classes.faq_item_a_title
                                                }
                                            >
                                                A.
                                            </span>

                                            {a}
                                        </div>
                                    </div>
                                    {index !== 10 ? (
                                        <div className={classes.faq_hr} />
                                    ) : null}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default KusamaIPOContent;
