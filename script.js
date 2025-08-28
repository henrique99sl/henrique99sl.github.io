function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Garante que todos os vídeos têm os atributos para autoplay inline e controles
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('video').forEach(function(video){
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('controls', '');
  });
});
