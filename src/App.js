import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all', ...new Set (items.map((item)=> item.category))];  //new set lọc những phần từ lặp lại chi trả về breakfast, lunch, shakes, thêm all
//console.log(allCategories);


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categorys) => { //Lọc category trong menuItems bằng với categorys
    if(categorys === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((menuItems) =>
      menuItems.category === categorys)
      setMenuItems(newItems);
  };

  return ( 
  <main>
    <section className= "menu section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      {/* Truyền biến filterItems sang bên Categories.js */}
      <Categories categories={categories} filterItems={filterItems}/> 
      <Menu items={menuItems}/>
    </section>
  </main>
  );}

export default App;
