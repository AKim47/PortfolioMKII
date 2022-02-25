import React from 'react';

function Header() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="link">Abel Kim</span>
                </a>
            </h2>
        </header>
    );
}

export default Header;