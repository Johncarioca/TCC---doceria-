import './index.scss'


const Categoria = (props) => {


  return (
    <main className='categoria'>

      <div onClick={props.botao}>
        {/* <img alt="" src={props.img}/>
          <h5>{props.nome}</h5> */}
        <img alt="" src='/assets/image/doces.png' />
        <h1>Doces</h1>
      </div>


    </main>

  )
}

export default Categoria