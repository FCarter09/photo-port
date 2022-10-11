import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
      };

    // the useEffect hook triggers a re-render on a variable value change
    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory);
    //   }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> {""} 📸</span>{""} Oh Snap!
                </a>
            </h2>
            <nav>
             <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about">
                    About me
                    </a>
                </li>
                <li>
                    <span onClick={() => handleClick('Contact')}>Contact</span>
                </li>
                {categories.map((category) => (
                <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                    <span onClick={() => {setCurrentCategory(category); }}>
                       {capitalizeFirstLetter(category.name)}
                    </span>
               </li>
               ))}
             </ul>
            </nav>
        </header>
        
    );
}

export default Nav;