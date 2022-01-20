import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                HomePage
            </Link>
            <div className="right menu">
                <Link to="/main/artwork" className="item">
                    Artwork
                </Link>
            </div>
        </div>
    );
};

export default Header;