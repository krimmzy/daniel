function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
function viewMedia(mediaSrc) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  modal.classList.remove('hidden');

  if (mediaSrc.endsWith('.mp4')) {
    modalContent.innerHTML = `<video controls autoplay><source src="${mediaSrc}" type="video/mp4"></video>`;
  } else {
    modalContent.innerHTML = `<img src="${mediaSrc}" alt="Media">`;
  }
}
  


