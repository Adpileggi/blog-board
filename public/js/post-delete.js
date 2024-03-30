
const deleteBtn = document.querySelectorAll('.delete');

// make a loop to add an event listener to all the button
deleteBtn.forEach(function (button) {
    button.addEventListener('click', async function(event) {
        console.log(event.target.value)
        const id = event.target.value

        const response = await fetch(`api/post/${id}`, {
            method: 'DELETE',
        })
        
        if (response.ok) {
            document.location.reload();
            console.log('in the delete function')
        } else {
            alert('did not delete')
        }
    });
});
