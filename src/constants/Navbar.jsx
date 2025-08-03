"use client"

const clickToScroll = (id) => {
  const currentPath = window.location.pathname;

  if (currentPath === "/") {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.open("/", "_self", "noopener,noreferrer");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const clickToNavigate = (page) => {
  window.open(page, "_self", "noopener,noreferrer");
};

export const navbarURL = [
  {
    title: "Home",
    onClick: () => clickToScroll("homeSection")
  },
  {
    title: "About",
    onClick: () => clickToScroll("aboutSection")
  },
  {
    title: "My work",
    onClick: () => clickToNavigate("/my-work")
  },
  {
    title: "Connect",
    onClick: () => clickToScroll("connectSection")
  }
]