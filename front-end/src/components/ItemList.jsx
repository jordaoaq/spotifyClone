import React from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';

const ItemList = ({ title, items, itemsArray, path, idPath, style }) => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    let finalItems = isHome ? items : Infinity;

    return (
        <div className="item-list" style={style}>
            <div className='item-list__header'>
                <h2>{title} populares</h2>
                {isHome ? (
                    <Link className="item-list__link" to={path}>Mostrar tudo</Link>
                ) : null}
            </div>

            <div className="item-list__items">
                <div className='item-list__container'>
                    {itemsArray
                        .filter((curValue, index) => index < finalItems)
                        .map((curObj, index) => (
                            <SingleItem {...curObj} idPath={idPath} key={`${title}-${index}`} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;