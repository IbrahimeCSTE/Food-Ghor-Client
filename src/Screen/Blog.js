import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.document.title = "FoodGhor-About";
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-danger my-2">Hot Topic</h2>
    </div>
  );
};

export default Blog;
