"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = targetId ? document.querySelector(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Fechar o menu móvel após clicar
    }
  };

  const handleLogoAndHomeClick = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !hasBackground) {
        setHasBackground(true);
      } else if (scrollTop === 0 && hasBackground) {
        setHasBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBackground]);

  return (
    <header
      className={`${styles.header} ${
        hasBackground ? styles.blackBackground : ""
      } ${isOpen ? styles.open : ""}`}
    >
      <Link href="/" onClick={handleLogoAndHomeClick} passHref>
        <div className="relative w-[150px] h-[40px]">
          <Image
            src="/logo.png"
            alt="Fx Ai Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Link>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <nav
        className={`${styles.nav} ${isOpen ? styles.open : ""} ${
          styles.navOpen
        }`}
      >
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link
              href="/"
              passHref
              className={styles.link}
              onClick={handleLogoAndHomeClick}
            >
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="#beneficios"
              passHref
              className={styles.link}
              onClick={handleLinkClick}
            >
              Benefícios
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="#servicos"
              passHref
              className={styles.link}
              onClick={handleLinkClick}
            >
              Serviços
            </Link>
          </li>
          <li className={styles.li}>
            <Link 
              href="#metodologia" 
              passHref 
              className={styles.link} 
              onClick={handleLinkClick}
            >
              Metodologia
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="#embaixadores"
              passHref
              className={styles.link}
              onClick={handleLinkClick}
            >
              Parceiros
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="#faq"
              passHref
              className={styles.link}
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              href="#"
              passHref
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                const phoneNumber = '5583989027272';
                const message = `Olá! Gostaria de falar com um especialista sobre soluções de IA para meu negócio.`;
                const encodedMessage = encodeURIComponent(message);
                
                // @ts-ignore
                if (window?.fbq) {
                  // @ts-ignore
                  window.fbq('track', 'ContatoHeader');
                }
                
                window.open(`https://wa.me/${phoneNumber}/?text=${encodedMessage}`, '_blank');
                setIsOpen(false); // Fechar o menu móvel após clicar
              }}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;