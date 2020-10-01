import React from "react";

const langs = {
    swedish: {
        home: "Hem",
        products: "Våra produkter",
        about: "Om oss",
        contact: "Kontakt",
    },
    english: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
    },
};

const selectedLang = "";
const selectLang = {};

const langContext = React.createContext(langs.swedish);
export { langs, selectedLang, selectLang, langContext };
