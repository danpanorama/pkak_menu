// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: [],
//   totalPrice: 0,
// };

// const calculateTotalPrice = (data) => {
//   return data.reduce((total, item) => {
//     const price = item.price || 0;
//     const quantity = item.quantity || 1;
//     return total + price * quantity;
//   }, 0);
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
    
//     addItem: (state, action) => {
//       const item = action.payload;
//       console.log(action.payload)
//       const existingIndex = state.data.findIndex(
//         (orderItem) =>
//           orderItem.name === item.name &&
//           orderItem.size === item.size &&
//           JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
//       );

//       const quantityToAdd = item.quantity && Number.isFinite(item.quantity) ? item.quantity : 1;

//       if (existingIndex >= 0) {
//         state.data[existingIndex].quantity += quantityToAdd;
//       } else {
//         state.data.push({ ...item, quantity: quantityToAdd });
//       }

//       state.totalPrice = calculateTotalPrice(state.data);
//     },

//     removeItem: (state, action) => {
//       const item = action.payload;
//       console.log(item)
//       const existingIndex = state.data.findIndex(
//         (orderItem) =>
//           orderItem.name === item.name &&
//           orderItem.size === item.size &&
//           JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(item.extras?.sort())
//       );

//       if (existingIndex >= 0) {
//         if (state.data[existingIndex].quantity > 1) {
//           state.data[existingIndex].quantity -= 1;
//         } else {
//           state.data.splice(existingIndex, 1);
//         }
//       }

//       state.totalPrice = calculateTotalPrice(state.data);
//     },

//     clearOrder: (state) => {
//       state.data = [];
//       state.totalPrice = 0;
//     },

//     updateItemQuantity: (state, action) => {
//       const { name, size, extras, quantity } = action.payload;
//       const existingIndex = state.data.findIndex(
//         (orderItem) =>
//           orderItem.name === name &&
//           orderItem.size === size &&
//           JSON.stringify(orderItem.extras?.sort()) === JSON.stringify(extras?.sort())
//       );
//       if (existingIndex >= 0 && quantity > 0) {
//         state.data[existingIndex].quantity = quantity;
//       }

//       state.totalPrice = calculateTotalPrice(state.data);
//     },
//   },
// });

// export const { addItem, removeItem, clearOrder, updateItemQuantity } = orderSlice.actions;
// export default orderSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalPrice: 0,
};

// חישוב מחיר כולל
const calculateTotalPrice = (data) => {
  return data.reduce((total, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);
};

// פונקציה להשוואת Extras באופן בטוח (למניעת sort על מערך ריאקטיבי)
const areExtrasEqual = (extrasA = [], extrasB = []) => {
  const sortedA = [...extrasA].sort();
  const sortedB = [...extrasB].sort();
  return JSON.stringify(sortedA) === JSON.stringify(sortedB);
};

// פונקציה להשוואת פריטים (name, size, extras)
const isSameItem = (a, b) => {
  return (
    a.name === b.name &&
    a.size === b.size &&
    areExtrasEqual(a.extras, b.extras)
  );
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // ✅ הוספת פריט
    addItem: (state, action) => {
      const item = action.payload;
      const quantityToAdd =
        item.quantity && Number.isFinite(item.quantity) ? item.quantity : 1;

      const existingIndex = state.data.findIndex((orderItem) =>
        isSameItem(orderItem, item)
      );

      if (existingIndex >= 0) {
        state.data[existingIndex].quantity += quantityToAdd;
      } else {
        state.data.push({ ...item, quantity: quantityToAdd });
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    // ✅ הסרת פריט
    removeItem: (state, action) => {
      const item = action.payload;
      const existingIndex = state.data.findIndex((orderItem) =>
        isSameItem(orderItem, item)
      );

      if (existingIndex >= 0) {
        if (state.data[existingIndex].quantity > 1) {
          state.data[existingIndex].quantity -= 1;
        } else {
          state.data.splice(existingIndex, 1);
        }
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },

    // ✅ ניקוי העגלה
    clearOrder: (state) => {
      state.data = [];
      state.totalPrice = 0;
    },

    // ✅ פעולה לעדכון Extras של פריט קיים
updateItemExtras: (state, action) => {
  const { name, size, oldExtras, newExtras } = action.payload;

  const existingIndex = state.data.findIndex((orderItem) =>
    isSameItem(orderItem, { name, size, extras: oldExtras })
  );

  if (existingIndex >= 0) {
    state.data[existingIndex].extras = newExtras;
  }

  state.totalPrice = calculateTotalPrice(state.data);
}
,

    // ✅ עדכון כמות ידני
    updateItemQuantity: (state, action) => {
      const { name, size, extras, quantity } = action.payload;

      const existingIndex = state.data.findIndex((orderItem) =>
        isSameItem(orderItem, { name, size, extras })
      );

      if (existingIndex >= 0 && quantity > 0) {
        state.data[existingIndex].quantity = quantity;
      }

      state.totalPrice = calculateTotalPrice(state.data);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearOrder,
  updateItemQuantity,
  updateItemExtras
} = orderSlice.actions;

export default orderSlice.reducer;
