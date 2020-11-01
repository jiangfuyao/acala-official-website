import clsx from "clsx";
import React, { useEffect } from "react";
import bg from "../assets/karura-logo.svg";
import whatBG from "../assets/karura-what-bg.svg";
import redDot from "../assets/red-dot.svg";
import whatIcon1 from "../assets/what-light-icon-1.svg";
import whatIcon2 from "../assets/what-light-icon-2.svg";
import whatIcon3 from "../assets/what-light-icon-3.svg";
import whyIcon2 from "../assets/why-icon-2.svg";
import whyIcon3 from "../assets/why-icon-3.svg";
import whyIcon4 from "../assets/why-icon-4.svg";
import whyIcon5 from "../assets/why-icon-5.svg";
import classes from "./KusamaPLOContent.module.css";

function KusamaPLOContent() {
    useEffect(() => {
        document.getElementsByTagName("body")[0].style.backgroundColor =
            "#000000";

        return () => {
            document.getElementsByTagName("body")[0].style.backgroundColor =
                "#ffffff";
        };
    });
    return (
        <div className="plo_content">
            <section className={classes.cover}>
                <div className={classes.container}>
                    <img src={bg} className={classes.cover_bg} alt="plo" />
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
                        Join the Karura Parachain Lease Offering
                    </h1>
                    <div className={classes.cover_content}>
                        Karura is the decentralized financial hub and stablecoin
                        of{" "}
                        <a
                            href="http://kusama.network"
                            className={classes.exlink}
                            target="_blank"
                            title="Kusama"
                            rel="noopener noreferrer"
                        >
                            Kusama
                        </a>
                        . Be a part of Karura’s fair and ethical token
                        distribution by participating in our Parachain Lease
                        Offering (PLO). New to Karura?{" "}
                        <a
                            href="https://medium.com/acalanetwork/introducing-karura-acalas-defi-parachain-on-kusama-af2f2695b07a"
                            className={classes.exlink}
                            target="_blank"
                            title="Learn more"
                            rel="noopener noreferrer"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className={classes.cover_action}>
                        <div className={classes.cover_button}>
                            <a
                                href="https://discord.gg/HpsZx5r"
                                className={classes.exlink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join the Community
                            </a>
                        </div>
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
                                <img
                                    src={whatIcon1}
                                    alt="Crowdsourced Network Security"
                                />
                            </div>
                            <div>
                                <div className={classes.what_content_title}>
                                    Crowdsourced Network Security
                                </div>
                                <div className={classes.what_content_content}>
                                    KSM holders lock their tokens on Kusama for
                                    a period of time (6, 12 or 24 months TBD) to
                                    help Karura lease a parachain slot and gain
                                    access to Kusama’s plug-and-play security
                                    provided by the validator set. In return for
                                    KSM holders’ support, KAR (Karura’s native
                                    token) will be distributed to participants.
                                </div>
                            </div>
                        </div>
                        <div className={classes.what_content_item}>
                            <div className={classes.what_content_icon}>
                                <img
                                    src={whatIcon2}
                                    alt="Community-backed Launch"
                                />
                            </div>
                            <div>
                                <div className={classes.what_content_title}>
                                    Community-backed Launch
                                </div>
                                <div className={classes.what_content_content}>
                                    Tokens will be returned to holders following
                                    parachain lease, with a guarantee of
                                    receiving the KSM principal back. It can be
                                    seen as a community-backed launch for
                                    individuals looking to contribute to the
                                    evolution of Kusama’s network and
                                    parachains.
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
                        Why host a Parachain Lease Offering and how does it
                        work?
                    </div>
                    <div className={classes.why_content}>
                        <div className={classes.why_content_row}>
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
                                    Kusama is a sharded, multi-chain network
                                    that allows blockchains to connect for
                                    interoperability, scalability, and
                                    plug-and-play network security. Kusama is
                                    the cousin network of Polkadot. To join
                                    Kusama’s network, all parachains must
                                    participate in and win an non-permissioned
                                    candle auction to secure a slot on the
                                    network.Parachains can choose to raise KSM
                                    in a variety of ways in order to participate
                                    in the auction.
                                </div>
                            </div>
                            <div className={classes.why_item}>
                                <div className={classes.why_item_head}>
                                    <img
                                        className={classes.why_item_icon}
                                        src={whyIcon4}
                                        alt="acala"
                                    />
                                </div>
                                <div className={classes.why_item_title}>
                                    Karura’s PLO
                                </div>
                                <div className={classes.why_item_content}>
                                    Karura has chosen to host an Parachain Lease
                                    Offering (PLO) to trustlessly crowdsource
                                    KSM, which will be used to participate in
                                    the Kusama parachain auction. These KSM
                                    would be bonded, or ‘locked’, in the Kusama
                                    Relay Chain for the duration of Karura’s
                                    parachain lease.
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
                                    Karura (KAR) Paradrop
                                </div>
                                <div className={classes.why_item_content}>
                                    In the event Karura succeeds in its auction
                                    bid and secures a Kusama parachain lease,
                                    and network genesis of Karura occurs on
                                    Kusama, Karura will gift by way of
                                    “Paradrop” KAR to Karura Supporters’ Kusama
                                    accounts through which they had bonded KSM
                                    in support of Karura’s parachain lease
                                    auction bid. The amount of KAR
                                </div>
                            </div>
                        </div>
                        <div className={classes.why_content_row}>
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
                                    Acala will operate its DeFi parachains on
                                    Polkadot and Kusama to serve both
                                    communities. Acala and Karura will operate
                                    in parallel, and will eventually be
                                    interoperable once Polkadot and Kusama are
                                    bridged.
                                </div>
                            </div>
                            <div className={classes.why_item}></div>
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
                                        href="https://medium.com/acalanetwork/karuras-approach-to-the-upcoming-parachain-lease-offering-plo-on-kusama-12fbf09ee463"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Learn"
                                    >
                                        Learn
                                    </a>{" "}
                                    how the PLO works.
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
                                    Join our{" "}
                                    <a
                                        href="https://discord.gg/HpsZx5r"
                                        className={classes.exlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Discord
                                    </a>
                                    ,{" "}
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
                                    , and{" "}
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
                                    If your KSM are bonded, you will need to
                                    unbond your KSM at least 7 days before the
                                    PLO start date.
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
                                    When the PLO starts, join the action on this
                                    website, Polkadot.js, Polkawallet, and other
                                    supported exchanges TBD
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
                                        When is the Karura (Acala on Kusama)
                                        PLO?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        <div>
                                            This is technically dependant on
                                            Polkadot/Kusama parachain auction
                                            readiness. Join our{" "}
                                            <a
                                                href="https://discord.gg/HpsZx5r"
                                                className={classes.exlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Discord
                                            </a>
                                            ,{" "}
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
                                            , and{" "}
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
                                        How many KAR will I get for my KSM
                                        support?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        <div>
                                            This depends on the lease/lock
                                            period of KSM and a few other
                                            factors. We will release a
                                            calculator soon to help you get a
                                            better idea. In a completely
                                            hypothetical example, a Karura
                                            supporter bonding X amount of KSM
                                            for Karura’s successful bid for a
                                            6-months parachain lease would be
                                            recognized by a Paradrop of 5 KAR
                                            for her support; the same amount of
                                            KSM bonded in support of a
                                            successful bid for a 12-month
                                            parachain lease would be recognised
                                            with a Paradrop of 10 KAR given the
                                            extended duration of support.
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
                                        Can I participate in the PLO from an
                                        exchange, or where do my tokens have to
                                        be?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        You can participate in the PLO from
                                        [participating exchange]. If your KSM
                                        are on a different exchange, you can
                                        participate by transferring your KSM to
                                        Polkadot.js, Polkawallet, or
                                        [participating exchange].
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
                                            Your KSM will be locked for the full
                                            duration of Karura’s parachain
                                            lease. This is a yet-to-be
                                            determined choice between 6, 12, 18
                                            and 24 months.
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
                                        What if Karura doesn’t win the parachain
                                        auction - what happens to my KSM?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        If Karura does not win the auction, your
                                        KSM will be automatically returned
                                        immediately.
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        How can Karura use the KSM support from
                                        the community?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        The KSM support will be in a module on
                                        the Kusama Relay Chain and can only be
                                        used exclusively for the parachain bond
                                        and cannot be transferred.
                                    </span>
                                ),
                            },
                            {
                                q: (
                                    <span>
                                        Will I have the choice to participate in
                                        another parachain offering in the future
                                        after this first parachain lease ends?
                                    </span>
                                ),
                                a: <span>Yes.</span>,
                            },
                            {
                                q: (
                                    <span>
                                        What is the difference between the Acala
                                        PLO on Polkadot and the Karura PLO on
                                        Kusama?
                                    </span>
                                ),
                                a: (
                                    <span>
                                        Karura’s PLO is on Kusama will help
                                        bootstrap the launch of Acala’s sister
                                        network on Kusama. For participants, the
                                        key differences are that the parachain
                                        lease duration for Karura may be
                                        different and likely to be shorter than
                                        Acala. Also, participants in the Acala
                                        PLO on Polkadot will receive ACA,
                                        whereas participants in the Karura PLO
                                        on Kusama will receive KAR tokens.
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

export default KusamaPLOContent;
