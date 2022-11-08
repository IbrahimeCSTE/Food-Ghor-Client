import React, { useState } from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <div>
        <h3>Add service</h3>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add picture"
            className="form-control my-2"
          />
          <input type="text" placeholder="Title" className="form-control" />
          <input
            type="text"
            placeholder="Short description"
            className="form-control my-2"
          />
          <input
            type="text"
            placeholder="Long description"
            className="form-control my-2"
          />
          <input
            type="text"
            placeholder="Rationg"
            className="form-control my-2"
          />
          <input
            type="text"
            placeholder="Price"
            className="form-control my-1"
          />
          <button className="btn btn-dark form-control my-1">
            Add service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
