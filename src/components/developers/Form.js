import React from 'react';

const DevelopersForm = ({ handleChange, handleSubmit, data }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Company Name</label>
        <input className="input" name="name" placeholder="Company Name" onChange={handleChange} value={data.name || ''}/>
        {data.errors.name && <small>{data.errors.name}</small>}
      </div>
      <div className="field">
        <label className="label">Company Size</label>
        <input className="input" name="size" placeholder="Company Size" onChange={handleChange} value={data.size || ''}/>
        {data.errors.size && <small>{data.errors.size}</small>}
      </div>
      <div className="field">
        <label className="label">Founded</label>
        <input className="input" type="date" name="founded" placeholder="Founded" onChange={handleChange} value={data.founded || ''} />
        {data.errors.founded && <small>{data.errors.founded}</small>}
      </div>
      <div className="field">
        <label className="label">Description</label>
        <input className="input" name="description" placeholder="Description" onChange={handleChange} value={data.description || ''}/>
        {data.errors.description && <small>{data.errors.description}</small>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="Image" onChange={handleChange} value={data.image || ''}/>
        {data.errors.image && <small>{data.errors.image}</small>}
      </div>
      <div className="field">
        <label className="label">Skills</label>
        <input className="input" name="skills" placeholder="Skills" onChange={handleChange} value={data.skills || ''}/>
        {data.errors.skills && <small>{data.errors.skills}</small>}
      </div>
      <div className="field">
        <label className="label">Location</label>
        <input className="input" name="location" placeholder="Location" onChange={handleChange} value={data.location || ''}/>
        {data.errors.location && <small>{data.errors.location}</small>}
      </div>



      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default DevelopersForm;
