
import { useState,useEffect } from "react";

function CartDropdownOptions({ materialsArray = [], selectedChanges, setSelectedChanges,item }) {
  const [changeOption, setChangeOption] = useState("noChanges");

  const options = materialsArray.map((item) => `ללא ${item.trim()}`);

   // הפוך את materials למערך (אם הוא סטרינג)
  const materialsOptions =
    typeof item.materials === "string"
      ? item.materials.split(",").map((m) => `ללא ${m.trim()}`)
      : Array.isArray(item.materials)
        ? item.materials.map((m) => `ללא ${m.trim?.() || m}`)
        : [];

useEffect(() => {
  if (typeof item.extras === "string") {
    const extrasArray = item.extras.split(",").map((m) => m.trim());
    const formattedExtras = extrasArray.map((extra) => `ללא ${extra}`);
    setSelectedChanges(formattedExtras);
    setChangeOption("withChanges");
  }
}, [item.extras, setSelectedChanges]);


  const toggleChange = (value) => {
    setSelectedChanges((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="cartDropdown">
      <div className="flex-col-right">
        <label>
          <input
            type="radio"
            className="radioI"
            value="noChanges"
            checked={changeOption === "noChanges"}
            onChange={() => {
              setChangeOption("noChanges");
              setSelectedChanges([]); // אפס שינויים אם בחר "ללא שינויים"
            }}
          />
          ללא שינויים
        </label>

        <label>
          <input
            type="radio"
            className="radioI"
            value="withChanges"
            checked={changeOption === "withChanges"}
            onChange={() => setChangeOption("withChanges")}
          />
          הוספת שינויים
        </label>
      </div>

      {changeOption === "withChanges" && (
        <div className="">
          <p>בחר שינויים (אפשר כמה):</p>
       
          {materialsArray.map((opt, index) => (
            <label key={index}>
              <input
                type="checkbox"
                className="radioI"
                value={opt}
                checked={selectedChanges.includes(opt)}
                onChange={() => toggleChange(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartDropdownOptions;