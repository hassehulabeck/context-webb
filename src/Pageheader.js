import React from "react";
import Topmenu from "./Topmenu";
import "./Pageheader.css";

const Pageheader = () => {
    return (
        <header>
            <h1>Företaget AB</h1>
            <Topmenu />
        </header>
    );
};

export default Pageheader;
