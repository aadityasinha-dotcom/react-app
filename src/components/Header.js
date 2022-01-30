import React from "react";
import './App.css';
import Navbar from '../Navbar/index';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    } 

    return (
        <>
            <Navbar toggle={toggle} />
        </>
    );
};


export default Header;