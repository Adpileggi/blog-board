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
            document.location.replace('/');
        } else {
            alert('failed to create post');
        }
    }
};

const postUpdateHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();

    console.log(title)
    console.log(contents)

    if(title && contents) {
        const response = await fetch('/api/post', {
            method: 'Put',
            body: JSON.stringify({ title, contents }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response)
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('failed to update')
        }
    }
};
