"use client"
import React , {useState} from 'react'
import { CustomAutoSelect } from '.'

const SearchArea = () => {
  //Get Manufecturaer State for Search by manufecture
  const [manufecturer, setmanufecturer] = useState('')
  console.log(manufecturer , 'manufecturer')
  return (
    <form className='searchbar'>
        <div className='searchbar__item'>
            <CustomAutoSelect
            manufecturer={manufecturer}
            setmanufecturer={setmanufecturer}
            ></CustomAutoSelect>
        </div>
    </form>
  )
}

export default SearchArea