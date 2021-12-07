document.addEventListener("DOMContentLoaded", event => {
    const hours = new Date().getHours()
    const hello = document.querySelector('#message .hello-message')
    if(hours >= 5 && hours < 15) hello.innerHTML = 'Buenos días'
    else if(hours >= 15 && hours < 22) hello.innerHTML = 'Buenas tardes'
    else hello.innerHTML = 'Buenas noches'

    const input = document.querySelector('[name="verification_interval"]')
    if(localStorage['verificationInterval']) input.value = localStorage['verificationInterval'] / 1000
    input.oninput = async () => {
        console.log('input')
        let interval = input.value
        if(!interval || interval < 5) interval = 5
        if(interval > 55) interval = 55
        interval *= 1000
        localStorage['verificationInterval'] = interval
        chrome.runtime.sendMessage({verificationInterval: interval})
    }
})