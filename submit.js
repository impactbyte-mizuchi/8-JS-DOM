function submitForm(event){
  event.preventDefault()
  
  // ngambil data dari user
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  let data = {
    email,
    password
  }

  localStorage.setItem('data', JSON.stringify(data))

  alert('login berhasil')
}