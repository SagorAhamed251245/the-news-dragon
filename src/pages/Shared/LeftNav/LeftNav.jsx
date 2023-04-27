import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const[categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className='text-start'>
            <h4>All categories</h4>
            <div className='text-black'>
                {categories.map(category => 
                    <p key={category.id}>  <Link to={`/categories/${category.id}`} className='text-decoration-none'>{category.name}</Link></p>
                )}
            </div>
        </div>
    );
};

export default LeftNav;