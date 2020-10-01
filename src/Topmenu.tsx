import React, { useContext } from "react";
import "./Topmenu.css";

/* För att konsumera behöver du:
1. Importera filen som innehåller context.
2. I det här fallet, använda useContext
*/
import { langContext } from "./langContext";

const Topmenu = () => {
    const { langs, currentLang } = useContext(langContext);

    return (
        <nav>
            <ul>
                <li>
                    <a href="#">{langs[currentLang].home}</a>
                </li>
                <li>
                    <a href="#">{langs[currentLang].products}</a>
                </li>
                <li>
                    <a href="#">{langs[currentLang].about}</a>
                </li>
                <li>
                    <a href="#">{langs[currentLang].contact}</a>
                </li>
            </ul>
            <input type="text" name="searchbox" placeholder="&#128269;" />
        </nav>
    );
};

export default Topmenu;
