import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SingleFood = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [allReview, setAllReview] = useState([]);

  const { auth } = useContext(AuthContext);
  const data = useLoaderData();
  const addReview = () => {
    //console.log(auth.currentUser.displayName);
    fetch("http://localhost:5000/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        reviewId: data._id,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg);
      });
    setReview("");
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/review")
      .then((res) => res.json())
      .then((data) => setAllReview(data.reverse()));
  }, [review]);
  const PostReview = allReview.filter((dt) => dt.reviewId === id);
  //console.log(PostReview);
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
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="form-control"
              placeholder="Type Review..."
            ></input>
            <button onClick={addReview} className="btn btn-info my-2">
              Add
            </button>
            <Toaster />
            <div className="showReview my-3">
              {PostReview.length > 0
                ? PostReview.map((rv) => (
                    <div className="reviewList d-flex my-4">
                      <div className="avatar">
                        <img
                          src={
                            rv.photo
                              ? rv.photo
                              : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0="
                          }
                          alt=""
                        />
                      </div>
                      <div className="whatSay mt-3 mx-2">
                        <h6>{rv.name}</h6>
                        <small>{rv.review}</small>
                      </div>
                    </div>
                  ))
                : "No Review"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
