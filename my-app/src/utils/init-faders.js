export default function initFaders() {
  const faders = document.querySelectorAll('.fade-in')
  const appearOptions = {
    threshold: 0.4
  }
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, appearOptions)
  faders.forEach(faders => {
    appearOnScroll.observe(faders);
  })
}