import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-2">
                        <h5>Links</h5>
                        <ul>
                            <li><Link to="/home"><i className="fa fa-home" />Home</Link></li>
                            <li><Link to="/forum"><i className="fa fa-comment" />Forum</Link></li>
                            <li><Link to="/aboutus"><i className="fa fa-info" />About</Link></li>
                            <li><Link to="/contactus"><i className="fa fa-address-card" />Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center socials">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/inu.blu"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:4693481647"><i className="fa fa-phone" /> 469-348-1647</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope" /> campsites@nucamp.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
