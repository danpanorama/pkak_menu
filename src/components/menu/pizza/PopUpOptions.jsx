// import { useState } from "react";

// function PopUpOptions({ materialsArray = [] }) {
//   const [changeOption, setChangeOption] = useState("noChanges");
//   const [selectedChanges, setSelectedChanges] = useState([]);

//   const options = materialsArray.map((item) => `ללא ${item.trim()}`);

//   const toggleChange = (value) => {
//     setSelectedChanges((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   return (
//     <div className="popup-options">
//       {/* <h3>האם ברצונך לבצע שינויים?</h3> */}

//       <div className="flex-col-right">
//         <label>
//           <input
//             type="radio"
//             className="radioI"
//             value="noChanges"
//             checked={changeOption === "noChanges"}
//              onChange={() => {
//               setChangeOption("noChanges");
//               setSelectedChanges([]); // אפס שינויים אם בחר "ללא שינויים"
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
//         <div className="dropdown-checkboxes">
//           <p>בחר שינויים (אפשר כמה):</p>
//           {options.map((opt, index) => (
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

// export default PopUpOptions;


import { useState } from "react";

function PopUpOptions({ materialsArray = [], selectedChanges, setSelectedChanges }) {
  const [changeOption, setChangeOption] = useState("noChanges");

  const options = materialsArray.map((item) => `ללא ${item.trim()}`);

  const toggleChange = (value) => {
    setSelectedChanges((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="popup-options">
      <input type="radio" />
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
        <div className="dropdown-checkboxes">
          <p>בחר שינויים (אפשר כמה):</p>
          {options.map((opt, index) => (
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

export default PopUpOptions;

