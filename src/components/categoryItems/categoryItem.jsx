import React, { Component } from 'react';
import './item.css'

const CategoryItem = ({title, image}) => (
    <div className='categoryItem'>
        <span>{title}</span>
        <img src={image}/>
    </div>
)

export default CategoryItem