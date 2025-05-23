function fadeInSkills() {
    let skills = document.querySelectorAll('.skill');

    for (let i = 0; i < skills.length; i++) {
        let delay = 500 * i + 100;
        setTimeout( () => {
            skills[i].style.opacity = '1'
        }, delay)
    }
}
const skillsBox = document.querySelector('#skills-box');

const observer = new IntersectionObserver((entries, observer) => {
  const entry = entries[0]; // only one element observed
  if (entry.isIntersecting) {
    fadeInSkills();
    observer.unobserve(entry.target); // stop listening after first trigger
  }
});

observer.observe(skillsBox);

