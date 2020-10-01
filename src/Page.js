import React, { useState } from "react";
import "./App.css";
import { Text, Address } from "./pagedata";
import Pageheader from "./Pageheader";
import { langContext, langs } from "./langContext";

const Page = () => {
    const [currentLang, setCurrentLang] = useState();

    const selectLang = (selectedLang) => {
        const lang = langs.find((language) => language.name === selectedLang);
        setCurrentLang(lang);
    };

    return (
        <langContext.Provider value={(langs, selectLang, currentLang)}>
            <Pageheader />
            <Content text={Text} />
            <Pagefooter address={Address} />
        </langContext.Provider>
    );
};

export default Page;
