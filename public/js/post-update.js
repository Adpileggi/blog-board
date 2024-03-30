const postUpdateHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();

    console.log(title)
    console.log(contents)

    if(title && contents) {
        const response = await fetch('/api/post/:id', {
            method: 'PUT',
            body: JSON.stringify({ title, contents }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to update')
        }
    }
};

document.querySelector('.update-post-form').addEventListener('submit', postUpdateHandler)