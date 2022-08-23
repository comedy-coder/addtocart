
import './App.css';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { cartReducer } from './Reducer/store';
import Products from './componets/Products';
import Cart from './componets/Cart';
function App() {
  const [state,dispatch] = useReducer(cartReducer,{
    products : [],
    cart : [],
  }) ;

  const fetchData = async () =>{
    const {data} = await axios.get('https://dummyjson.com/products')
      dispatch({
        type : "ADD",
        payload : data.products
      })
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="App" style={{
      display: "flex"
    }}>
        <Products state = {state} dispatch = {dispatch}/>
        <Cart state ={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
