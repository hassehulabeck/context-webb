import React from "react";

const langs = {
    swedish: {
        home: "Hem",
        products: "Våra produkter",
        about: "Om oss",
        contact: "Contact",
    },
    english: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
    },
};

const langContext = React.createContext(langs.swedish);
export { langs, langContext };
