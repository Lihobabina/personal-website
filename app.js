document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  });

  const links = document.querySelectorAll('a, .cursor-pointer');

  links.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      cursor.classList.add('cursor-active');
    });

    link.addEventListener('mouseout', function () {
      cursor.classList.remove('cursor-active');
    });
  });

  const linksHover = document.querySelectorAll('.hover-this');

  const animateit = function (e) {
    const hoverAnim = this.querySelector('.hover-anim');
    const x = e.offsetX;
    const y = e.offsetY;
    const width = this.offsetWidth;
    const height = this.offsetHeight;
    const move = 25;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;
    hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === 'mouseleave') hoverAnim.style.transform = '';
  };

  linksHover.forEach(function (link) {
    link.addEventListener('mousemove', animateit);
    link.addEventListener('mouseleave', animateit);
  });
  
});




  document.addEventListener('DOMContentLoaded', function () {
    'use strict';
  
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'stroke-dashoffset 10ms linear';
  
    const updateProgress = function () {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
  
    updateProgress();
  
    window.addEventListener('scroll', updateProgress);
  
    const offset = 150;
    const duration = 550;
  
    window.addEventListener('scroll', function () {
      const progressWrap = document.querySelector('.progress-wrap');
      if (window.scrollY > offset) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    });
  
    const progressWrap = document.querySelector('.progress-wrap');
    progressWrap.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  




  const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);

    try {
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Success');
            form.reset();
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error');
    }
}
