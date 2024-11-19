import axios from "axios";
import { createContext, useEffect, useState } from "react";

import toast, { Toaster } from 'react-hot-toast';


export let WishListContext = createContext()

export default function WishListContextProvider({ children }) {
    const [wishIlstItems, setWishIlstItems] = useState([])
    const [lsetNum,setListNum]=useState(0)
    function x( e){
        e.target.classList.add('text-main')
        console.log(e);
        
        }
    async function addToWishList(productId,e) {
      if(wishIlstItems !==null ){
        try{
          let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            productId:productId
          },
        {
          headers:{
            token:localStorage.getItem('userToken')
          }
        })
        console.log(data);
        e.target.classList.add('text-main')

        // getWishList()
        console.log(data.data.message);
            toast.success(data.message, {
                duration: 1000
        
              });
        
      
        }
        
        catch(err){
          console.log(err);
          toast.error(data?.data.message, {
            duration: 1000
      
          });
      
        }
      }
else{

}
      }
       
     async function getWishList() {
        try{
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
                {
                    headers:{
                        token:localStorage.getItem('userToken')
                    }
                }
            )
            console.log(data?.data);
            setWishIlstItems(data.data)
            console.log(wishIlstItems?.length);
            setListNum(wishIlstItems?.length)
            
        }
        catch(err){
            console.log(err);
            
        }
        
     } 
async function delet(Id) {
    try{
        let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${Id}`,
            {
                headers:{
                    token:localStorage.getItem('userToken')
                }
            }
        )
        console.log(data?.data);
        getWishList()
        // setWishIlstItems(data?.data)
        toast.success(data.message, {
            duration: 1000
    
          });

        
    }
    catch(err){
        console.log(err);
        toast.error(data.message, {
            duration: 1000
    
          });

    }
    
    
}
    return <WishListContext.Provider  value={{x,addToWishList,setListNum,lsetNum,getWishList, setWishIlstItems,delet ,wishIlstItems}}>
        {children}
    </WishListContext.Provider>



}