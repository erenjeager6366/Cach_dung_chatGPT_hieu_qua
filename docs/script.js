// script.js

function toggleToc() {
  const toc = document.querySelector('.toc');
  toc.classList.toggle('collapsed');
}
function preventSameLang(lang) {
  const path = window.location.pathname;

  if ((lang === 'en' && path.includes('/en/')) ||
      (lang === 'vi' && !path.includes('/en/'))) {
    return false; // chặn chuyển hướng nếu đã ở ngôn ngữ đó
  }

  return true; // cho phép chuyển hướng nếu khác ngôn ngữ
}
