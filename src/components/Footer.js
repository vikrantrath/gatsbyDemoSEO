import React from 'react'
export default function Header() {
    return (
        <footer className="page-footer bg-info font-small cyan darken-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic">
                                <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fa fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fa fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a className="pin-ic">
                                <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}