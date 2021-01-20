import React from 'react';
import {Card, CardImg, CardTitle, CardBody, Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({item}){
    return(
        <Card>
            <CardImg className="d-block w-100" width="100%" src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle className="col-md">{item.name}</CardTitle>
                <CardFooter>
                    <Link to={`/home/${item.id}`}>
                        <Button color="info" >Review</Button>{' '}
                    </Link>
                </CardFooter>
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