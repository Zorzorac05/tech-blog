const addBtn = document.getElementById('comment-btn');
const commentForm = document.getElementById('comment-wrapper');
const postId = document.querySelector('.post-id').getAttribute('data-id');


// handles creating a new comment
async function commentHandler(event) {
    event.preventDefault();
    const content = document.getElementById('new-comment').value.trim();;
    if(content != 'comment goes here' && content){
        const response = await fetch('/api/comment/', {
            method: 'POST',
            body: JSON.stringify({post_id: postId, content: content}),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.reload();
          } else {
            alert('failed to post');
          }
    }
}

function commentBtnHandler(event) {
    switchDisplay(commentForm);
}

const createEventListeners = () => {
    commentForm.addEventListener('submit', commentHandler);
    addBtn.addEventListener('click', commentBtnHandler)
     
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
            addBtn.innerText = 'add comment'
        }
    }