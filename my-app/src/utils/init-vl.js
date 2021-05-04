export default function initVl() {
  const intersectors = document.querySelectorAll(".project-item-vl")
  const appearOptions = {
    threshold: 0.8,
  }
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear")
        entry.target.classList.add("disappear")
      } else {
        entry.target.classList.remove("disappear")
        entry.target.classList.add("appear")
      }
    })
  },
  appearOptions)
  intersectors.forEach(intersectors => {
    appearOnScroll.observe(intersectors)
  })
}
