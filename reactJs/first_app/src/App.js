import "./App.css";
import React, {useState, useRef, useEffect} from "react";
import ProductRow from "./components/ProductRow";
import ProductTotal from "./components/ProductTotal";

function App() {
  const [records, setRecords] = useState([
    {
      pName: "Tesla",
      pPrice: 200,
      index: 1,
    },
    {
      pName: "BMW",
      pPrice: 300,
    },
    {
      pName: "Audi",
      pPrice: 400,
    },
    {
      pName: "Audi2",
      pPrice: 500,
    },
  ]);

  const [newRecordName, setNewRecordName] = useState("");
  const [newRecordPrice, setNewRecordPrice] = useState(0.0);
  const recordNameRef = useRef(null);
  const recordPriceRef = useRef(null);
  const [total, setTotal] = useState(0);

  function getSum(total, num) {
    console.log(total, num);
    total = total + +num.pPrice;
    return total;
  }

  useEffect(() => setTotal(records.reduce(getSum, 0)), [records]);

  const addNewRecords = () => {
    setRecords([
      ...records,
      {
        pName: newRecordName,
        pPrice: newRecordPrice,
      },
    ]);
    clearForm();
    recordNameRef.current.focus();
  };

  const clearForm = () => {
    setNewRecordName("");
    setNewRecordPrice(0);
  };

  const handleEnterPressAtName = (e) => {
    if (e.code === "Enter") {
      recordPriceRef.current.focus();
    }
  };
  const handleEnterPressAtPrice = (e) => {
    if (e.code === "Enter") {
      addNewRecords();
    }
  };

  return (
    <div className="App">
      <div className="record-container">
        {records.map((r, index) => (
          <ProductRow product={r} index={index} />
        ))}
        <ProductTotal total={total} />
      </div>
      <div className="input-container">
        <div className="name-input">
          <input
            ref={recordNameRef}
            type="text"
            placeholder="Record Name"
            onKeyPress={handleEnterPressAtName}
            value={newRecordName}
            onChange={(newValue) => setNewRecordName(newValue.target.value)}
          />
        </div>
        <div className="price-input">
          <input
            type="number"
            ref={recordPriceRef}
            placeholder="Record Price"
            onKeyPress={handleEnterPressAtPrice}
            value={newRecordPrice}
            onChange={(newVal) => setNewRecordPrice(newVal.target.value)}
          />
        </div>
        <div className="record-submit">
          <button
            onClick={(e) => {
              addNewRecords();
            }}
          >
            <span>Add Record</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
