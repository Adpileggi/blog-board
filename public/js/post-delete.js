const postDeleteHandler = async (event) => {

    const response = await fetch('api/post/', {
        method: 'DELETE',

    })
    
}

// document.querySelectorAll('.delete-btn').addEventListener('submit', postDeleteHandler)