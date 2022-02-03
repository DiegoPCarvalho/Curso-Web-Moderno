const color = {
    p: '#333',
    body: 'green',
    ul: '#352',
    li: '#777',
    div: 'red',
    span: '#efe',
    ol: 'blue',
    padrao: '#616161',
    
    get(tag){
        return this [tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = color.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = color.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
        }
})