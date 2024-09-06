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

function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element

            return { name, value }
        })
    console.log(data)
}

// function serializeForm(formNode) {
//     return new FormData(formNode)
// }

async function sendData(data) {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
}

async function handleFormSubmit(event) {
    event.preventDefault()

    const data = serializeForm(event.target)
    const response = await sendData(data)
}

function toggleLoader() {
    const loader = document.getElementById('loader')
    loader.classList.toggle('hidden')
}

async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)

    toggleLoader()

    const response = await sendData(data)

    toggleLoader()
}

function onSuccess(formNode) {
    alert('Sent')
    formNode.classList.toggle('hidden')
}

async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)

    toggleLoader()
    const { status } = await sendData(data)
    toggleLoader()

    if (status === 200) {
        onSuccess(event.target)
    }
}

function onError(error) {
    alert(error.message)
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const data = serializeForm(event.target);

    toggleLoader();

    const { status, error } = await sendData(data);
    toggleLoader();

    if (status === 200) {
        onSuccess(event.target);
    }   else {
            onError(error || new Error('Unknown error occurred'));
    } 
}

function onError(error) {
    alert(error.message || 'An error occurred');
}