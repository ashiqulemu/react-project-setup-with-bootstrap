

    import React from 'react';
    import {
        BrowserRouter as Router, 
        Link
    } from "react-router-dom";
    export default function Header() {
        return (
            <section>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to='/' class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
                                <Link to='/about' class="nav-item nav-link" href="#">About</Link>
                                <Link to='/team' class="nav-item nav-link" href="#">Team</Link>  
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        );
    }