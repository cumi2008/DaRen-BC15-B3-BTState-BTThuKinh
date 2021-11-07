import React from "react";

export default function Card() {
  return (
    <div className="w-25">
      <div className="card bg-dark text-light">
        <img className="card-img-top" src="https://picsum.photos/id/1/200" alt />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  );
}
