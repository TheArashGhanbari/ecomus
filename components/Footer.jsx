"use client";

import Image from "next/image";
// components/Footer.jsx
import React, { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import NewsletterForm from "./NewsLetterForm";
import CurrencySelector from "./CurrencySelector";
import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <footer className="bg-black text-gray-300 px-15 w-full">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-15 border-b border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Image
              src="https://ecomus-2-2.myshopify.com/cdn/shop/files/logo_white.svg?v=1744703286"
              alt="logo"
              width="136"
              height="21"
              className="mb-7 mt-1"
            />
            <div className="space-y-2 text-stone-400 text-sm">
              <p>Address: 1234 Fashion Street, Suite 567,</p>
              <p>New York, NY</p>
              <p>
                Email:{" "}
                <span className="font-medium text-stone-300">
                  info@fashionshop.com
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="font-medium text-stone-300">
                  (212) 555-1234
                </span>
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors "
            >
              Get direction <FiArrowRight />
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="p-2 border border-gray-500 rounded-full hover:border-white hover:text-white transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 border border-gray-500 rounded-full hover:border-white hover:text-white transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 border border-gray-500 rounded-full hover:border-white hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 border border-gray-500 rounded-full hover:border-white hover:text-white transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 border border-gray-500 rounded-full hover:border-white hover:text-white transition-colors"
              >
                <FaPinterestP className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Help - Collapsible on mobile */}
          <div className="md:block">
            <button
              className="md:hidden w-full flex justify-between items-center text-lg font-medium mb-2 py-2"
              onClick={() => setIsHelpOpen(!isHelpOpen)}
            >
              Help
              <span
                className={`transform transition-transform ${
                  isHelpOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <h3 className="hidden md:block text-lg font-medium mb-4">Help</h3>
            <div
              className={`${
                isHelpOpen ? "block" : "hidden"
              } md:block space-y-2 text-sm text-stone-400`}
            >
              <a href="#" className="block hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Returns + Exchanges
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Shipping
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                FAQs
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Compare
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                My Wishlist
              </a>
            </div>
          </div>

          {/* Column 3: About Us - Collapsible on mobile */}
          <div className="md:block">
            <button
              className="md:hidden w-full flex justify-between items-center text-lg font-medium mb-2 py-2"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              About us
              <span
                className={`transform transition-transform ${
                  isAboutOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <h3 className="hidden md:block text-lg font-medium mb-4">
              About us
            </h3>
            <div
              className={`${
                isAboutOpen ? "block" : "hidden"
              } md:block space-y-2 text-sm text-stone-400`}
            >
              <a href="#" className="block hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Visit Our Store
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Account
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter - Collapsible on mobile */}
          <div className="md:block">
            <button
              className="md:hidden w-full flex justify-between items-center font-medium mb-2 py-2"
              onClick={() => setIsSignupOpen(!isSignupOpen)}
            >
              Sign Up for Email
              <span
                className={`transform transition-transform ${
                  isSignupOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <h3 className="hidden md:block text-lg font-medium mb-4">
              Sign Up for Email
            </h3>
            <div
              className={`${
                isSignupOpen ? "block" : "hidden"
              } md:block space-y-4 text-stone-400`}
            >
              <p className="text-sm text-gray-400">
                Sign up to get first dibs on new arrivals, sales, exclusive
                content, events and more!
              </p>
              <NewsletterForm />
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CurrencySelector />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Ecomus. All rights reserved.
          </p>
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <svg
              className="w-10 h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-visa"
            >
              <title id="pi-visa">Visa</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                fill="#142688"
              ></path>
            </svg>
            <svg
              className="w-10 h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="24"
              role="img"
              aria-labelledby="pi-paypal"
            >
              <title id="pi-paypal">PayPal</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                fill="#003087"
                d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
              ></path>
              <path
                fill="#3086C8"
                d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
              ></path>
              <path
                fill="#012169"
                d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
              ></path>
            </svg>
            <svg
              className="w-10 h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-master"
            >
              <title id="pi-master">Mastercard</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
              <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
              <path
                fill="#FF5F00"
                d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
              ></path>
            </svg>
            <svg
              className="w-10 h-6"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-american_express"
              viewBox="0 0 38 24"
            >
              <title id="pi-american_express">American Express</title>
              <path
                fill="#000"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                opacity=".07"
              ></path>
              <path
                fill="#006FCF"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
              ></path>
              <path
                fill="#FFF"
                d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
              ></path>
              <path
                fill="#006FCF"
                d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
              ></path>
              <path
                fill="#006FCF"
                d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
              ></path>
              <path
                fill="#FFF"
                d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
              ></path>
              <path
                fill="#006FCF"
                d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
              ></path>
              <path
                fill="#006FCF"
                d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
              ></path>
            </svg>
            <svg
              className="w-10 h-6"
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-diners_club"
            >
              <title id="pi-diners_club">Diners Club</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                fill="#3086C8"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
