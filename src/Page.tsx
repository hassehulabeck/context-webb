import React, { useState } from "react";
import "./Page.css";
import { Text, Address } from "./pagedata";
import Pageheader from "./Pageheader";
import Content from "./Content";
import Pagefooter from "./Pagefooter";
/* För att fungera som en provider behöver du:
1. Importera filen som innehåller context.
2. Placera <context.Provider value= {} > Runt de komponenter som ska ha tillgång.
3. Varje komponent som behöver context får sedan använda en consumer (Se Topmenu.js)
*/
import { langContext, langs, selectedLang } from "./langContext";

const Page = () => {
    const [currentLang, setCurrentLang] = useState("swedish");

    const selectLang = () => {
        const lang = currentLang === "swedish" ? "english" : "swedish";
        setCurrentLang(lang);
    };

    return (
        <div className="main">
            <langContext.Provider value={{ langs, selectLang, currentLang }}>
                <Pageheader />
                <Content text={Text} />
                <Pagefooter address={Address} />
            </langContext.Provider>
        </div>
    );
};

export default Page;
