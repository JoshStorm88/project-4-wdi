import React from 'react';

class ProjectsNew extends React.Component {


  render() {
    return (
      <div className="columns">
        <div className="column">
          <form>
            <div className="field">
              <label className="projectName">Name of Project</label>
              <input className="input" name="nameOfProject" placeholder="ProjectName" />
            </div>
            <div className="field">
              <label className="description">Description</label>
              <input className="input" name="description" placeholder="Description" />
            </div>
            <div className="field">
              <label className="skillsRequired">Skills Required</label>
              <input className="input" name="skillsRequired" placeholder="Skills Required"/>
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


export default ProjectsNew;
