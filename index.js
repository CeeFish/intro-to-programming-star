const today = new Date();
const thisYear = today.getFullYear();
footer = document.querySelector('footer');
copyright = document.createElement('p');
copyright.innerHTML = 'Candace' + thisYear;
footer.appendChild(copyright);

const skills = ['Excel', 'SQL', 'Power BI', 'JavaScript', 'HTML', 'CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};
