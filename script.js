const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removerFocus();
        item.classList.add('selected');
    })

    removerFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})
