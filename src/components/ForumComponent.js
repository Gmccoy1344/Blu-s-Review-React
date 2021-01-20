import React from 'react';
import { Card, CardBody, CardText, CardHeader, CardFooter, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderForum({forum}){
    return(
        <Card className="forum-card">
            <Link to={`/forum/${forum.id}`}>
                <CardHeader><img className="avatar" src={forum.avatar} alt="Random"/> {forum.title}</CardHeader>
            </Link>
            <CardBody>
                <CardText>
                   <h4>{forum.author}</h4> 
                </CardText>
            </CardBody>
            <CardFooter>
                <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(forum.date)))}</p>
            </CardFooter>
        </Card>
    );
};

function Forum(props){
    const forums = props.forums.map(forum => {
        return(
            <div key={forum.id} className="col-md-12 m-1">
                <RenderForum forum={forum}/>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Forums</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row card-row">
                {forums}
            </div>
        </div>
    )

}

export default Forum;