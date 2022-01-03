import React from "react";

export default function ProductTotal({total}) {
  return (
    <div className="record">
      <div className="record-name">
        <span>Total</span>
      </div>
      <div className="record-price">
        <span>{total}</span>
      </div>
    </div>
  );
}
