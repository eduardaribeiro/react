import "./header.css"
import logorosa from "../../assets/logorosa.png"
import carrinho from "../../assets/carrinho.png"


function Header() {
  
    return (
      <>
    
  <div className="cabeçalho">
 
      <div className="logo">
        <img src={logorosa}/>
       </div>

      <div className="barradepesquisa">
      <input type="text" placeholder="Buscar..."/>
      </div>



     <div >
     <button href="facebook.com" className="botao1">Cadastre-se</button>
     </div>

     <div >
      <button href="facebook.com" className="botao2">Entrar</button>
     </div>
      
      
     <div>
     <img src={carrinho} alt="carrinho" className="carrinho"/>
     </div>
      
  </div> 

  <div className="menu">
      <button>Home</button>
      <button>Produtos</button>
      <button>Categorias</button>
      <button>Meus Pedidos</button>


</div>
      
      
        </>
    )
  }
  
  export default Header
  