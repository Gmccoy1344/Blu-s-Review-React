import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

function RenderDirectoryItem({item}){
    return(
        <Card>
            <CardImg width="100%" src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle className="col-md">{item.name}</CardTitle>
                <CardText>
                    <p>Ratings</p>
                </CardText>
            </CardBody>
        </Card>
    )
}

function Directory(props){
    const directory = props.items.map(item => {
        return(
            <div key={item.id} className="col-md-5 m-1 text-center">
                <RenderDirectoryItem item={item}/>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row card-row">
                {directory}
            </div>
        </div>
    )

}

export default Directory;