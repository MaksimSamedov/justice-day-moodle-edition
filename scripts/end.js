let interval = localStorage['verificationInterval'] * 1
if(!interval) interval = 5000
console.log("Justice here. Now on moodle")
localStorage['verificationInterval'] = interval


const main = () => {
    document.querySelectorAll('button[aria-label="Проверка"]').forEach((el, i) => {
        el.click()
        console.log('Проверка активности (' + new Date().toLocaleDateString() + ')')
    })
    setTimeout(main, localStorage['verificationInterval'])
}
main()

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    if(request['verificationInterval']) interval = request['verificationInterval']
});
