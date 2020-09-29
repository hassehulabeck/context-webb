import React from "react";
import "./App.css";
import { Text, Address } from "./pagedata";
import Pageheader from "./Pageheader";

const Page = () => {
    return (
        <div>
            <Pageheader />
            <Content text={Text} />
            <Pagefooter address={Address} />
        </div>
    );
};

export default Page;
