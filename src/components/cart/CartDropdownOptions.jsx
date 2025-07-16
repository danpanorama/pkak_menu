

// import { useState, useEffect } from "react";

// function CartDropdownOptions({ materialsArray = [], selectedChanges, setSelectedChanges, item }) {
//   const [changeOption, setChangeOption] = useState("noChanges");

//   const processedMaterials = materialsArray.map((m) => `ללא ${m.trim()}`);

//   useEffect(() => {
//     if (typeof item.extras === "string" && item.extras.trim()) {
//       const extrasArray = item.extras.split(",").map((m) => m.trim());
//       const formattedExtras = extrasArray.map((extra) => `ללא ${extra}`);
//       setSelectedChanges(formattedExtras);
//       setChangeOption("withChanges");
//     } else {
//       setSelectedChanges([]);
//       setChangeOption("noChanges");
//     }
//   }, [item.extras]);

//   const toggleChange = (value) => {
//     setSelectedChanges((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   return (
//     <div className="cartDropdown">
//       <div className="flex-col-right">
//         <label>
//           <input
//             type="radio"
//             className="radioI"
//             value="noChanges"
//             checked={changeOption === "noChanges"}
//             onChange={() => {
//               setChangeOption("noChanges");
//               setSelectedChanges([]);
//             }}
//           />
//           ללא שינויים
//         </label>

//         <label>
//           <input
//             type="radio"
//             className="radioI"
//             value="withChanges"
//             checked={changeOption === "withChanges"}
//             onChange={() => setChangeOption("withChanges")}
//           />
//           הוספת שינויים
//         </label>
//       </div>

//       {changeOption === "withChanges" && (
//         <div>
//           <p>בחר שינויים (אפשר כמה):</p>
//           {processedMaterials.map((opt, index) => (
//             <label key={index}>
//               <input
//                 type="checkbox"
//                 className="radioI"
//                 value={opt}
//                 checked={selectedChanges.includes(opt)}
//                 onChange={() => toggleChange(opt)}
//               />
//               {opt}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CartDropdownOptions;


import { useState, useEffect } from "react";

function CartDropdownOptions({ item, selectedChanges, setSelectedChanges }) {
  const [changeOption, setChangeOption] = useState("noChanges");

  // יצירת רשימת אפשרויות מתוך materials
  const allChangeOptions =
    typeof item.materials === "string"
      ? item.materials
          .split(",")
          .map((m) => `ללא ${m.trim()}`)
      : [];

  // אם item.extras הוא מערך, נשתמש בו כדי לקבוע שינויים קיימים
  useEffect(() => {
    if (Array.isArray(item.extras) && item.extras.length > 0) {
      setSelectedChanges(item.extras);
      setChangeOption("withChanges");
    } else {
      setSelectedChanges([]);
      setChangeOption("noChanges");
    }
  }, [item]);

  const toggleChange = (value) => {
    setSelectedChanges((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
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
              setSelectedChanges([]);
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
        <div className="dropdownRadio">
          <p>בחר שינויים (אפשר כמה):</p>
          {allChangeOptions.map((opt, index) => (
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
