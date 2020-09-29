import React from "react";
import Topmenu from "./Topmenu";

const Pageheader = () => {
    return (
        <header>
            <Topmenu />
            <input type="text" name="searchbox" />
        </header>
    );
};

export default Pageheader;
