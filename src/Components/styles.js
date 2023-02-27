const styles = {
  hero: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Syne",
    fontSize: 64,
    color: "white",
  },

  navbar: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    fontFamily: "Inter",
    fontWeight: 200,
  },

  navLinks: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    listStyle: "none",
    width: "95%",
    li: {
      a: {
        color: "white",
        textDecoration: "none",
        fontSize: "1.2rem",
        textTransform: "uppercase",
        letterSpacing: "2px",
        padding: "1rem",
        transition: "all 0.2s ease-out",
      },
    },
  },

  l2: {
    color: "transparent",
    fontWeight: 800,
    fontSize: 128,
    lineHeight: "188px",
    paddingLeft: "10%",

    background: "linear-gradient(94.76deg, #9E86FF 30.15%, #9FFF7E 80.01%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },

  l4: {
    fontWeight: 800,
    fontSize: 96,
    paddingLeft: "10%",
    WebkitTextStroke: "2px white",
    WebkitTextFillColor: "transparent",
  },

  l5: {
    fontSize: 64,
    paddingLeft: "20%",
    paddingTop: "4%",
    fontWeight: 600,
  },

  neon_blue: {
    position: "absolute",
    width: "847px",
    height: "615px",
    left: "-225px",
    top: "200px",

    background: "rgba(57, 47, 95, 0.90)",
    filter: "blur(300px)",
    // zIndex: -1,
  },

  neon_green: {
    position: "absolute",
    width: "629px",
    height: "511px",
    left: "287px",
    top: "400px",
    background: "rgba(55, 66, 37, 0.81)",
    filter: "blur(300px)",
    zIndex: -1,
  },

  counter: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "100",
    fontSize: "96px",
    /* identical to box height */

    textAlign: "center",

    color: "#8A8A8A",
    title: {
      textAlign: "center",
      fontSize: "32px",
      paddingRight: "15%",
    },
  },

  count_section: {
    marginTop: "200px",
    padding: "50px 96px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    background: "#120D13",
  },
};

export default styles;
