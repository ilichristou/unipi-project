import React from "react";
import {IconName} from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {BsBarChartLineFill, BsNewspaper, CgGames, CgHello, ImMagicWand} from "react-icons/all";
import {FaTrophy} from "react-icons/fa";
import {RiQuestionnaireFill} from "react-icons/ri";
import {Divider} from "@material-ui/core";

export const SidebarData = [
    // {
    //     title: "Welcome back!",
    //     icon: <CgHello/>,
    // },
    // <divider/>,
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    {
        title: "My consumption",
        path: "/consumption",
        icon: <BsBarChartLineFill/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    {
        title: "Newsstand",
        path: "/newsstand",
        icon: <BsNewspaper/>,
    },
    {
        title: "My games",
        path: "/games",
        icon: <CgGames/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav: [
            {
                title: "Quiz",
                path: "/games/quiz",
                icon: <ImMagicWand/>,
            },
            {
                title: "Leaderboard",
                path: "/games/leaderboard",
                icon: <FaTrophy/>,
            },
        ],
    },
    {
        title: "FAQ",
        path: "/faq",
        icon: <RiQuestionnaireFill/>,
    },
];
