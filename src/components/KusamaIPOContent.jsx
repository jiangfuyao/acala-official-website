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
                        Acala is the financial hub of <a href="">Kusama</a> that
                        makes it fast and easy to use or build financial
                        applications, improving trading efficiency and saving
                        valuable time. Be a part of Acala’s fair and ethical
                        token distribution by participating in our initial
                        parachain offering (IPO).
                    </div>
                    <div className={classes.cover_action}>
                        <div className={classes.cover_button}>Get Start</div>
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
                                    help Acala lease a parachain slot and gain
                                    access to Kusama’s plug-and-play security
                                    provided by the validator set. In return for
                                    locking KSM, KAR will be distributed to
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
                                    receiving your principal back. This is not a
                                    capital raise event, and it will result in a
                                    net positive for KSM holders. It can be seen
                                    as a loan from community members looking to
                                    contribute to the evolution of Kusama’s
                                    network.
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
                        <div className={classes.why_item}>
                            <div className={classes.why_item_title}>
                                <img
                                    className={classes.why_item_icon}
                                    src={whyIcon1}
                                    alt="acala"
                                />
                            </div>
                            <div className={classes.why_item_content}>
                                Acala is a blockchain (called a parachain)
                                optimized for DeFi on Polkadot and Kusama.
                                Kusama is a sharded, multi-chain network that
                                allows blockchains to connect for
                                interoperability, scalability, and plug-and-play
                                network security. Kusama was built using
                                Substrate and nearly the same codebase as
                                Polkadot. Acala will operate our DeFi parachain
                                on both Kusama and Polkadot in order to serve
                                both communities. To join Kusama’s network, all
                                parachains must participate in and win an
                                non-permissioned candle auction to secure a slot
                                on the network.
                            </div>
                        </div>
                        <div className={classes.why_item}>
                            <div className={classes.why_item_title}>
                                <img
                                    className={classes.why_item_icon}
                                    src={whyIcon2}
                                    alt="acala"
                                />
                            </div>
                            <div className={classes.why_item_content}>
                                Parachains can choose to raise KSM in a variety
                                of ways in order to participate in the auction.
                                Acala has chosen to host an IPO to crowdfund
                                KSM, which will be used to participate in the
                                Kusama parachain auction. In return for the KSM
                                contributed by the community, Acala will issue
                                KAR, Acala’s native token on Kusama, to
                                participants depending on the outcome of the
                                auction.
                            </div>
                        </div>
                        <div className={classes.why_item}>
                            <div className={classes.why_item_title}>
                                <img
                                    className={classes.why_item_icon}
                                    src={whyIcon3}
                                    alt="acala"
                                />
                            </div>
                            <div className={classes.why_item_content}>
                                After Acala hosts the crowdfund, we will
                                participate in and aim to win the auction to
                                secure a parachain slot. If the slot is won,
                                Acala will launch our mainnet on Polkadot
                                following the auction and become an the DeFi hub
                                of Polkadot as planned.
                            </div>
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
                                    Learn how the IPO works
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
                                    Follow our Newsletter, Twitter, and Telegram
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
                                    Unbond your DOT
                                </div>
                                <div className={classes.how_item_content}>
                                    If your DOT are bonded, you will need to
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
                                    When the IPO starts, join the action on
                                    Polkadot.js, Polkawallet, [exchange], or
                                    [exchange]
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
                                        instructions on the Kusama wiki.
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
                                        Your KSM will be locked for the full
                                        duration of Acala’s parachain lease,
                                        which is ## months.
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
                                        What is Acala doesn’t win the parachain
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
                                        Polkadot Relay Chain and can only be
                                        used exclusively for the parachain bond
                                        and cannot be transferred.
                                    </span>
                                ),
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
                                        lease duration on Polkadot is ## months,
                                        and the parachain lease duration on
                                        Kusama is %% months. Also, participants
                                        in the Acala IPO on Polkadot will
                                        receive ACA, whereas participants in the
                                        Acala IPO on Kusama will receive KAR
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
                                    {index !== 7 ? (
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
