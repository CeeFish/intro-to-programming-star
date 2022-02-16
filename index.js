//Hamburger Menu 
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

//Copyright information for footer
const today = new Date();
const thisYear = today.getFullYear();
footer = document.querySelector('footer');
copyright = document.createElement('p');
copyright.innerHTML = `&#169; ${thisYear} <span>Candace Fisher</span>`;

footer.prepend(copyright);

//Creating list of skills
const skills = ['Excel', 'SQL', 'Power BI', 'JavaScript', 'Git', 'HTML', 'CSS', 'AJAX', 'API Fetch'];

//DOM Selection of Skills List
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

// Using forEach arrow function instead of a for loop to get the array of skills (DOM Manipulation)
    // skills.forEach((s) => {
    //   const skill = document.createElement('li');
    //   console.log(s);
    //   skill.innerText = s;
    //   skillsList.appendChild(skill);
    // });

//DOM Manipulation of Skills List using a For Loop
for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

//Creating  the Message Form 
const messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm)
messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const textarea = e.target.message.value;

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

//Creating a New Message    
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a class="inner-message" href="mailto:${email}">${name}</a> <span class="inner-message">${textarea}</span>`;

//Create a Remove Button in the Message Section
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.className = "remove-btn"
    removeButton.setAttribute("type", "button");

    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        
//Removes the entry from the Message Form
        entry.remove();
});

// Create an edit button and put the save button inside the edit button event listener
    const editButton = document.createElement("button");
        editButton.innerText = "edit";
        editButton.className = "edit-btn"
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

// XmlHttpRequest for GitHub Projects
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

// API Fetch for GitHub Projects
    // fetch('https://api.github.com/users/CeeFish/repos')
    //     .then(response => response.json())
    //     .then( repos => {
            
    //         for(let i = 0; i < repos.length; i++) {
    //             const project = document.createElement('li');
    //             project.innerText = repos[i].name;
    //             projectList.appendChild(project);
    //             console.log(repos[i].name);
    //     };
    // });
