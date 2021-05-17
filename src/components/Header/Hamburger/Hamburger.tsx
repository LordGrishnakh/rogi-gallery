import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import classes from "./Hamburger.module.scss";

const Hamburger = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const preventScroll = (e: any) => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (showModal) {
      window.addEventListener("scroll", preventScroll)
    }
    return () => {
      window.removeEventListener("scroll", preventScroll)
    }
  }, [showModal])

  const openSidebar = () => {
    console.log("open");
    setShowBackdrop(true);
    setShowModal(true);
  };

  const closeSidebar = () => {
    console.log("close");
    setShowBackdrop(false);
    setShowModal(false);
  };

  const Backdrop: React.FC<{ closeSidebar: () => void }> = (props) => {
    return (
      <div
        className={classes.backdrop}
        onClick={() => props.closeSidebar()}
      ></div>
    );
  };

  const duration = 400;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateX(-30vw)",
    position: "absolute",
    top: 0,
    left: 0,
    "z-index": 5,
    width: "30vw",
  };

  const transitionStyles: any = {
    entering: { transform: "translateX(0)" },
    entered: { transform: "translateX(0)" },
    exiting: { transform: "translateX(-30vw)" },
    exited: { transform: "translateX(-30vw)" },
  };

  const Modal: React.FC<{ closeSidebar: () => void }> = (props) => {
    return (
      <Transition in={showModal} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div
              style={{
                backgroundColor: "#2D2D2F",
                height: "100vh",
                transition: `transform ${duration}ms ease-in-out`,
              }}
            >
              <div className={classes.modal}>
                <Link onClick={() => props.closeSidebar()} to="/">Галерея</Link>
                <Link onClick={() => props.closeSidebar()} to="/about">Обо мне</Link>
                <i className="fas fa-smile"> Игорь, igorbir93@gmail.com</i>
                <span onClick={() => props.closeSidebar()}>X</span>
              </div>
            </div>
          </div>
        )}
      </Transition>
    );
  };


  return (
    <>
      <div className={classes.container} onClick={() => openSidebar()}>
        <i className="fas fa-bars"></i>
      </div>
      {showBackdrop && <Backdrop closeSidebar={closeSidebar} />}
      <Modal closeSidebar={closeSidebar} />
    </>
  );
};

export default Hamburger;
