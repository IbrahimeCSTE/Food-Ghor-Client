import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container my-5">
      <h4>Details the {data.title}</h4>
      <hr />
      <div className="row mt-2 singleFood">
        <div className="col-md-7 card p-3">
          <h4>{data.title}</h4>
          <img src={data.img} className="img-fluid my-3" alt="" />
          <h5>Price:{data.price} Tk</h5>
          <h5>Rating:{data.rating}</h5>
          <p>{data.longDes}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className="reviewField">
            <input
              className="form-control"
              name=""
              placeholder="Type Review..."
            ></input>
            <button className="btn btn-info my-2">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
