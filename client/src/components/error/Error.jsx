import React from 'react'
import * as BsIcons from 'react-icons/bs'
import './error.css'

const Error = () => {
  return (
    <div className='error-container'>
        <div className='error-icon'><BsIcons.BsFillFileExcelFill /></div>
        <h3 className='error-heading'>Card(s) not found...</h3>
        <p className='error-text'>Try adjusting your filters or broadening your search.</p>
    </div>
  )
}

export default Error