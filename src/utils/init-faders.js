export default function initFaders() {
  const intersectors = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.6,
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  intersectors.forEach((intersectors) => {
    appearOnScroll.observe(intersectors);
  });
}
