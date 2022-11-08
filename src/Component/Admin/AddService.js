import React, { useState } from "react";

const AddService = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [longDes, setLongDes] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, title, shortDes, longDes, rating, price }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container my-5">
      <div>
        <h3>Add service</h3>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            placeholder="Add picture"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            className="form-control"
          />
          <input
            type="text"
            onChange={(e) => setShortDes(e.target.value)}
            value={shortDes}
            placeholder="Short description"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setLongDes(e.target.value)}
            value={longDes}
            placeholder="Long description"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            placeholder="Rationg"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
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
