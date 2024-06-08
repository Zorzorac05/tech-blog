const postBtn = document.getElementById('input-wrapper');

//handles creating a new post
async function postHandler(event) {
    const content = document.getElementById('new-post').value.trim();
    const title = document.getElementById('title').value.trim();
    if(title != 'Title' && content != 'post goes here' && title && content){
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({title: title, content: content}),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            document.location.reload();
          } else {
            alert('failed to post');
          }
    }
}


//event listener for the button
postBtn.addEventListener('submit', postHandler);