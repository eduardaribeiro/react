import "./header.css"
import reactLogo from "../../assets/logo-digital.png"

function Header() {
  
    return (
      <>
    
  <div className="pai">
 
      <div className="logo">
        <img src={reactLogo}  ></img>
       </div>

      <div className="placeholder">
      <input type="text" placeholder="Buscar..."/>
      </div>


      <div className="botoes">
        <button>Cadastro</button>
        <button>Login</button>
      </div>
      


  </div> 

  
      
      
        </>
    )
  }
  
  export default Header
  