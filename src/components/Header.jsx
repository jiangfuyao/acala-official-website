import React, { useState, useCallback } from "react";
import clsx from "clsx";
import classes from "./Header.module.css";
import { Container } from "../ui-components/Container";
import logo from "../assets/logo-with-name.svg";
import logoWhite from "../assets/logo-with-name-white.svg";
import { Menu } from "../ui-components/Menu";
import { useModal } from "../hooks/useModal";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { Notification } from "../components/Notification";

const resourceMenu = [
    {
        name: "Whitepaper",
        link: "https://github.com/AcalaNetwork/Acala-white-paper",
    },
    {
        name: "Documentation",
        link: "https://github.com/AcalaNetwork/Acala/wiki",
    },
];
const productMenu = [
    {
        name: "What is Acala",
        anchor: "index.html#what-is-acala",
    },
    {
        name: "Acala Apps",
        anchor: "index.html#acala-apps",
    },
    {
        name: "Roadmap",
        anchor: "index.html#roadmap",
    },
];
const foundationMenu = [
    {
        name: "Council member",
        anchor: "index.html#council",
    },
    {
        name: "Contributors",
        anchor: "index.html#team",
    },
    {
        name: "Partners",
        anchor: "index.html#partners",
    },
    {
        name: "Ecosystem Projects",
        anchor: "index.html#ecosystem",
    },
    {
        name: "Contact",
        anchor: "/#contact",
    },
];
export const Header = ({ theme = "light" }) => {
    const { status, toggle } = useModal();
    const [open, setOpen] = useState(true);
    const close = useCallback(() => setOpen(false), [setOpen]);

    return (
        <header
            className={clsx(classes.header, {
                [classes.open]: open,
                [classes.headerDark]: theme === "dark",
            })}
        >
            {open ? <Notification onClose={close} /> : null}
            <Container className={classes.container}>
                <img
                    src={theme === "dark" ? logoWhite : logo}
                    className={classes.logo}
                    alt="logo"
                />
                <div className={classes.menu}>
                    <Menu
                        title={"Join Karura"}
                        to={"/kusama-plo"}
                        className={classes.menuItem}
                        theme={theme}
                    />
                    <Menu
                        title={"Resource"}
                        className={classes.menuItem}
                        menu={resourceMenu}
                        theme={theme}
                    />
                    <Menu
                        title={"Products"}
                        className={classes.menuItem}
                        menu={productMenu}
                        theme={theme}
                    />
                    <Menu
                        title={"Foundation"}
                        className={classes.menuItem}
                        menu={foundationMenu}
                        theme={theme}
                    />
                </div>
                <div className={classes.mobileMenu} onClick={toggle}>
                    <img src={status ? closeIcon : menuIcon} alt="menu" />
                </div>
                <div
                    className={clsx(classes.mobileMenuContainer, {
                        [classes.show]: status,
                    })}
                >
                    <div className={classes.mobileMenu} onClick={toggle}>
                        <img src={status ? closeIcon : menuIcon} alt="menu" />
                    </div>
                    <Menu
                        title={"Join Karura"}
                        to={"/kusama-plo"}
                        className={classes.menuItem}
                        onClick={toggle}
                        theme={theme}
                    />
                    <Menu
                        title={"Resource"}
                        className={classes.menuItem}
                        menu={resourceMenu}
                        onClick={toggle}
                        theme={theme}
                    />
                    <Menu
                        title={"Products"}
                        className={classes.menuItem}
                        menu={productMenu}
                        onClick={toggle}
                        theme={theme}
                    />
                    <Menu
                        title={"Foundation"}
                        className={classes.menuItem}
                        menu={foundationMenu}
                        onClick={toggle}
                        theme={theme}
                    />
                </div>
            </Container>
        </header>
    );
};
