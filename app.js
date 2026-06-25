// Scroll-Video Canvas Controller with Eased Interpolation (Lerp)

const totalFrames = 240;
const images = [];
let loadedCount = 0;

const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const scrollContainer = document.getElementById('hero-scroll-container');
const loadingScreen = document.getElementById('loading-screen');
const loadingProgressText = document.getElementById('loading-progress-text');
const loadingProgressBar = document.getElementById('loading-progress-bar');

// Scroll Animation variables
let targetFrameIndex = 0;
let currentFrameIndex = 0;
const ease = 0.1; // Easing factor (test values between 0.08 and 0.15)
let loopActive = false;

// Generate padded index strings (e.g. 001, 012, 123)
function getFrameName(index) {
  const pad = String(index).padStart(3, '0');
  return `frames/ezgif-frame-${pad}.jpg`;
}

// Draw the image on canvas with "cover" behavior
function drawImageCover(ctx, img) {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const imgWidth = img.naturalWidth || img.width;
  const imgHeight = img.naturalHeight || img.height;

  const canvasRatio = canvasWidth / canvasHeight;
  const imgRatio = imgWidth / imgHeight;

  let drawWidth, drawHeight, drawX, drawY;

  if (canvasRatio > imgRatio) {
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgRatio;
    drawX = 0;
    drawY = (canvasHeight - drawHeight) / 2;
  } else {
    drawWidth = canvasHeight * imgRatio;
    drawHeight = canvasHeight;
    drawX = (canvasWidth - drawWidth) / 2;
    drawY = 0;
  }

  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
}

// Redraw current frame
function drawFrame(index) {
  const img = images[index];
  if (img && img.complete) {
    drawImageCover(ctx, img);
  } else {
    // Fallback: search outwards for nearest loaded frame
    let fallbackImg = null;
    for (let offset = 1; offset < totalFrames; offset++) {
      const prev = index - offset;
      const next = index + offset;
      if (prev >= 0 && images[prev] && images[prev].complete) {
        fallbackImg = images[prev];
        break;
      }
      if (next < totalFrames && images[next] && images[next].complete) {
        fallbackImg = images[next];
        break;
      }
    }
    if (fallbackImg) {
      drawImageCover(ctx, fallbackImg);
    }
  }
}

// Resize canvas dynamically to match viewport, accounting for devicePixelRatio
function resizeCanvas() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.resetTransform();
  ctx.scale(dpr, dpr);

  drawFrame(Math.round(currentFrameIndex));
}

// Dynamically transition and animate text overlays based on scroll position fraction (0 to 1)
function updateOverlays(fraction) {
  const headline = document.getElementById('initial-headline-overlay');
  const nav = document.getElementById('top-nav');

  // Headline fade out (0% to 30% scroll)
  if (fraction <= 0.30) {
    const p = fraction / 0.30; // 0 to 1
    if (headline) {
      headline.style.opacity = 1 - p;
      headline.style.transform = `scale(${1 - p * 0.05})`;
      headline.style.pointerEvents = (p < 0.9) ? 'auto' : 'none';
    }
  } else {
    if (headline) {
      headline.style.opacity = 0;
      headline.style.transform = 'scale(0.95)';
      headline.style.pointerEvents = 'none';
    }
  }

  // Navigation Bar slide-in (85% to 95% scroll)
  if (fraction >= 0.85) {
    const p = Math.min(1, (fraction - 0.85) / 0.10); // 0 to 1
    if (nav) {
      nav.style.opacity = p;
      nav.style.transform = `translateY(${(p - 1) * 100}%)`;
      if (p > 0) {
        nav.classList.remove('pointer-events-none');
        nav.classList.add('pointer-events-auto');
      } else {
        nav.classList.remove('pointer-events-auto');
        nav.classList.add('pointer-events-none');
      }
    }
  } else {
    if (nav) {
      nav.style.opacity = 0;
      nav.style.transform = 'translateY(-100%)';
      nav.classList.remove('pointer-events-auto');
      nav.classList.add('pointer-events-none');
    }
  }
}

// Eased Animation Loop (Lerp)
function tick() {
  const diff = targetFrameIndex - currentFrameIndex;

  if (Math.abs(diff) < 0.05) {
    currentFrameIndex = targetFrameIndex;
    drawFrame(Math.round(currentFrameIndex));
    updateOverlays(currentFrameIndex / (totalFrames - 1));
    loopActive = false;
  } else {
    currentFrameIndex += diff * ease;
    drawFrame(Math.round(currentFrameIndex));
    updateOverlays(currentFrameIndex / (totalFrames - 1));
    requestAnimationFrame(tick);
  }
}

// Handle scroll update and compute targets
function onScrollUpdate() {
  const rect = scrollContainer.getBoundingClientRect();
  const scrollableHeight = rect.height - window.innerHeight;

  if (scrollableHeight <= 0) return;

  const scrolled = -rect.top;
  let scrollFraction = scrolled / scrollableHeight;
  scrollFraction = Math.max(0, Math.min(1, scrollFraction));

  targetFrameIndex = Math.min(totalFrames - 1, Math.floor(scrollFraction * totalFrames));

  // Trigger loop if not active
  if (!loopActive) {
    loopActive = true;
    requestAnimationFrame(tick);
  }
}

// Preload assets
function preloadImages() {
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = getFrameName(i);
    img.onload = () => {
      loadedCount++;
      const progressPercent = Math.floor((loadedCount / totalFrames) * 100);

      if (loadingProgressText) {
        loadingProgressText.innerText = `${progressPercent}%`;
      }
      if (loadingProgressBar) {
        loadingProgressBar.style.width = `${progressPercent}%`;
      }

      // Draw first frame immediately to avoid a blank screen
      if (i === 1) {
        drawFrame(0);
      }

      // Check if all images have finished loading
      if (loadedCount === totalFrames) {
        startWebsite();
      }
    };
    img.onerror = () => {
      loadedCount++;
      if (loadedCount === totalFrames) {
        startWebsite();
      }
    };
    images.push(img);
  }
}

// Initialize active scrolling and event listeners only after preload is fully complete
function startWebsite() {
  // Fade out preloader
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      document.body.classList.remove('overflow-hidden');
    }, 500);
  }

  // Adjust canvas size to current screen
  resizeCanvas();

  // Attach window event listeners
  window.addEventListener('scroll', onScrollUpdate);
  window.addEventListener('resize', resizeCanvas);

  // Position elements correctly based on initial scroll level
  onScrollUpdate();
}

// Page entry point
document.addEventListener('DOMContentLoaded', () => {
  // Disable body scroll during the asset loading process
  document.body.classList.add('overflow-hidden');

  // Set initial canvas size before preloader disappears
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(dpr, dpr);

  // Start preloading
  preloadImages();
});
