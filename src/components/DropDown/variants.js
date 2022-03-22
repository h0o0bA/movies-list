const parent = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: [0, 1.1, 1],
    // transformOrigin: "top center",
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: [1, 0.5, 0],
    scaleY: [1, 1.1, 0],
    transition: { duration: 0.5 },
  },
};

export { parent };
