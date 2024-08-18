var preScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (preScrollPos > currentScrollPos)  {
        document.getElementById('menu').style.top = '0';
    } else {
        document.getElementById('menu').style.top = '-100px';     
    }
    preScrollPos = currentScrollPos;
    $('.owl-carousel').owlCarousel();     
}

const tabsButtons = document.querySelectorAll('.tabs_btn'); 

tabsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const prevActiveItem = document.querySelector('.tabs_item._active');
        const prevActiveButton = document.querySelector('.tabs_btn._active');
        if (prevActiveButton) {
            prevActiveButton.classList.remove('_active');
        }
        if (prevActiveItem) {
            prevActiveItem.classList.remove('_active');
        }
        const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
        const nextActiveItem = document.querySelector(nextActiveItemId);
        btn.classList.add('_active');

        if (nextActiveItem) {
            nextActiveItem.classList.add('_active');
        } else {
            console.error(`Element with id ${nextActiveItemId} not found.`);
        }

        nextActiveItem.classList.add('_active');
    });
})

function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Done')
}

const applicantForm = document.getElementById('form_action')
applicantForm.addEventListener('submit', handleFormSubmit)

function serializeForm(formNode) {
    console.log(formNode.elements)
}

function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}

function serializeForm(formNode) {
    const { elements } = formNode

    Array.from(elements)
        .forEach((element) => {
            const { name, value } = element
            console.log({ name, value })
        })
}
