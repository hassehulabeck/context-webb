import React, { useState } from "react";
import "./App.css";
import { Text, Address } from "./pagedata";
import Pageheader from "./Pageheader";
import Content from "./Content";
import Pagefooter from "./Pagefooter";
import { langContext, langs, selectedLang } from "./langContext";

const Page = () => {
    const [currentLang, setCurrentLang] = useState("swedish");

    const selectLang = () => {
        const lang = currentLang === "swedish" ? "english" : "swedish";
        setCurrentLang(lang);
    };

    return (
        <langContext.Provider value={{ langs, selectLang, currentLang }}>
            <Pageheader />
            <Content text={Text} />
            <Pagefooter address={Address} />
        </langContext.Provider>
    );
};

export default Page;
