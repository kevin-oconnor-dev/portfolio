function trackScroll() {
  if (!umami) return;
  const pageId = document.querySelector('meta[name="page-id"]')?.content;
  const scrollPercent = Math.floor(
    (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
  )
  if (scrollPercent >= 25 && !window.scrollTracked25) {
    umami.track(`${pageId} - Scroll 25%`);
    window.scrollTracked25 = true;
  }
  if (scrollPercent >= 50 && !window.scrollTracked50) {
    umami.track(`${pageId} - Scroll 50%`);
    window.scrollTracked50 = true;
  }
  if (scrollPercent >= 75 && !window.scrollTracked75) {
    umami.track(`${pageId} - Scroll 75%`);
    window.scrollTracked75 = true;
  }
  if (scrollPercent >= 100 && !window.scrollTracked100) {
    umami.track(`${pageId} - Scroll 100%`);
    window.scrollTracked100 = true;
  }
}
window.addEventListener('scroll', trackScroll);