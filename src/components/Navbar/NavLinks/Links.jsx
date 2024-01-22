"use client";
import NavLink from "./NavLink";
import React, { useState } from "react";
import styles from "./links.module.css";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const session = true;
  const isAdmin = true;
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink key={link.title} link={link} />
        ))}
        {session ? (
          isAdmin ? (
            <>
              <NavLink link={{ title: "Dashboard", path: "/dashboard" }} />
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <button className={styles.logout}>Logout</button>
          )
        ) : (
          <>
            <NavLink link={{ title: "Sign in", path: "/signin" }} />
            <NavLink link={{ title: "Get Started", path: "/signup" }} />
          </>
        )}
      </div>
      <Image
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        height={30}
        width={30}
        src="/menu1.png"
        alt="menu"
      />
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLinks}>
            {links.map((link, index) => (
              <NavLink key={link.title} link={link} />
            ))}
            {session ? (
              isAdmin ? (
                <>
                  <NavLink link={{ title: "Dashboard", path: "/dashboard" }} />
                  <button className={styles.logout}>Logout</button>
                </>
              ) : (
                <button className={styles.logout}>Logout</button>
              )
            ) : (
              <>
                <NavLink link={{ title: "Sign in", path: "/signin" }} />
                <NavLink link={{ title: "Get Started", path: "/signup" }} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
