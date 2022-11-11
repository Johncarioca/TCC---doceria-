import './index.scss'


const Categoria = (props) => {


  return (
    <main className='categoria'>

      <div onClick={props.botao}>
        <img alt="" src={props.img}/>
          <h1>{props.nome}</h1>
        
      </div>


    </main>

  )
}

export default Categoria