console.log('This is client side!')
const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientInput = search.value;
    fetch('/foods?ingredient=' + ingredientInput).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = 'This is a ' + data.foodName;
        })
    })
})