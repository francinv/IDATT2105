const decreaseButton = document.querySelector('#decrease');
const increaseButton = document.querySelector('#increase');
const counterNumber = document.querySelector('#counter-number');

const hideTextBlock = (idOfTextBlockToHide) => {
    const isTextBlockVisible = event.target.classList.contains('fa-eye-slash');
    const textBlock = document.querySelector(`#${idOfTextBlockToHide}`);

    event.target.classList.remove(isTextBlockVisible ? 'fa-eye-slash' : 'fa-eye');
    textBlock.classList.remove(isTextBlockVisible ? 'display-block' : 'display-none');

    event.target.classList.add(isTextBlockVisible ? 'fa-eye' : 'fa-eye-slash');
    textBlock.classList.add(isTextBlockVisible ? 'display-none' : 'display-block');
}

decreaseButton.addEventListener('click', () => {
    counterNumber.innerText = parseInt(counterNumber.innerText) - 1;
});
increaseButton.addEventListener('click', () => {
    counterNumber.innerText = parseInt(counterNumber.innerText) + 1;
});
window.onload = () => {
    populateListWithKeywords();
}

const randomKeyWords = ['HTML', 'CSS', 'Javascript', 'Typescript', 'Vue', 'Angular', 'React', 'Next', 'Java', 'Kotlin', 'React', 'React Native'];

const populateListWithKeywords = () => {
    const list = document.querySelector('#keywords-list');



    randomKeyWords.forEach(keyword => {
        const listItem = document.createElement('li');
        const spanItem = document.createElement('span');
        spanItem.classList.add('mr-xs');
        spanItem.innerText = '👉🏽';
        listItem.classList.add('my-sm')
        listItem.innerText = keyword;
        listItem.prepend(spanItem);
        list.appendChild(listItem);
    });
}
