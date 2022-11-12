import React from "react"


const _footer = () => {

  return(
    <div id='footer'> 
      <hr></hr>
      <div className="container-fluid">
        <div className="row">
            <div className="col-4" id="project-name">Scandiweb Project by - Adrian Dan</div>
            <div className="col-4" ><a id="cv-link" style={{display : 'none'}} href="">CV</a></div>
            <div className="col-4" ><a href="https://github.com/Armadox?tab=repositories"><img id="git-hub-logo" src={require('./githublogo.png')}/></a></div>
        </div>
      </div>
    </div>
  );
}

export default _footer;

