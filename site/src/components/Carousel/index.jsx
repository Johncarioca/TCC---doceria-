import './index.scss'


const Categoria = (props) => {


  return (
    <main className='categoria'>
      
        <div onClick={props.botao}>
          <img alt="" src={props.img}/>
          <h5>{props.nome}</h5>

        </div>
        
       
    </main>
    
  )
}

export default Categoria