/* ── Lightbox ── */
function openLightbox(src) {
  const img = document.getElementById('lightbox-img');
  const box = document.getElementById('lightbox');
  if (!img || !box) return;
  img.src = src;
  box.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const box = document.getElementById('lightbox');
  if (!box) return;
  box.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Open lightbox when a review screenshot or customer photo is tapped
  document.addEventListener('click', (e) => {
    const img = e.target.closest('.review-screenshot, .review-photos-grid img');
    if (img) openLightbox(img.currentSrc || img.src);
  });

  // Close lightbox on backdrop click or close button
  const box = document.getElementById('lightbox');
  if (box) {
    box.addEventListener('click', (e) => {
      if (e.target === box || e.target.closest('.lightbox-close')) closeLightbox();
    });
  }

  // Graceful image fallbacks (replaces inline onerror handlers, keeping a strict CSP)
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    const swap = () => { img.src = img.dataset.fallback; };
    img.addEventListener('error', swap, { once: true });
    // Handle images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) swap();
  });
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
