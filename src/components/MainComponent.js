import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Directory from './DirectoryComponent';
import Footer from './FooterComponent';
import ItemInfo from './ItemInfo';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Forum from './ForumComponent';
import ForumInfo from './ForumInfoComponent';
import { ITEMS } from '../shared/Items';
import { REVIEWS } from '../shared/Reviews';
import { CAROUSEL } from '../shared/Carousel';
import { FORUMS } from '../shared/Forums';
import { RESPONSES } from '../shared/Responses';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ITEMS,
            reviews: REVIEWS,
            carousels: CAROUSEL,
            forums: FORUMS,
            responses: RESPONSES
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

        const ForumWithId = ({match}) => {
            return (
                <ForumInfo
                    forum={this.state.forums.filter(forum => forum.id === +match.params.forumId)[0]}
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
                    <Route path='/aboutus' render={() => <About items = {this.state.carousels}/>} />
                    <Route path='/forum' render={() => <Forum forums = {this.state.forums}/>} />
                    <Route path='/forum/:forumId' component={ForumWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;