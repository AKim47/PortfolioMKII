import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="link">Abel Kim</span>
                </a>
            </h2>
            <Navigation 
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            ></Navigation>
        </header>
    );
}

export default Header;