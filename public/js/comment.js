const commentFormHandler = async (event) => {

    event.preventDefault();

    const contents = document.querySelector('#comment-text').value.trim();

    const currentPost = req.session.postID

    console.log(contents);

    if (contents) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ contents }),
            headers: {'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/post');
        } else {
            alert('Cannot add comment');
        }
            
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler)