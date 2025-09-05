// import { addItem, removeItem } from "../redux/reducers/orderReducer";

// // תמיד מוסיף אחד
// export const addToCart = (dispatch, item) => {
//   let price = item.price; // מחיר ברירת מחדל

//   if (item.size === "half") {
//     price = item.halfPrice || item.price / 2; // אפשר גם להשתמש במחיר מוכן
//   } else if (item.size === "third") {
//     price = item.thirdPrice || item.price / 3;
//   }

//   const cleanItem = {
//     ...item,
//     quantity: 1,
//     price,
//     Origin_Id: Date.now().toString() + Math.floor(Math.random() * 1000), // מזהה ייחודי
//   };

//   dispatch(addItem(cleanItem));
// };


// // תמיד מוריד אחד
// export const removeFromCart = (dispatch, item) => {
//   dispatch(removeItem(item));
// };


import { addItem, removeItem } from "../redux/reducers/orderReducer";

// תמיד מוסיף אחד
export const addToCart = (dispatch, item) => {
  let price = item.price;

  // עדכון לפי גודל הבירה
  if (item.size === "half") {
    price += 6; // חצי מוסיף 6
  } else if (item.size === "third") {
    // אם צריך, אפשר להוסיף גם כאן שינוי מחיר
  }

  // בדיקה אם יש צייסר
  if (item.deal?.name) {
    price += 10;
  }

  const cleanItem = {
    ...item,
    quantity: 1,
    price,
    Origin_Id: Date.now().toString() + Math.floor(Math.random() * 1000), // מזהה ייחודי
  };

  dispatch(addItem(cleanItem));
};

// תמיד מוריד אחד
export const removeFromCart = (dispatch, item) => {
  dispatch(removeItem(item));
};
