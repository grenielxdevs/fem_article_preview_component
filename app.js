const shareBtn = document.querySelector('.share-btn');
const share = document.querySelector('.share');
const arrDown = document.querySelector('.arrow-down');

let initState = false;

shareBtn.addEventListener('click', function() {
    if(!initState) {
        share.classList.add('show');
        arrDown.classList.add('show');
        shareBtn.classList.add('active')
        initState = true;
        return;
    }

    share.classList.remove('show');
    arrDown.classList.remove('show');
    shareBtn.classList.remove('active')
    initState = false;

})