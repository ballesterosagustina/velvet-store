import React from 'react';
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <ul>
                <li><Link to='/Productos'>Todo</Link></li>
                <li><Link to='/Category/Pantalones'>Pantalones y polleras</Link></li>
                <li><Link to='/Category/Remeras'>Remeras, tops y camisas</Link></li>
                <li><Link to='/Category/Vestidos'>Vestidos</Link></li>
            </ul>        
        </div>
    )
}

export default Categories;


