import './App.css'

function App() {

  function handleSubmit(){
    
  }

  return (
    <div className='app'>
      <h1>Cadastro de Usuarios</h1>

      <form onSubmit={handleSubmit}>
      <input placeholder='Nome' 
        type='text'
      />
      <input placeholder='Email' 
        type='email'
      />

      <input placeholder='Idade' 
      type='number'
      />

      <button type='submit'>Cadastrar</button>
      </form>

      <div>
        <p>Usuarios Cadastrados</p>
      </div>

    </div>

  )
}

export default App
