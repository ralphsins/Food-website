import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {


    const [foods, setFoods] = useState(data);

    // filter by type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    const filterByPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12 '>
            <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>

            <div className='flex flex-col lg:flex-row justify-between '>
                {/* filter types */}
                <div>
                    <p className='font-bold text-gray-700 '>Filter Type</p>
                    <div className='flex flex-wrap justify-between'>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'
                            onClick={() => setFoods(data)}
                        >All</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'
                            onClick={() => filterType('burger')}>Burgers</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'
                            onClick={() => filterType('pizza')}>Pizza</button>
                        <button className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'
                            onClick={() => filterType('salad')}
                        >Salad</button>
                        <button onClick={() => filterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>Chicken</button>
                    </div>
                </div>


                {/* filter price*/}
                <div>
                    <p className='font-bold text-gray-700 '>Filter Price</p>
                    <div className='flex justify-between max-w-[390pc] w-full'>
                        <button  onClick={()=>filterByPrice('$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$</button>
                        <button onClick={()=>filterByPrice('$$')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$$</button>
                        <button  onClick={()=>filterByPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$$$</button>
                        <button  onClick={()=>filterByPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$$$$</button>
                    </div>
                </div>
            </div>


            {/* display foods */}
            <div className='grid gird-cols-2 lg: grid-cols-4 gap-6 pt-4'>
                {foods.map((food, i) => (
                    <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={i}>
                        <img src={food.image} alt={food.name}
                            className='object-cover w-full  h-[200px] rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{food.name}</p>
                            <p><span className='bg-orange-500 text-white p-1 rounded-full'>{food.price}</span></p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Food