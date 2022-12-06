import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const SingleFood = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [reviewNo, setReviewNo] = useState("");
  const [allReview, setAllReview] = useState([]);

  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  // console.log(user);
  const addReview = () => {
    //console.log(auth.currentUser.displayName);
    fetch("https://server-gamma-ochre.vercel.app/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        reviewId: data._id,
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
        food: data.title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg);
      });
    setReview("");
  };
  const addReviewNo = () => {
    console.log(reviewNo);
  };
  useEffect(() => {
    fetch("https://server-gamma-ochre.vercel.app/api/review")
      .then((res) => res.json())
      .then((data) => setAllReview(data.reverse()));
  }, [addReview]);
  const PostReview = allReview.filter((dt) => dt.reviewId === id);
  //console.log(PostReview);
  return (
    <div className="container my-5">
      <h4>Details the {data.title}</h4>
      <hr />
      <div className="row mt-2 singleFood">
        <div className="col-md-7 card p-3">
          <h4>{data.title}</h4>
          <PhotoProvider>
            <PhotoView src={data.img}>
              <img src={data.img} class="card-img-top img-fluid" alt="food" />
            </PhotoView>
          </PhotoProvider>

          <h5>Price:{data.price} Tk</h5>
          <h5>Rating:{data.rating}</h5>
          <p>{data.longDes}</p>
          <button className="btn cartBtn">Add To Cart</button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className="reviewField">
            <div className="reviewBtn">
              {user ? (
                <div>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="form-control"
                    placeholder="Type Review..."
                  ></textarea>
                  <button onClick={addReview} className="btn btn-info my-2">
                    Add
                  </button>
                </div>
              ) : (
                <div>
                  <h4>
                    Please{" "}
                    <Link className="mx-1" to="/user/login">
                      Login
                    </Link>
                    to add a review
                  </h4>
                </div>
              )}
            </div>
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
      <div className="reviewOption my-5">
        <h4 className="mb-4">Give Your Review</h4>
        <select
          onChange={(e) => setReviewNo(e.target.value)}
          className="form-select w-50"
          aria-label="Default select example"
        >
          <option disabled selected>
            select Review
          </option>
          <option value="2">Two Star</option>
          <option value="3">Three Stat</option>
          <option value="4">Four Star</option>
          <option value="5">Five Star</option>
        </select>
        <button onClick={addReviewNo} className="btn btn-info my-2">
          Add
        </button>
      </div>
    </div>
  );
};

export default SingleFood;
