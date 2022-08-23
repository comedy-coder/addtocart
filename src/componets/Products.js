import React from 'react'

const Products = ({state,dispatch}) => {
    const {products,cart} = state;
    console.log(cart)
  return (
    <div style={{display : "flex",
                flexWrap: "wrap",
                // flexDirection:"column",
                alignItems : "center",

                justifyContent: "space-evenly",
                width: "80%"
}}>{products.map(prod => {
    return <div key = {prod.id} 
                style={{display:"flex",
                padding:10,
                border:"1px solid grey",
                marginTop : 10,
                width:"30%",
                gap:10,
                flexDirection:"column",
        }}         
        >   <img src ={prod.thumbnail}
                alt = {prod.title}
                style={{height:200, objectFit : "cover"}}
                />
            <div style={{display:"flex",
                  justifyContent:"space-between"}}>
                <span> {prod.title}</span>
                <b>{prod.price}$</b>
            </div>
            {cart.some(p => p.id === prod.id) ? <button 
            style={{padding : 5,
            border : 0,
            borderRadius : 5,
            backgroundColor:"red",
            color:"white",
            }}
            onClick= { () => dispatch({
                type:"REMOVE_FROM_CART",
                payload :{
                    prod
                }
                  
            })}
               
            >Remove from Cart</button>
             : <button 
             style={{padding : 5,
             border : 0,
             borderRadius : 5,
             backgroundColor:"green",
             color:"white",
             }}
             onClick= { () => dispatch({
                type:"ADD_TO_CART",
                payload :{
                    id:prod.id,
                    title : prod.title,
                    thumbnail: prod.thumbnail,
                    price : prod.price
                }
            })}
             >Add to Cart</button> }
           
            </div>  

})}</div>
  )
}

export default Products