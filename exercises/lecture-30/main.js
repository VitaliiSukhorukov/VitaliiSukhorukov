const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;



let demo = document.querySelector('#demo')


let inputs = document.querySelectorAll('input');
let h1 = document.querySelector('h1')

setTimeout(() => {
    let firstName = '';
    let lastName = '';
    inputs.forEach(input => {
        if (input.name === 'firstName') {
            firstName = input.value;
        } else if (input.name === 'lastName') {
            lastName = input.value;
        }

    })
    if(firstName && lastName) {
        h1.textContent = `Hello, ${firstName} ${lastName}!`;
    }
    else {
        h1.textContent = ' I\'m miss You';
    }
}, 10000)


let xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
xhr.send()
xhr.onload =    ()  =>{
    let posts = JSON.parse(xhr.responseText);
    posts.forEach(item => {
        demo.insertAdjacentHTML('afterbegin', template(item));
    })
}