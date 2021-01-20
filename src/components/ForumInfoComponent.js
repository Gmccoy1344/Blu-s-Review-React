import React from 'react';
import { Card, CardBody, CardHeader, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderForumDescription({forum}){
    return(
        <div className="col-md">
            <Card>
                <CardHeader>
                    <h1>{forum.title}</h1>
                    <h3>{forum.author}</h3>
                    <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(forum.date)))}</p>
                </CardHeader>
                <CardBody>
                    <p>{forum.description}</p>
                </CardBody>
            </Card>
        </div>
    );
}

function ForumInfo(props) {
    if(props.forum){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.forum.title}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.forum.title}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderForumDescription forum = {props.forum} />
                </div>
            </div>
        );
    }

    return <div />
}

export default ForumInfo;