import React from 'react'

import Header from "./header/Header";
import HelpClient from "./helpClient/HelpClient";
import BelovedClient from "./belovedClient/BelovedClient";

const HomePage = () =>{
    return (
        <>
            <Header/>
            <HelpClient/>
            <BelovedClient/>
        </>
    )
}

export default HomePage