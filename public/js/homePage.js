const postsEl= document.getElementsByClassName('post-box');
const addBtn = document.getElementById('add-btn');
const Postform = document.getElementById('input-wrapper');



//logic for if a post is clicked
async function postClickHandler (event) {
    const postId= event.currentTarget.querySelector('.post-header').getAttribute('data-id');
    console.log(postId)
    window.location.replace(`/post/${postId}`)
    
}

function addBtnHandler(event) {
    switchDisplay(Postform);
}

const createEventListeners = () => {
    addBtn.addEventListener('click', addBtnHandler)
    for( let i = 0; i< postsEl.length; i++){
        postsEl[i].addEventListener('click', postClickHandler)
     };
     
    }
    
    //main events
    createEventListeners();




//helper functions
    function switchDisplay (el) {
        if (el.style.display == 'none'){
            el.style.display = 'flex'
            addBtn.innerText = 'cancel'
        }else{
            el.style.display = 'none';
            addBtn.innerText = 'add post';
        }
    }