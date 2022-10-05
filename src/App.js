import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";

function App() {
  // the useState hook is a function that will always return an array. 
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  // The first item is the value of your state 
  // The second item is a setter, which allows you to set the state to something else.
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
        <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
        </Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
     
    </div>
  );
}

export default App;
