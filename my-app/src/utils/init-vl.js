export default function initVl() {
  const faders = document.querySelectorAll('.vl')
  const appearOptions = {
    threshold: 0.6
  }
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear");
        entry.target.classList.add("disappear");
      } else {
        entry.target.classList.remove("disappear");
        entry.target.classList.add("appear");
      }
    })
  }, appearOptions)
  faders.forEach(faders => {
    appearOnScroll.observe(faders);
  })
}