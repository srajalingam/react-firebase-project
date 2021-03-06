import React from 'react';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Redirect} from 'react-router-dom';
import moment from 'moment'


const ProjectDetails=(props)=>{
    console.log(props);
    //const id= props.match.params.id;
    const {project,auth}=props;
    if(!auth.uid) return <Redirect to='/signin'/>

    if(project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by the {project.authorFirstName} {project.authorLastNmae}</div>
                        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                    </div>
                </div>
            </div>
        )

    }
    return(
        <div className="container center">
            <p>Loading project...</p>
        </div>
    )
}

const mapStateToprops=(state,ownprops)=>{
    //console.log(this.state);
    const id=ownprops.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects?projects[id]:null
    return{
        project:project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToprops),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails);
