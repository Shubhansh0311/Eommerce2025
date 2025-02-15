import { Button, colors, IconButton } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Cart = () => {
    return (
        <div className="shadow-lg p-4 border rounded-md ">
            <div className="flex item-center">
                <div className="sm:w-[5rem] sm:h-[5rem]  lg:w-[9rem] lg:h-[9rem] ">
                    <img src="https://i.ibb.co/jPy4X8B5/cart2.jpg" className='w-[140px]  h-full object-cover object-top' alt="" />
                </div>
                <div className="ml-5 space-y-1 mt-3">
                    <p className='font-semibold'>Ralph Lauren Classic</p>
                    <p className='opacity-50 font-semibold'>Size : L , White</p>
                    <p className=' opacity-50'>Seller: Van huessen</p>
                    <div className="flex space-x-3 mt-2">
                        <p className=' font-semibold '>₹1599</p>
                        <p className='line-through opacity-50'>₹3199</p>
                        <p className='text-green-500'>50% off</p>
                    </div>

                </div>
            </div>
            <div className="flex items-center  lg:space-x-10 pt-2">
                <div className="flex items-center">
                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <span className='px-7 py-1 border rounded-md' >2</span>
                    <IconButton sx={{ color: '#7337ab' }}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                </div>
                <Button sx={{ color: '#7337ab' }}>
                    Remove
                </Button>
            </div>
        </div>
    )
}

export default Cart