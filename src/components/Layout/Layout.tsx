import React from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = (props: any) => {
    return (
        <div>
            <Navigation />
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;