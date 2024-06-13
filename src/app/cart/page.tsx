'use client'

import Container from "@/components/Container"
import { useDispatch, useSelector } from "react-redux"
import { StateProps } from "../../../type"
import CartItem from "@/components/CartItem"
import { resetCart } from "@/redux/shoppingSlice"
import PaymentForm from "@/components/PaymentForm"
import Link from "next/link"
import { FaShoppingCart } from 'react-icons/fa';


const CartPage = () => {

  const {productData} = useSelector((state: StateProps) => state?.shopping)
  const dispatch = useDispatch()

  return (
    <Container>
      {
        productData.length > 0 ? (<Container>
        <h2 className="text-2xl font-semibold mb-2">Cart</h2>
        <div className="flex flex-col gap-5">
          <CartItem />
          <div onClick={()=> dispatch(resetCart())} className="flex items-center justify-end">
            <button className="bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200">Reset Cart</button>
          </div>
          {/* Payment Form */}
          <PaymentForm />
        </div>
      </Container>) : (
         <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
         <FaShoppingCart className="w-24 h-24 text-orange-600 animate-bounce" />
         <h1 className="mt-4 text-2xl font-bold text-gray-800">Your Cart is Empty</h1>
         <p className="mt-2 text-gray-600">Looks like you have not added anything to your cart yet.</p>
         <Link href="/">
           <p className="mt-6 px-4 py-2 bg-darkText hover:bg-orange-600 text-white rounded-lg  duration-200">
             Return to Shop
           </p>
         </Link>
       </div>
        )
      }
    </Container>
  )
}

export default CartPage