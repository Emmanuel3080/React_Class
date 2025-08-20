

import React, { createContext , useState } from 'react'
import { useParams } from 'react-router-dom';

export const singleContext = createContext()

const SingleProdutsContextProvider = ({children}) => {
  const {id} =  useParams()

    const [loading, setLoading] = useState(false);
      const [products, setSingleProducts] = useState();

      const fakeStoreUrl = import.meta.env.VITE_FAKESTORE;
      const url = `products/${id}`
      // console.log(fakeStoreUrl);
      
    
      const fetchSingleProducts = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${fakeStoreUrl}/${url}`);
          // console.log(res);
          
          const data = await res.json();
          // console.log(data);
          
          setSingleProducts(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      const singleValue = {
        fetchSingleProducts,
        loading,
        products
      }

      return (
        <singleContext.Provider value={singleValue}>{children}</singleContext.Provider>
      )

    }


  


export default SingleProdutsContextProvider