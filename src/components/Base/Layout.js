import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from './header';
import Footer from './footer';

function Layout({ children }) {
    return (
        <body>
            {/* Navigation */}
            <Header/>

            {children}

            {/* Footer */}
            <Footer />
        </body>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;