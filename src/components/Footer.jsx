import clsx from "clsx";
import React, { useEffect } from "react";
import discordIcon from "../assets/discord.svg";
// import facebookIcon from '../assets/facebook.svg'
import discourseIcon from "../assets/discourse.svg";
import githubIcon from "../assets/github.svg";
import linkinIcon from "../assets/linkedin.svg";
import mediumIcon from "../assets/medium.svg";
import telegramIcon from "../assets/telegram.svg";
import twitterIcon from "../assets/twitter.svg";
import wechatQRCode from "../assets/wechat-qrcode.jpg";
import wechatIcon from "../assets/wechat.svg";
import { Container } from "../ui-components/Container";
import classes from "./Footer.module.css";

const SocialItem = ({ link, icon, img }) => {
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={icon}
                    alt={link}
                    className={classes.socialMediaIcon}
                />
            </a>
        );
    }
    if (img) {
        return (
            <div>
                <img
                    src={icon}
                    alt={link}
                    className={classes.socialMediaIcon}
                />
                <img
                    src={img}
                    alt={""}
                    className={clsx(classes.socialMediaItemImg)}
                />
            </div>
        );
    }
    return null;
};

const SocialMedia = ({ list }) => {
    return (
        <ul className={classes.socialMedia}>
            {list.map((item, index) => (
                <li
                    className={classes.socialMediaItem}
                    key={`social-media-${index}`}
                >
                    <SocialItem {...item} />
                </li>
            ))}
        </ul>
    );
};

const Links = ({ links }) => {
    return (
        <ul className={classes.links}>
            {links.map(({ title, data }, index) => (
                <li
                    className={classes.linkItem}
                    key={`links-collection-${index}`}
                >
                    <p className={classes.linkItemTitel}>{title}</p>
                    <ul className={classes.linkItemData}>
                        {data.map(({ name, link, tag }, index) => (
                            <li
                                className={classes.linkDataItem}
                                key={`links-${index}`}
                            >
                                <a
                                    href={link}
                                    className={classes.linkDataItemLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {name}
                                    {tag ? (
                                        <span className={classes.tag}>
                                            {tag}
                                        </span>
                                    ) : null}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
};
export const Footer = ({ theme = "light" }) => {
    useEffect(() => {
        window.hbspt.forms.create({
            portalId: "7522932",
            formId: "0c2e54b4-7340-4e87-a74c-3cb4faae26a7",
            target: "#form",
            onFormSubmitted: ($ele) => {
                $ele.css("color", "#ffffff");
                $ele.find('a').css("color", "#e6007a");
            },
            onFormReady: ($form) => {
                $form.find(".sproket").hide();
                $form.find("label").hide();
                $form
                    .find("input")
                    .attr("placeholder", "Enter your email address");
                $form.find(".actions").css("margin", "16px 0");
                $form.find(".actions").css("padding", 0);
                $form.find(".hs_email").css("margin", 0);
                $form.find("input").css("box-sizing", "border-size");
                $form.find("input").css("border-radius", "0");
                $form.find(".hs-error-msg").hide();

                if (theme !== "dark") {
                    $form.find("input").css("border", "1px solid #cccccc");
                    $form.find(".hs_email input").css("background", "#ffffff");
                    $form.find("input[type=email]").css("height", 48);
                    $form
                        .find("input[type=submit]")
                        .css("background", "#3732FF");
                } else {
                    $form.find("input").css("border", "1px solid #e6007a");
                    $form
                        .find(".hs_email input")
                        .css("background", "#000000")
                        .css("border-color", "rgba(255, 255, 255, 0.23)")
                        .css("color", "#ffffff");
                    $form.find("input[type=email]").css("height", 48);
                    $form
                        .find("input[type=submit]")
                        .css("background", "transparent")
                        .css("color", "#e6007a")
                        .css("outline", "none");
                }
            },
        });
    });

    const socialMedia = [
        { link: "https://twitter.com/AcalaNetwork", icon: twitterIcon },
        { link: "https://medium.com/acalanetwork", icon: mediumIcon },
        // { link: '', icon: facebookIcon },
        { link: "https://github.com/AcalaNetwork", icon: githubIcon },
        {
            link: "https://www.linkedin.com/company/acalanetwork",
            icon: linkinIcon,
        },
        { link: "https://acala.discourse.group", icon: discourseIcon },
        { link: "https://discord.gg/6QHVY4X", icon: discordIcon },
        { link: "https://t.me/acalaofficial", icon: telegramIcon },
        { link: "", icon: wechatIcon, img: wechatQRCode },
    ];
    const links = [
        {
            title: "Resources",
            data: [
                {
                    name: "Whitepaper",
                    link: "https://github.com/AcalaNetwork/Acala-white-paper",
                },
                {
                    name: "Documentation",
                    link: "https://github.com/AcalaNetwork/Acala/wiki",
                },
                // { name: 'Brand Assets', link: '' },
                { name: "Career", link: "./jobs.html", tag: "HIRING" },
            ],
        },
        {
            title: "Products",
            data: [
                { name: "Honzon DApp", link: "https://apps.acala.network" },
                {
                    name: "Console",
                    link: "https://console.acala.network/#/chainstate",
                },
                { name: "Telemetry", link: "https://telemetry.polkadot.io/" },
            ],
        },
        {
            title: "Foundation",
            data: [
                { name: "About", link: "" },
                { name: "Contact", link: "mailto:hello@acala.network" },
            ],
        },
    ];
    return (
        <footer
            className={clsx(classes.root, {
                [classes.themeDark]: theme === "dark",
            })}
        >
            <Container className={classes.container}>
                <div className={classes.contactWay}>
                    <p className={classes.foundation}>Acala Foundation</p>
                    <Links links={links} />
                </div>
                <div>
                    <p className={classes.newsletter}>Newsletter</p>
                    <div id="form" className={classes.form} />
                    <SocialMedia list={socialMedia} />
                </div>
            </Container>
        </footer>
    );
};
