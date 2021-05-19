export default function initShakers() {
  const intersectors = document.querySelectorAll(".emoji-shake");
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
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  intersectors.forEach((intersectors) => {
    appearOnScroll.observe(intersectors);
  });
}
