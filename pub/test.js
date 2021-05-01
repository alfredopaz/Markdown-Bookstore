function recitar(markupText){
  const markupText = document.querySelector('#markupText')
  const url = 'http://localhost:3000/'
  http = fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      text: markupText
    })
  })
  http.then(
    response => response.json()
  ).then(
    data => {
      document.querySelector("#htmlCode").innerHTML = data.text
    }
  )
}
document.addEventListener('DOMContentLoaded', function(){
  const text = document.querySelector('#markupText')
  document.querySelector('#form1').onsubmit = () => {
    recitar(text.value)
    return false;
  }

})
