import React from 'react';

class ProjectsNew extends React.Component {


  render() {
    return (
      <div className="columns">
        <div className="column">
          <form>
            <div className="field">
              <label className="projectName">Project Name</label>
              <input className="input" name="projectName" placeholder="Project Name" />
            </div>
            <div className="field">
              <label className="projectType">Project Type</label>
              <input className="input" name="projectType" placeholder="Project Type" />
            </div>
            <div className="field">
              <label className="projectBrief">Project Brief</label>
              <input className="input" name="projectBrief" placeholder="Project Brief" />
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
