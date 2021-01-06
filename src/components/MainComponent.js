import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
import { ITEMS } from '../shared/Items';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ITEMS
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Directory items = {this.state.items} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;