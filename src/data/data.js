import joe from "../assets/animation/JOE/mercyforanimals.svg"
import liz from "../assets/animation/LIZ/dressup.svg"
import luis from "../assets/animation/LUIS/huckberry.svg"
import rodrigo from "../assets/animation/RODRIGO/happysocks.svg"
import troy from "../assets/animation/TROY/lensabl.svg"
import MySVG from "../assets/img"

export const celebrateData = [
    {
        id: 1,
        avatar: require("../assets/animation/JOE/joe.webp"),
        info: "Buffer saves us, literally, hours and in turn helps us spread our message even further.",
        logo: joe,
        about: "Joe Loria, Content Manager"
    },
    {
        id: 2,
        avatar: require("../assets/animation/LIZ/liZ.webp"),
        info: "On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.",
        logo: liz,
        about: "Liz Gillis, Digital Marketer"
    },
    {
        id: 3,
        avatar: require("../assets/animation/LUIS/LUIS.webp"),
        info: "Buffer has made sharing our story and building our brand on social media so much easier.",
        logo: luis,
        about: "Luis Cancel, Managing Editor"
    },
    {
        id: 4,
        avatar: require("../assets/animation/RODRIGO/RODRIGO.webp"),
        info: "Buffer makes it easy for us to monitor all of our engagement and strengthen the connection with our audience.",
        logo: rodrigo,
        about: "Rodrigo Hyago, Social Media Content Manager"
    },
    {
        id: 5,
        avatar: require("../assets/animation/TROY/TROY.webp"),
        info: "For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
        logo: troy,
        about: "Troy Petrunoff, Marketing Manager"
    }
]

export const brandData = [
    {
        id: 1,
        img: MySVG.huckberry
    },
    {
        id: 2,
        img: MySVG.food52
    },
    {
        id: 3,
        img: MySVG.thesill
    },
    {
        id: 4,
        img: MySVG.burrow
    },
    {
        id: 5,
        img: MySVG.happysocks
    },
    {
        id: 6,
        img: MySVG.dressup
    },
]

export const menuData = [
    {
        id: 1,
        img: MySVG.dd1,
        header: "Publishing",
        text: "Plan, collaborate, and publish thumb-stopping content"
    },
    {
        id: 2,
        img: MySVG.dd2,
        header: "Analytics",
        text: "Analyze social media performance and create reports"
    },
    {
        id: 3,
        img: MySVG.dd3,
        header: "Engagement",
        text: "Quickly navigate your comments and engage with your audience"
    },
    {
        id: 4,
        img: MySVG.dd4,
        header: "Start Page",
        text: "Build a customized landing page in minutes"
    }
]

export const pathData = [
    {
        id: 1,
        text1: "1. analyze",
        text2: "Measure your social media performance in a few clicks",
        text3: "See what’s working and deliver high engagement content.",
        img: MySVG.thumb
    },
    {
        id: 2,
        text1: "2. plan and publish your content",
        text2: "Collaborate and plan your campaigns",
        text3: "Schedule your posts in advance so you can focus on other things.",
        img: MySVG.collaborate
    },
    {
        id: 3,
        text1: "3. engage",
        text2: "Respond to comments twice as fast",
        text3: "Skip to important comments with the help of labels and hotkeys.",
        img: MySVG.hero
    }
]