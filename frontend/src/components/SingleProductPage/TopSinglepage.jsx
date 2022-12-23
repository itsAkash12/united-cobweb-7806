import React from 'react'

const TopSinglepage = ({length,handleOnchange}) => {
  return (
    <div className='flex justify-between items-center border-solid border-b-2 border-gray-200'>
              <p>{length} items</p>
              <div>
                <span>Sort by:</span><select onChange={handleOnchange} className='border-solid ml-2  border-2 border-gray-200 p-2 focus:none'>
<option value="">Sort by price</option>
                  <option value="DEC">High to low</option>
                  <option value="INC">Low to high</option>

                </select>
              </div>

            </div>
  )
}

export default TopSinglepage