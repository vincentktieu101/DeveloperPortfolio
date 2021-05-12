export default function initVl() {
  const intersectors = document.querySelectorAll(".project-item-vl")
  const appearOptions = {
    threshold: 0.4,
  }
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("disappear")
        entry.target.classList.add("appear")
      } else if (entry.target.classList.contains("appear")) {
        entry.target.classList.remove("appear")
        entry.target.classList.add("disappear") 
      }
    })
  },
  appearOptions)
  intersectors.forEach(intersectors => {
    appearOnScroll.observe(intersectors)
  })
}
