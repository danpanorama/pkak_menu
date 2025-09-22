// const dispatch = useDispatch();
// const orders = useSelector(state => state.order);

// const handleSubmitOrder = () => {
//   // 1. מציגים מצב loading
//   dispatch(startOrder());

//   // 2. שולחים את ההזמנה לרדיוסר של orderStatusSlice
//   // כאן אפשר גם לשלוח לשרת אמיתי אם יש
//   setTimeout(() => {
//     const orderData = {
//       id: Math.floor(Math.random() * 100000), // מספר הזמנה אקראי
//       eta: 20, // זמן משוער לדוגמה
//       items: orders.data,
//       totalPrice: orders.totalPrice,
//     };

//     // שולח את המידע לרדיוסר
//     dispatch(orderPending(orderData));

//     // שולח כל פריט גם לרדיוסר של order (אם צריך)
//     orders.data.forEach(item => {
//       dispatch(addOrderItem(item));
//     });

//   }, 1000); // לדוגמה עיכוב של 1 שניה
// };
