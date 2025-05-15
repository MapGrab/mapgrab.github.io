(() => {
  const init = () => {
    const src = "https://buttons.github.io/buttons.js";
    const s = document.createElement("script");
    s.setAttribute("src", src);
    document.body.appendChild(s);
  };

  [500, 1000, 2000].forEach((time) => {
    setTimeout(() => {
      init();
    }, time);
  });

  init();
})();
