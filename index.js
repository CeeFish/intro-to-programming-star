const today = new Date();
const thisYear = today.getFullYear();
footer = document.querySelector('footer');
copyright = document.createElement('p');
copyright.innerHTML = `&#169; <span>Candace</span> ${thisYear}`;

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
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    document.getElementById('message_form').reset();
});



