import React from 'react'

const TopSinglepage = ({length}) => {
  return (
    <div className='flex justify-between items-center border-solid border-b-2 border-gray-200'>
              <p>{length} items</p>
              <div>
                <span>Sort by:</span><select className='border-solid ml-2  border-2 border-gray-200 p-2 focus:none'>

                  <option value="DEC">High to low</option>
                  <option value="INC">Low to high</option>

                </select>
              </div>

            </div>
  )
}

export default TopSinglepage