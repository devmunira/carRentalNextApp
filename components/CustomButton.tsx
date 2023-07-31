"use client";
import React from 'react'
import {CustomButtonProps} from './../types/index';

const CustomButton : React.FC < CustomButtonProps > = ({title, customStyles, handleClick, btnType }) => {
    return (
        <button
            type={btnType || 'button'}
            disabled={false}
            onClick={handleClick}
            className={`custom-btn ${customStyles}`}>
            <span className='flex-1'>{title}</span>
        </button>
    )
}

export default CustomButton