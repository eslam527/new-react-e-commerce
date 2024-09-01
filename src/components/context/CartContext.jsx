import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



export let CartContext = createContext()

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null)
  const [isLoading, setIsloading] = useState(true)
  
  async function addToCart(productId) {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        {
          headers: {
            token: localStorage.getItem('userToken')
          }
        }

      )
      console.log(data);
      toast.success(data.message, {
        duration: 1000

      });

    } catch (err) {
      // console.log(err);
      toast.error(data.message);

    }

  }
// في مشكله "infinty loop"
  async function getCart() {
    
    try {
      setIsloading(true)
      let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem('userToken')
          }
        }

      )
      // console.log(data);
      setCart(data)
        ;
      setIsloading(false)
    } catch (err) {
      setIsloading(true)
      // console.log(err);
      setIsloading(false)
    }

  }
  useEffect(() => {
    getCart()
  
    }, [])
  
  async function updateCart(productId, count) {
    if (count > 0) {
      try {
        setIsloading(true)

        let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
          {
            count

          },
          {
            headers: {
              token: localStorage.getItem('userToken')
            }
          }

        )
        console.log(data);
        setCart(data)
          ;
        toast.success(data.status, {
          duration: 1000

        });
        setIsloading(false)

      } catch (err) {
        setIsloading(true)

        console.log(err);
        toast.error(data.status, {
          duration: 1000

        });
        setIsloading(false)

      }
    } else {

      toast.error('pelcse dont remove the product.');

    }


  }
  async function removeCartItem(productId) {
    try {
      setIsloading(true)

      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers: {
            token: localStorage.getItem('userToken')
          }
        }

      )
      console.log(data);
      setCart(data)
        ;
      toast.success('Item Deleted', {
        duration: 1000

      });
      setIsloading(false)

    } catch (err) {
      setIsloading(true)

      console.log(err);
      toast.error(data.status, {
        duration: 1000

      });
      setIsloading(false)

    }


  }
  async function removeCart() {
    try {
      setIsloading(true)

      let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem('userToken')
          }
        }

      )
      console.log(data);
      setCart([])
        ;
      toast.success('Cart Deleted', {
        duration: 1000

      });
      setIsloading(false)

    } catch (err) {
      console.log(err);
      toast.error(data.status, {
        duration: 1000

      });

    }


  }
async function chechOut(shippingAddress) {
try{  let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart?.data._id}?url=http://localhost:5173`,{
  shippingAddress 
},
{
  headers: {
    token: localStorage.getItem('userToken')
  }
}
)

console.log(data.session.url);
window.location.href=data.session.url
}
catch(err){
  console.log(err);
  
}


}
// async function getOrder(id) {
//   try {
//     setIsloading(true)

//     let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/orders/user/${cart.data._id}`)
//     console.log(data);

//   } catch (err) {
//     console.log(err);

//   }


// }
  return <>
    <CartContext.Provider value={{
      setIsloading, addToCart, getCart,chechOut, cart, setCart, updateCart, removeCartItem, removeCart,isLoading
    }}>
      {children}
    </CartContext.Provider>


  </>
}