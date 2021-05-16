export default function initVl() {
  const intersectors = [
    ...document.querySelectorAll(".project-tech-icon-0"),
    ...document.querySelectorAll(".project-tech-icon-1"),
    ...document.querySelectorAll(".project-tech-icon-2"),
    ...document.querySelectorAll(".project-tech-icon-3"),
    ...document.querySelectorAll(".project-tech-icon-4"),
    ...document.querySelectorAll(".project-tech-icon-5"),
    ...document.querySelectorAll(".project-tech-icon-6"),
    ...document.querySelectorAll(".project-tech-icon-7"),
    ...document.querySelectorAll(".project-tech-icon-8"),
    ...document.querySelectorAll(".project-tech-icon-9"),
  ];
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
        // appearOnScroll.unobserve(entry.target);
      } else {
        entry.target.classList.remove("appear");
      }
    });
  },
  appearOptions);
  intersectors.forEach((intersectors) => {
    appearOnScroll.observe(intersectors);
  });
}
    