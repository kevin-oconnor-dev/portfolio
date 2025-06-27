const mainHeaderStroke = document.querySelector('#main-header');
const mainHeaderFill = document.querySelector('#main-header-fill');
const headerElement = document.querySelector('header');
const skillsHeader = document.querySelector('#skills-header');
const skillsBox = document.querySelector('#skills-box');

const observer = new IntersectionObserver((entries, observer) => {
  const entry = entries[0]; // only one element observed
  let seen = sessionStorage.getItem('seenFadeIn');
  if (entry.isIntersecting && seen !== 'true') {
    fadeInSkills();
    sessionStorage.setItem('seenFadeIn', 'true')
    observer.unobserve(entry.target); // stop listening after first trigger
  }
});
observer.observe(skillsBox);
if (sessionStorage.getItem('seenFadeIn') === 'true') {
  showSkillsImmediately();
}

let headerHeight = headerElement.offsetHeight;
mainHeaderStroke.style.top = headerHeight / 1/3 + 'px';
mainHeaderFill.style.top = headerHeight / 1/3 + 'px';

function fadeInSkills() {
  const skills = document.querySelectorAll('.skill');
  skillsHeader.className = '';

  for (let i = 0; i < skills.length; i++) {
    let delay = 250 * i + 100;
    setTimeout( () => {
      skills[i].style.opacity = '1'
    }, delay)
  }
  let endTime = 250 * (skills.length - 1) + 600;
  setTimeout(() => {
    skillsHeader.className = 'animated';
  }, endTime)
}

function showSkillsImmediately() {
  document.querySelectorAll('.skill').forEach(skill => {
    skill.style.opacity = 1;
  })
}