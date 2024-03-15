import React from 'react'

function Home() {
    const [last10Products,setLast10Products]= useState([])
    useEffect(() =>{
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(res=>setLastallProducts(res))


    })
  return (
    <>
    <h1>Anasayfa</h1>
    <h2>Ürünler</h2>
    <ul>
        {last10Products.map(product=><li key={product.id}>{product.name}</li>
        )}
    </ul>
    </>
   
  )
}

export default Home