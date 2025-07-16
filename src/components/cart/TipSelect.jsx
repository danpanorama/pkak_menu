import React, { useState } from "react";
import "../../css/tipSelect.css"; // נניח שזה קובץ CSS נפרד

const TipSelect = ({ onSelectTip }) => {
  const [selectedTip, setSelectedTip] = useState(null);
  const tipOptions = [8, 10, 12];

  const handleSelect = (tip) => {
    setSelectedTip(tip);
    if (onSelectTip) onSelectTip(tip);
  };

  return (
    <>
     <h3 className="tipHeader">
            תרצו להשאיר טיפ לברמן?
        </h3>
    <div className="tipSelect">
       
      {tipOptions.map((tip) => (
        <div
          key={tip}
          className={`tipBox ${selectedTip === tip ? "selected" : ""}`}
          onClick={() => handleSelect(tip)}
        >
          {tip}%
        </div>
      ))}
    </div></>
  );
};

export default TipSelect;
