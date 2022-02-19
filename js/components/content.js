import { getData } from "../functions.js";

getData().then(res => {
    const elements = res ; // the elements of the list 

    let list = '<ul class="list-group">';

    elements.forEach( el => {
        return list += `<li class="list-group-item list-group-item-action list-group-item-primary">${el.nome}</li>`
    })

    list += '</ul>'

    const content = document.getElementById('content');
    content.innerHTML = list;
})

