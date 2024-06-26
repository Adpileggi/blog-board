const postCreateHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();

    if(title && contents) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response)

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to create post');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', postCreateHandler)
