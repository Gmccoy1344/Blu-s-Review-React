import { Card, CardImg, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';

function RenderItem({item}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={item.image} alt={item.name}/>
                <CardBody>
                    <h4 className="border text-center border-dark">Description</h4>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderRating({rating}){
    switch(rating){
        case 1:
            return(
                <i className="fa fa-paw" />
            );
        case 2:
            return(
                <React.Fragment><i className="fa fa-paw"/><i className="fa fa-paw"/></React.Fragment>
            );
        case 3:
            return(
                <React.Fragment><i className="fa fa-paw"/><i className="fa fa-paw"/><i className="fa fa-paw"/></React.Fragment>
            );
        case 4:
            return(
                <React.Fragment><i className="fa fa-paw"/><i className="fa fa-paw"/><i className="fa fa-paw"/><i className="fa fa-paw"/></React.Fragment>
            );
        case 5:
            return(
                <React.Fragment><i className="fa fa-paw"/><i className="fa fa-paw"/><i className="fa fa-paw"/><i className="fa fa-paw"/><i className="fa fa-paw"/></React.Fragment>
            );
        default:
            return(
                <div />
            );
    }
};

function RenderReview({review}) {
    if(review){
        return(
            <div className="col-md-5 text-center">
                <Card>
                    <CardBody className="review-card">
                        <h4 className="text-center">Review</h4>
                        <p>{review.review}</p>

                        <h5 className="text-center m-5 p-2 border-top border-dark">Rating: <RenderRating rating = {review.rating}/></h5>
                    </CardBody>
                    <CardFooter>
                        <a href={review.link}><Button color="info">Go to site</Button></a>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return <div />
}

function ItemInfo(props) {
    if(props.item){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.item.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.item.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderItem item={props.item} />
                    <RenderReview review={props.review} />
                </div>
            </div>
        );
    }

    return <div />
}

export default ItemInfo;