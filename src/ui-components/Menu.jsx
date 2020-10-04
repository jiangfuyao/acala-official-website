import React from "react";
import clsx from "clsx";
import classes from "./Menu.module.css";
import arrowDown from "../assets/arrow-down.svg";
import { NavLink } from "react-router-dom";

export const Menu = ({
    title,
    menu,
    className,
    onClick,
    to,
    theme = "light",
}) => {
    return (
        <div
            className={clsx(classes.root, className, {
                [classes.themeDark]: theme === "dark",
            })}
        >
            <p className={classes.title}>
                {to ? (
                    <NavLink
                        onClick={onClick}
                        exact
                        activeClassName={classes.menuLinkActive}
                        to={to}
                        className={classes.menuLink}
                    >
                        {title}
                    </NavLink>
                ) : (
                    title
                )}
                {menu && (
                    <img
                        src={arrowDown}
                        className={classes.arrowIcon}
                        alt="arrow-down"
                    />
                )}
            </p>
            {!to && (
                <ul className={clsx(classes.menu)}>
                    {menu &&
                        menu.map(({ name, link, anchor }, index) => (
                            <li
                                className={classes.menuItem}
                                key={`${title}-item-${index}`}
                                onClick={onClick}
                            >
                                {anchor && <a href={anchor}>{name}</a>}
                                {link && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {name}
                                    </a>
                                )}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};
