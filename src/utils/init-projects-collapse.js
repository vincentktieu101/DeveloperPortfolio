export default function initProjectsCollapse() {
  const intersectors = document.getElementById("projects");
  const projectsFab = document.getElementById("projects-fab");
  const appearOptions = {
    threshold: 0.1,
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        projectsFab.classList.add("hidden");
      } else {
        projectsFab.classList.remove("hidden");
      }
    });
  },
  appearOptions);
  appearOnScroll.observe(intersectors);
}
