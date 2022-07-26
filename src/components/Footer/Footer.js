import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footer-container">
          <h1>
            Yarin Bar&nbsp;&nbsp;
            <RiCopyrightLine style={{ margin: -2 }} />
            &nbsp;&nbsp;2022
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
