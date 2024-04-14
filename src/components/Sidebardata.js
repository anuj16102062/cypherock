
// Filename - components/SidebarData.js
 
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Wallets",
        path: "/wallets",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Import-Wallet",
                path: "/import-wallet",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "All Wallets",
                path: "/all-wallets",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Transactions",
        path: "/services",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Latest Transation",
                path: "/services/services1",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "All Transactions",
                path: "/services/services2",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];
