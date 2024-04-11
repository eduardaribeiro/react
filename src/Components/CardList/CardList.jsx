import Card from "../Produto/Card"

 function CardList(){

const products = [

{
    id: 1,
    title: "product 1",
    description: "this is the description of product 1.",
    price: 19.99
},

{
    id:2, 
        title: "product 2",
        description:"this is the description of product 2.",
        price: 24.99
    },

{
    id:3, 
    title: "product 3",
    description:"this is the description of product 3.",
    price: 29.99
},
]


return(
    <>
    {products.map (product =>
    <Card 
    key={product.id}
    title={product.title}
    description={product.description}
    price={product.price}
    
    />     ) }
    
</>

)

}

export default CardList