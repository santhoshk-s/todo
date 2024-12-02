import React from 'react'
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        Added functionality for creating, updating, deleting, and marking tasks
        as complete in the to-do app.
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <a
          href="https://github.com/santhoshk-s"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaGithub />
          </span>
        </a>
        <span className="footerIcon">
          <FaLinkedin />
        </span>
        <span className="footerIcon">
          <FaYoutube />
        </span>
        <span className="footerIcon">
          <FaFacebookF />
        </span>
        <span className="footerIcon">
          <FiInstagram />
        </span>
        <span className="footerIcon">
          <FaTwitter />
        </span>
        <span className="footerIcon">
          <FiSend />
        </span>
        <span className="footerIcon">
          <FiMail />
        </span>
      </div>
    </div>
  );
}

export default Footer