import "./conteudo.css"

function Conteudo() {
  

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    

    for (let index = 0; index < data.results.length; index++) {
        console.log(data.results)
        let corpo = document.querySelector("#tableCorpo")
        let linha = document.createElement("tr")
        linha.innerHTML=`
                <th scope="row">${data.results[index].id}</th>
                <td><img src="${data.results[index].image}" alt=""></td>
                <td>${data.results[index].name}</td>
                <td>${data.results[index].species}</td>
                <td>${data.results[index].gender}</td>
                <td>${data.results[index].location.name}</td>
        
        `
        corpo.appendChild(linha)
    }
})
.catch(error => console.log(error))


    return (
      <>

      <div id="tableCorpo">


      </div>

     







        </>
    )
  }
  
  export default Conteudo
  