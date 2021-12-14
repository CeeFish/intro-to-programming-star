const today = new Date();
const thisYear = today.getFullYear();
footer = document.querySelector('footer');
copyright = document.createElement('p');
copyright.innerHTML = `&#169; ${thisYear} <span>Candace Fisher</span>`;

footer.appendChild(copyright);

const skills = ['Excel', 'SQL', 'Power BI', 'JavaScript', 'Git', 'HTML', 'CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

// Using forEach arrow function instead of a for loop to get the array of skills
// skills.forEach((s) => {
//   const skill = document.createElement('li');
//   console.log(s);
//   skill.innerText = s;
//   skillsList.appendChild(skill);
// });

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

const messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm)
messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const textarea = e.target.message.value;

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${textarea}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");

    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        entry.remove();
    });
    // Create an edit button and put the done button inside the edit button event listener
    const editButton = document.createElement("button");
        editButton.innerText = "edit";
        editButton.setAttribute("type", "button");
    
        editButton.addEventListener('click', (e) => {
            const listItem = e.target.parentNode;
            const message = listItem.querySelector("span");
            message.contentEditable = true;
        });
        newMessage.appendChild(editButton);
        newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    messageForm.reset();
});

// const githubRequest = new XMLHttpRequest();
// githubRequest.open('GET', 'https://api.github.com/users/CeeFish/repos');
// githubRequest.send();

// githubRequest.addEventListener('load', myEventListener);
//     function myEventListener() {
//     const repositories = JSON.parse(this.response);
//     // console.log(repositories);

const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');
    
// for(let i = 0; i < repositories.length; i++) {
//     const project = document.createElement('li');
//     project.innerText = repositories[i].name;
//     projectList.appendChild(project);
//     console.log(repositories[i].name);
//     };
// };

fetch('https://api.github.com/users/CeeFish/repos')
    .then(response => response.json())
    .then( repos => {
        for(let i = 0; i < repos.length; i++) {
            const project = document.createElement('li');
            project.innerText = repos[i].name;
            projectList.appendChild(project);
            console.log(repos[i].name);
    };
});
