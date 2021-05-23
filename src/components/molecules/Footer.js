import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";

const Logo = ({ src, alt }) => {
  return (
    <li className="mx-3 bg-white rounded-full p-2">
      <img src={src} alt={alt} className="w-7" />
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bg-gray-800 py-5">
      <div className="grid place-items-center gap-3 md:flex md:justify-between px-2 sm:px-6 lg:px-8 items-center">
        <div>
          <img
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            alt="Footer"
            className="w-40"
          />
        </div>
        <div>
          <ul className="flex">
            <Logo src={Facebook} alt="Facebook" />
            <Logo src={Twitter} alt="Twitter" />
            <Logo src={Youtube} alt="Youtube" />
            <Logo src={Instagram} alt="Instagram" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
