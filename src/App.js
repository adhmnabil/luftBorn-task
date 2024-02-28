
import Seller from './Components/Seller/Seller';
import './App.css';
import Product from './Components/product/Product';
import { getResource } from './services/productService';
import { useEffect, useState } from 'react';
import { Navbar } from './Components/navbar/Navbar';


function App() {

  const [products, setProducts] = useState(null)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
   getResource(
    'https://fakestoreapi.com/products?limit=10',
    (success)=>{
      console.log(success)
      setProducts(success)
      setLoader(false)
    },
    (fail)=>{
      console.log(fail)
      setProducts(undefined)
    }
   )
  }, [])
  
  if(loader){
return <div className='loader'><img src='/Loader.svg' /></div>
  }else{
    return (
      <div>
        {
          products === undefined ? "Something went wrong":
          <>
        <Navbar />
        <div div className='app'>
        <Seller />
        <div className='products'>
        {
          products != null && 
          products.map((product , index)=>{
            return(
          <Product count={product.rating.count} category={product.category} price={product.price} desc={product.title}/>
            )
          })
        }
        </div>
        </div>
          </>
        }

      </div>
    );
  }

}

export default App;
