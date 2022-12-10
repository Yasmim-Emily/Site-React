import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon />

      </div>
      <p> &copy; Yasmim </p>
    </div>
  );
}

export default Footer;
