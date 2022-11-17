import { useNavigate } from 'react-router-dom'
import './index.scss'


const Categoria = (props) => {
  const navigate = useNavigate; 
  function CardClick() {
    navigate ('/cardapio')
  }

  return (
    <main className='categoria' onClick={CardClick}>

      <div onClick={props.botao}>
        <img alt="" src={props.img} onClick={CardClick}/>
          <h1 onClick={CardClick}>{props.nome}</h1>
        
      </div>


    </main>

  )
}

export default Categoria