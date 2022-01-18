const btn = document.getElementById('btn')

const modal = document.getElementById('btn-2')

btn.onclick = () => {
    modal.classList.remove('invisible')
}

document.addEventListener('keydown', function(e) {
    const escKey = e.key === 'Escape'

    if (escKey) {
        modal.classList.add('invisible')
    }
})