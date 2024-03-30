const commentFormHandler = async (event) => {

    event.preventDefault();

    const contents = document.querySelector('#comment-text').value.trim();

    console.log(contents);

    const currentUrl = window.location.href;
    const idValue = currentUrl.split("").pop()
    console.log(idValue)

    if (contents) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ contents }),
            headers: {'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('hello')
            document.location.reload;
            // document.location.replace(`/post/${idValue}`);
        } else {
            alert('Cannot add comment');
        }
            
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler)