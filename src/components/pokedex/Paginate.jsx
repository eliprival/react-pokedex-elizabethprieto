import React from "react";
import "./styles/paginate.css";

const Paginate = ({ page, setPage, totalPages }) => {
  const handleLess = (num) => {
    if (page > num) {
      setPage(page - num);
    } else {
      setPage(totalPages);
    }
  };

  const handlePlus = (num) => {
    if (page < totalPages - num) {
      setPage(page + num);
    } else {
      setPage(1);
    }
  };

  return (
    <div className="pokepages">
      <button
        onClick={() => {
          handleLess(30);
        }}
      >
        {"<<<"}
      </button>
      <button
        onClick={() => {
          handleLess(10);
        }}
      >
        {"<<"}
      </button>
      <button
        onClick={() => {
          handleLess(1);
        }}
      >
        {"<"}
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button
        onClick={() => {
          handlePlus(1);
        }}
      >
        {">"}
      </button>
      <button
        onClick={() => {
          handlePlus(10);
        }}
      >
        {">>"}
      </button>
      <button
        onClick={() => {
          handlePlus(30);
        }}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Paginate;
