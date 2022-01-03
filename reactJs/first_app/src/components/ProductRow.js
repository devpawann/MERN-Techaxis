import React from "react";

export default function ProductRow({product, index}) {
  return (
    <div key={product.pPrice} className="record">
      <div className="record-index">
        <span>{index + 1}</span>
      </div>
      <div className="record-name">
        <span>{product.pName}</span>
      </div>
      <div className="record-price">
        <span>{product.pPrice}</span>
      </div>
      <button
        className="record-btn"
        // onClick={(e) => {
        //   setRecords(records.filter((rec) => r.pName !== rec.pName));
        // }}
      >
        X
      </button>
    </div>
  );
}
