function home() {
    console.log('wine wine')
}

const homeBtn = document.querySelector('#home')
homeBtn.addEventListener('click',() => {
    home();
})