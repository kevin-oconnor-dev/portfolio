const mainHeaderStroke = document.querySelector('#main-header');
const mainHeaderFill = document.querySelector('#main-header-fill');
const headerElement = document.querySelector('header');
const skillsBox = document.querySelector('#skills-box');

const observer = new IntersectionObserver((entries, observer) => {
  const entry = entries[0]; // only one element observed
  if (entry.isIntersecting) {
    fadeInSkills();
    observer.unobserve(entry.target); // stop listening after first trigger
  }
});
observer.observe(skillsBox);

let headerHeight = headerElement.offsetHeight;
mainHeaderStroke.style.top = headerHeight / 1/3 + 'px';
mainHeaderFill.style.top = headerHeight / 1/3 + 'px';

function fadeInSkills() {
    const skills = document.querySelectorAll('.skill');

    for (let i = 0; i < skills.length; i++) {
        let delay = 500 * i + 100;
        setTimeout( () => {
            skills[i].style.opacity = '1'
        }, delay)
    }
}
