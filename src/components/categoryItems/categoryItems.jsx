import React, { Component } from 'react';
import CategoryItem from './categoryItem'
import './item.css'

const CategoryItems = ({items}) => (
    items.map(item => (
        <div className='border'>
            <CategoryItem title={item.title} image={item.image}/>
        </div>
        
    ))
)

export default CategoryItems