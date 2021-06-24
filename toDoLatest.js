let addToDoButton = document.getElementById('addToDo');
let cont123 = document.getElementById('cont123');
let input = document.getElementById('input');


addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    cont123.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        cont123.removeChild(paragraph);
    })
})