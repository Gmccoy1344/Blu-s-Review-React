import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';

function RenderItem({item}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={item.image} alt={item.name}/>
                <CardBody>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderReview({review}) {
    if(review){
        return(
            <div className="col-md-5 text-center">
                <h4 className="text-center">Review</h4>
                <p>{review.review}</p>

                <h5 className="text-center p-5">Rating: {review.rating}</h5>
                <a href="https://www.chewy.com/frisco-muscle-plush-squeaking-wolf/dp/173923"><Button color="primary" outline>Go to site</Button></a>
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