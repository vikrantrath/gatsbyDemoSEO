import React from 'react'
import Logo from '../../assets/sai_logo.png'
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div class="col-md-2">
                <img src={Logo} height="60px" href="#" className="navbar-brand" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse col-md-8 " id="navbarNav">
                <ul className="navbar-nav col-md-10 d-flex justify-content-between align-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#" >Tools</a>
                    </li>
                    <li className="nav-item offset-md-2 ">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div></li>
                </ul>
            </div>
        </nav >
    )
}