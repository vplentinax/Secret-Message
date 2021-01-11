const {hash} = window.location
const message = hash.replace('#', '')

if (message) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')
  const decode = atob(message)
  document.querySelector('.message').innerHTML = `${decode}`
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#link-form').classList.remove('hide')
  const input = document.querySelector('#message-input')
  const codify = btoa(input.value)
  const inputCodify = document.querySelector('#link-input')
  inputCodify.value = `${window.location}#${codify}`
  inputCodify.select()
})
