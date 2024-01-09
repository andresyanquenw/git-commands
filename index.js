let desc = document.querySelector('#description');

desc.style.color = "green";
desc.style.backgroundColor = "red"; 

const newVariable = 'test';
const newVariable1 = 'test';
const newVariable2 = 'test';
const newVariable3 = 'test';
const newVariable4 = 'test';


setTimeout(() => {
    desc.style.color = "red";
    desc.style.backgroundColor = "green"; 
}, 2000);