export default function initVl() {
  const intersectors = document.querySelectorAll(".project-item");
  const appearOptions = {
    threshold: 0.6,
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("focus");
      } else if (entry.target.classList.contains("focus")) {
        entry.target.classList.remove("focus");
      }
    });
  },
  appearOptions);
  intersectors.forEach((intersectors) => {
    appearOnScroll.observe(intersectors);
  });
}
