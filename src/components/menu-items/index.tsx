import React from 'react';

interface MenuItemsProps {
  number: number;
  step: string;
  title: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ number, step, title }) => {
  return (
    <div className="menu-items-container">
      <span className='number-item'>{number}</span>
      <span className='paragraf-container'>
        <p className='step-item'>{step}</p>
        <h3 className='title-item'>{title}</h3>
      </span>
    </div>
  );
}

export default MenuItems;
