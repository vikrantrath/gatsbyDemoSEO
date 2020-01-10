import React from "react";
import PropTypes from "prop-types";
import Header from '../Base/Header';
import Footer from '../Base/Footer';
function Layout({ children }) {
    return (
        <body>
            {/* Navigation */}
            <Header />
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