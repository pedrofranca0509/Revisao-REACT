import { useState } from 'react'
import './App.css'


function App() {
  const [email, setEmail] = useState ("")
  const [senha, setSenha] = useState ("")

  function handleEmail(evento){
    setEmail(evento.target.value)
  }

  function handleSenha(evento){
    setSenha(evento.target.value)
  }

  function handleSubmit(){
    alert(`
    Email: ${email}
    Senha: ${senha}
    `)
  }
  
  
  return (

    <>
    <header>
      <h1>login</h1>
    </header>

    <main>
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email: </label>
        <input type="email" id='email' placeholder='Digite seu Email ' onChange={handleEmail} />
      </div>

      <div>
        <label htmlFor="">Senha: </label>
        <input type="password" id='Senha' placeholder='Digite sua Senha'onChange={handleSenha} />
      </div>

      <button>Entrar</button>
    </form>
    </main>
    
    </>
   

  )
}

export default App
