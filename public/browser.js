document.addEventListener('click', function(e) {
  if(e.target.classList.contains('edit-me')) {
    let userInput = prompt('Enter you desired new text');
    axios.post('/update-item', {text: userInput})
      .then(function() {
        
      }).catch(function() {
        console.log("Please try again later");       
      })
  }
})