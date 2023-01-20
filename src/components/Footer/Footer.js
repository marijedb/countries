import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="footer">
            Find sourcecode on: <a 
            className="footer--link"
            href="https://github.com/marijedb/countries" 
            target="_blank" 
            rel="noreferrer">Github repository</a>
        </div>
    )
}

export default Footer