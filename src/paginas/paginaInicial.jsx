
import "../paginas/paginaInicial.css"

import sapatoinicio from "../assets/sapatoinicio.png"
import ornamentocapa from "../assets/ornamentocapa.png"
import elipserosa from "../assets/Ellipserosa.png"
import elipsecinza from "../assets/elipsecinza.png"
import blusasupreme from "../assets/blusasupreme.png"
import sapatodestaque from "../assets/sapatodestaque.png"
import headphonedestaque from "../assets/headphonesdestaque.png"



function PaginaInicial () {
   
    return (
        <>

  <div class="carrossel">
    
    <div className="carrossel1">
      <b><p className="orange">Melhores Ofertas Personalizadas</p></b>
      <h1> Queima de Estoque nike 🔥</h1>
      <p> Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur. </p>
    


      <button>Ver Ofertas</button>
    </div>

      <div>
        <img src={sapatoinicio} alt="tenisnike" className="tenisnike"/>
      </div>
      
      <div>
        <img src={ornamentocapa} className="ornamentoCapa"/>

      </div>

      <div class="botoescapa">
        
        <img src={elipserosa}/>
      
        <img src={elipsecinza}/>
        <img src={elipsecinza}/>
        <img src={elipsecinza}/>


        

      </div>


    </div>

  <p className="textodestaque"><b>Coleções em Destaque</b>  </p> <br/>

  <div className="colecoes">
    

    <div className="colecao1" >
      <strong> <p> 30% OFF</p></strong>
      <h2 className="colecaoh2">Novo Drop <br/> Supreme</h2>
      <button><b>Comprar</b></button>

      <img className="imgcolecao" src={blusasupreme}/>
    </div>


    <div className="colecao2" >
      <strong> <p> 30% OFF</p></strong>
      <h2 className="colecaoh2" >Coleção <br/> Adidas</h2>
      <button><b>Comprar</b></button>

      <img className="imgcolecao" src={sapatodestaque}/>
    </div>

    <div className="colecao3" >
      <strong> <p> 30% OFF</p></strong>
        <h2 class="colecaoh2" >Novo <br/> Beat Bass</h2>
        <button><b>Comprar</b></button>
        <img className="imgcolecao" src={headphonedestaque}/>
    </div>

  </div>


    <div className="topicoDestaque">

          <p className="textodestaque2"><b>Coleções em Destaque</b>  </p> <br/>
    </div>





</>
    )
  }
  
  export default PaginaInicial