import React from 'react';

import Layout from '../components/Base/Layout';
import SEO from '../components/Base/SEO';
import Home from '../components/Home/Home'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

export default function index() {
    return (
        <Layout >
            <SEO
                title={'sheer analytics'}
            />
            <Home />
        </Layout>
    )
}