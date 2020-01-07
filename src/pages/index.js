import React from 'react'
import SEO from '../components/SEO'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Layout from '../components/Layout'

export default function index() {
    return (
        <Layout >
            <SEO
                title={'sheer analytics'}
            />
        </Layout>
    )
}