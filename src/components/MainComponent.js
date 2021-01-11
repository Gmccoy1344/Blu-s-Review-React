import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
import ItemInfo from './ItemInfo';
import Contact from './ContactComponent';
import { ITEMS } from '../shared/Items';
import { REVIEWS } from '../shared/Reviews';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ITEMS,
            reviews: REVIEWS
        };
    }

    render() {
        const ItemWithId = ({match}) => {
            return (
                <ItemInfo
                    item={this.state.items.filter(item => item.id === +match.params.itemId)[0]}
                    review={this.state.reviews.filter(review => review.id === +match.params.itemId)[0]}
                />
            );
        };

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Directory items = {this.state.items} />} />
                    <Route path='/home/:itemId' component={ItemWithId} />
                    <Route path='/contactus' render={() => <Contact />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;