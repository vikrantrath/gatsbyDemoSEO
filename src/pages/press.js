import React from "react"

import {Router} from '@reach/router'

import PressArticle from '../components/Press/pressArticle'

import "../styles/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"

export default function(props) {

    return (
        <Router>
            <PressArticle path="/press/:slug" />
        </Router>
    )
}
