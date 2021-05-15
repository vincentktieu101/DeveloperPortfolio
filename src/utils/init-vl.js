export default function initVl() {
  const intersectors = document.querySelectorAll(".project-item-vl");
  const appearOptions = {
    threshold: 0.6,
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else if (entry.target.classList.contains("appear")) {
        entry.target.classList.remove("appear");
      }
    });
  },
  appearOptions);
  intersectors.forEach((intersectors) => {
    appearOnScroll.observe(intersectors);
  });
}
