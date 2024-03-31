const ul = document.querySelector('ul');
const input = document.getElementById('item');
const btn = document.querySelector('button')

let itemsArray = JSON.parse(localStorage.getItem('items')) || []


itemsArray.forEach(addTask)

function addTask(text) {
    let li = document.createElement("li");
    li.textContent = text;
    ul.append(li)

}


function add() {
    let text = input.value.trim()
    if (text !== '') {
        itemsArray = itemsArray.concat(text)
        localStorage.setItem('items', JSON.stringify(itemsArray))
        addTask(text)
        input.value = '';
    }
}

function del() {
    localStorage.removeItem('items')
    let li = document.querySelectorAll("ul li")
    for (const liElement of li) {
        liElement.remove()
    }
    itemsArray = [];
    input.value = input.defaultValue
}
