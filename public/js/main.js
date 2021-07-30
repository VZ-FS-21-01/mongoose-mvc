const catDetails = document.getElementById('cat-details')
const catDetailsForm = document.getElementById('cat-details-form')
const deleteCat = document.querySelector('.delete-cat')


const editCat = () => {
    catDetails.classList.toggle('hide')
    catDetailsForm.classList.toggle('hide')
}

deleteCat.addEventListener('click', (e) => {
    console.log(e.target.dataset.cat)
    const endpoint = `/cats/${e.target.dataset.cat}`
    fetch(endpoint, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => window.location.href = data.redirect)
        .catch(err => console.log(err))
})
