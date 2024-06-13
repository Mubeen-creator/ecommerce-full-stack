import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'
import { TiTick } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";



const SuccessPage = () => {
  return (
    <Container className='flex items-center justify-center py-20'>
        <div className='min-h-[400px] flex flex-col items-center justify-center gap-y-5'>
            <FcApproval  className='text-8xl'/>
            <h2 className='text-4xl font-bold'>Your Payment Accepted by shoppingMart.com</h2>
            <p>Now you can view Your orders or Continue Shopping with us.</p>
            <div className='flex items-center gap-x-5'>
                <Link href={'/order'}>
                    <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-600 duration-200">View Orders</button>
                </Link>
                <Link href={'/'}>
                    <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-orange-600 duration-200">Continue Shopping</button>
                </Link>
            </div>
        </div>
    </Container>
  )
}

export default SuccessPage