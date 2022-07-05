import React, { useEffect, useState } from "react";
import MeetupsContent from "../MeetupsContent/MeetupsContent";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { FaVolleyballBall } from "react-icons/fa";

const Header = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    console.log(size);

    if (size.width >= 768) {
      return;
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/create-event");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          SkyBall{" "}
          <FaVolleyballBall className={classes.header__content__logo__svg} />
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul onClick={menuToggleHandler}>
            <li className={classes.homepage__link}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mySchedule">My Schedule</Link>
            </li>
            <li>
              <Link to="/Clinics">Clinics</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Create Event</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
