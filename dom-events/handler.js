document.getElementById('btn-update-title')
    .addEventListener('click',
        function () {
            const pageTitle = document.getElementById('page-title');
            pageTitle.innerText = 'Updated Title'
        })

document.getElementById('btn-login')
    .addEventListener('click',
        function () {
            const userInfoEl = document.getElementById('user-info');
            userInfoEl.innerText = "User successfully Logged in"
        })


        // 1. set event listener
document.getElementById('btn-update-name')
.addEventListener('click', function(){
    // console.log('up btn clickekr')

    // 2. get the text from the input field
    const userInputValue = document.getElementById('user-input').value
    //3. set the value
    document.getElementById('user-name').innerText = userInputValue;
})