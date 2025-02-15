import React from 'react'
import Cart from './Cart'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const CartPage = () => {
    const navigate=useNavigate()
        const handleCheckout=()=>{
navigate('/checkout?step=2')
        }
    
    return (
        <div className="lg:grid lg:px-14 pb-8 mt-4 relative lg:grid-cols-3 space-x-1">

            <div className="col-span-2 pb-6">
                <div className="space-y-4">
                   {[1,1,1,1].map((item)=> <Cart />)}
                </div>
            </div>
            <div className="col-span-1  sticky top-0 px-5 lg:h-[100vh] lg:mt-0">
                <div className="border shadow-lg rounded-md  p-5">
                    <p className='font-semibold opacity-50 uppercase'> Price Details</p>
                    <hr className='my-2'/>
                    <div className="space-y-3 font-semibold pb-5">

                        <div className="flex justify-between ">
                            <span>Price</span>
                            <span>₹4999</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className='text-green-500'>-₹999</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span className='text-green-500'>free</span>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <span>Total </span>
                            <span className='text-green-500'>₹4999</span>
                        </div>
                    </div>
                    <Button onClick={handleCheckout} variant="contained" className='w-full' sx={{ px:"2.5rem",py:'.7rem',bgcolor:'#4f46e5'}} >Checkout</Button>
                </div>

            </div>

        </div>
    )
}

export default CartPage