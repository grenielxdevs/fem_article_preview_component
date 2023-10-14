const shareBtn = document.querySelector('.share-btn');
const share = document.querySelector('.share');
const arrDown = document.querySelector('.arrow-down');


shareBtn.addEventListener('click', function() {
    share.classList.add('show');
    arrDown.classList.add('show');
})