// const { response } = require("express");

const commentFormHandler = async (event) => {
    
    event.preventDefault();

    const contents = document.querySelector('#comment-text').value.trim();

    console.log(contents);

    if (contents) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ contents }),
            headers: {'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Cannot add comment');
        }
            
    }
};

document.querySelector('.new-comment').addEventListener('submit', commentFormHandler)