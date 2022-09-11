import './Navigation.css';

import { useRef, useState } from 'react';

export default function Navigation () {
  const nav = useRef(null);
  const button = useRef(null);
  const list = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    // Get the aria-expanded attribute and check if the value is "false"
    // If it's "false", isOpen is true
    // If it's "true", isOpen is false
    setIsOpen((prev) => !prev);
  };

  // Hide list on keydown Escape
  const handleNavKeyUp = (e) => {
    if (e.code === 'Escape') {
      button.current.setAttribute('aria-expanded', false);
    }
  };

  return (
    <nav ref={nav} onKeyUp={handleNavKeyUp}>
      <button type="button" aria-expanded={isOpen} aria-label="Menu" ref={button} onClick={handleClick} aria-controls="mainnav">
        <svg width="24" height="24" aria-hidden="true">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <ul ref={list}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about-us" aria-current="page">About us</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
