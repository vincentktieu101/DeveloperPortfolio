export default function initShakers() {
  const intersectors = document.querySelectorAll(".emoji-shake")
  const appearOptions = {
    threshold: 0.6,
  }
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear")
      } else {
        entry.target.classList.add("appear")
      }
    })
  },
  appearOptions)
  intersectors.forEach(intersectors => {
    appearOnScroll.observe(intersectors)
  })
}
