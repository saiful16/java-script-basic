document.getElementById('btn-publish').addEventListener('click', 
    function(){
       const userInput = document.getElementById('comment-text-value')
       const userInputValue = userInput.value
        const newCommentEl = document.createElement('p')
        newCommentEl.innerText = userInputValue;
        newCommentEl.classList.add('commnet')

        const commentContainer = document.getElementById('comment-container');
        commentContainer.appendChild(newCommentEl)
        userInput.value=''
        
    }
)