import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const MyReview = () => {
  const [allReview, setAllReview] = useState([]);
  const [editReview, seteditReview] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [editReviewId, setEditReviewId] = useState("");
  const { user } = useContext(AuthContext);

  const deleteReview = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/api/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg);
      });
  };
  const editReviewBtn = (id, RealReview) => {
    setEditForm(true);
    setEditReviewId(id);
    seteditReview(RealReview);
    // console.log(id, RealReview);
  };
  const reviewEditConfirm = () => {
    fetch(`http://localhost:5000/api/review/${editReviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ editReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg);
      });
    seteditReview("");
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/review")
      .then((res) => res.json())
      .then((data) => setAllReview(data.reverse()));
  }, [deleteReview, reviewEditConfirm]);
  const myReview = allReview.filter((dt) => dt.email === user?.email);

  return (
    <div className="container my-5">
      <h3>My Review</h3>
      <hr />
      <div className="editReviewForm my-3">
        {editForm && (
          <div className="div">
            <textarea
              value={editReview}
              className="form-control"
              onChange={(e) => seteditReview(e.target.value)}
              placeholder="Edit your review"
            ></textarea>
            <button onClick={reviewEditConfirm} className="btn btn-dark btn-sm">
              confirm
            </button>
          </div>
        )}
      </div>
      <div>
        {myReview.length > 0 ? (
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Food</th>
                <th scope="col">Review</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myReview &&
                myReview.map((mrv, idx) => (
                  <tr key={idx}>
                    <th scope="row">{mrv.food}</th>
                    <td>{mrv.review}</td>
                    <td>
                      <button
                        onClick={() => editReviewBtn(mrv._id, mrv.review)}
                        className="btn btn-info btn-sm"
                      >
                        edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteReview(mrv._id)}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                      <Toaster />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h3 className="text-center mt-5">No Review</h3>
        )}
      </div>
    </div>
  );
};

export default MyReview;
