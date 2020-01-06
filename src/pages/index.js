import React from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

export default function index() {
    return (
        <div className="container-fluid">
            <Header />
            <SEO
                title={'sheer analytics'}
            />
            <Footer />
        </div>
    )
}