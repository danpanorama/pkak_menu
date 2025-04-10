
// import Image1 from '../images/resize/ayagivesalad.jpg'
// import Image2 from '../images/resize/sweets.jpg'
// import Image3 from '../images/resize/ayadan.jpg'
// import Image4 from '../images/resize/ayaeatpizza22.jpg'
// import Image5 from '../images/resize/ayagivesalad.jpg'
// import Image6 from '../images/resize/sweets.jpg'
// import Image7 from '../images/resize/ayadan.jpg'
// import Image8 from '../images/resize/ayaeatpizza22.jpg'
// export const menu = {
//     food: [
//       {
//         pizza: {
//           image:Image4,
//           items: [
//             {
//               name: "מרגריטה",
//               description: "פיצה מרגריטה רוטב עגבניות עם בזיליקום",
//               materials: "מוצרלה, רוטב עגבניות, בזיליקום, פרמזן",
//               price: 60,
//               vegan: 0,
//               category: "pizza",
//               extras: [],
//             },
//             {
//               name: "מרגריטה טבעונית",
//               description: "פיצה מרגריטה טבעונית עם רוטב עגבניות",
//               materials:
//                 "מוצרלה טבעונית מגורדת, רוטב עגבניות, בזיליקום, פרמזן טבעוני",
//               vegan: 1,
//               price: 62,
//               category: "pizza",
//               extras: [],
//             },
//             {
//               name: "פונגי",
//               description: "",
//               materials:
//                 "מוצרלה, רוטב 3 גבינות, בטטה, גבינת פטה, בצל ירוק, עלי רוקט, ",
//               vegan: 0,
//               price: 66,
//               category: "pizza",
//               extras: [],
//             },
//             {
//               name: "ביאנקה",
//               description: "",
//               materials: "",
//               vegan: 0,
//               price: "",
//               category: "pizza",
//               extras: [],
//             },
//           ],
//         },
  
//         noPizza: {
//           image: Image2,
//           items: [
//             {
//               name: "סלט עלים ופלפלים",
//               description: "",
//               materials: "",
//               comments: "",
//               category: "salads",
//               price: 49,
//             },
//             {
//               name: "סלט עלים ופטריות",
//               description: "",
//               materials: "",
//               comments: "",
//               category: "salads",
//               price: 47,
//             },
//           ],
//         },
  
//         sweets: {
//           image:Image3,
//           items: [
//             {
//               name: "מאפה שוקולד",
//               price: 39,
//             },
//           ],
//         },
  
//         sides: {
//           image: Image1,
//           items: [
//             {
//               name: "נאצוס וסלסה",
//               price: 34,
//             },
//           ],
//         },
//       },
//     ],
  
//     drinks: {
//       draftBeer: {
//         title: 'מהחבית',
//         img: Image1,
//         items: [
//           {
//             name: 'סטלה ארטואה',
//             price: 18,
//             alcoholPercent: '5.0%',
//             origin: 'בלגיה',
//             tasteNotes: 'מרירות עדינה, גוף קל',
//             pairing: 'פיצות, סלטים',
//             category: 'lager',
//             volume: '500ml',
//             description: 'לאגר בלגית קלאסית עם איזון מושלם בין רעננות למרירות',
//             image: '', 
//             countryImage: '', 
//           },
//           {
//             name: 'באדוויזר',
//             price: 18,
//             alcoholPercent: '5.0%',
//             origin: 'ארה"ב',
//             tasteNotes: 'קלילה, מעט מתקתקה',
//             pairing: 'בורגרים, חטיפים',
//             category: 'lager',
//             volume: '500ml',
//             description: 'לאגר אמריקאית פופולרית, מתאימה לכל אירוע',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'מכבי',
//             price: 18,
//             alcoholPercent: '5.0%',
//             origin: 'ישראל',
//             tasteNotes: 'גוף בינוני, טעם חיטה',
//             pairing: 'מאפים, זיתים',
//             category: 'lager',
//             volume: '500ml',
//             description: 'הבחירה המקומית המובילה. קלאסית ישראלית!',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
    
//       bottleBeer: {
//         title: 'בבקבוק',
//         img: Image2,
//         items: [
//           {
//             name: 'היינקן',
//             price: 20,
//             alcoholPercent: '5.0%',
//             origin: 'הולנד',
//             tasteNotes: 'מרירות עדינה, רעננה',
//             pairing: 'פיצה, סלט ירוק',
//             category: 'lager',
//             volume: '330ml',
//             description: 'בירה הולנדית מפורסמת, בטעם נקי ומרענן',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'גולדסטאר',
//             price: 19,
//             alcoholPercent: '4.9%',
//             origin: 'ישראל',
//             tasteNotes: 'כהה, קרמלית',
//             pairing: 'בשרים, גבינות קשות',
//             category: 'dark lager',
//             volume: '330ml',
//             description: 'לאגר ישראלית כהה, גוף מלא ועשיר בטעם',
//             image: '',
//             countryImage: '',
//           }
//         ]
//       },
    
//       liteDrinks: {
//         title: 'משקאות קלים',
//         img: Image3,
//         items: [
//           {
//             name: 'קולה',
//             price: 10,
//             alcoholPercent: '0%',
//             origin: 'ישראל',
//             tasteNotes: 'טעם מתוק ומרענן',
//             pairing: 'בורגרים, פיצות',
//             category: 'soft drink',
//             volume: '500ml',
//             description: 'קולה קלאסית עם טעם מתוק ומרענן',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'ספרייט',
//             price: 10,
//             alcoholPercent: '0%',
//             origin: 'ישראל',
//             tasteNotes: 'חמצמץ ומרענן',
//             pairing: 'פיצות, סלטים',
//             category: 'soft drink',
//             volume: '500ml',
//             description: 'משקה לימון חמצמץ ומרענן',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
    
//       chasers: {
//         title: 'משקאות מלוויים',
//         img: Image4,
//         items: [
//           {
//             name: 'תפוזים',
//             price: 12,
//             alcoholPercent: '0%',
//             origin: 'ישראל',
//             tasteNotes: 'חמימות ומתוקה',
//             pairing: 'ויסקי, רום',
//             category: 'juice',
//             volume: '200ml',
//             description: 'מיץ תפוזים טבעי, עשוי מתפוזים טריים',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'לימונדה',
//             price: 12,
//             alcoholPercent: '0%',
//             origin: 'ישראל',
//             tasteNotes: 'חמצמץ ומרענן',
//             pairing: 'וודקה, ג’ין',
//             category: 'juice',
//             volume: '200ml',
//             description: 'לימונדה מתוקה וחמצמצה',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
    
//       drinks: {
//         title: 'שתייה חמה',
//         img: Image5,
//         items: [
//           {
//             name: 'קפה הפוך',
//             price: 15,
//             alcoholPercent: '0%',
//             origin: 'ישראל',
//             tasteNotes: 'עשיר, קרמי',
//             pairing: 'עוגות, מאפים',
//             category: 'coffee',
//             volume: '200ml',
//             description: 'קפה חם עם חלב מוקצף',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'תה ירוק',
//             price: 12,
//             alcoholPercent: '0%',
//             origin: 'סין',
//             tasteNotes: 'מריר וטעים',
//             pairing: 'קצת דבש, מאפים',
//             category: 'tea',
//             volume: '200ml',
//             description: 'תה ירוק עשיר ומרענן',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
    
//       premium: {
//         title: 'משקאות פרימיום',
//         img: Image6,
//         items: [
//           {
//             name: 'ג’ין מותג פרימיום',
//             price: 50,
//             alcoholPercent: '40%',
//             origin: 'אנגליה',
//             tasteNotes: 'חמימות, צמחי תיבול',
//             pairing: 'טוניק, פירות',
//             category: 'gin',
//             volume: '700ml',
//             description: 'ג’ין איכותי, תוצרת אנגליה',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'וויסקי 18 שנה',
//             price: 120,
//             alcoholPercent: '43%',
//             origin: 'סקוטלנד',
//             tasteNotes: 'עשיר, מעושן',
//             pairing: 'בשרים, גבינות יוקרתיות',
//             category: 'whiskey',
//             volume: '700ml',
//             description: 'וויסקי סקוטי מעושן ובוגר',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
    
//       wine: {
//         title: 'יין',
//         img: Image7,
//         items: [
//           {
//             name: 'קברנה סובניון',
//             price: 45,
//             alcoholPercent: '13%',
//             origin: 'ישראל',
//             tasteNotes: 'עשיר, פירות יער',
//             pairing: 'סטייקים, גבינות',
//             category: 'red wine',
//             volume: '750ml',
//             description: 'יין אדום עשיר בטעמים עם גוף מלא',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'שרדונה',
//             price: 40,
//             alcoholPercent: '12%',
//             origin: 'ישראל',
//             tasteNotes: 'פירותי, רענן',
//             pairing: 'דגים, סלטים',
//             category: 'white wine',
//             volume: '750ml',
//             description: 'יין לבן פירותי ורענן',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
    
//       bottleWine: {
//         title: 'יין בבקבוק',
//         img: Image8,
//         items: [
//           {
//             name: 'מרלו',
//             price: 60,
//             alcoholPercent: '14%',
//             origin: 'צרפת',
//             tasteNotes: 'פירותי, עשיר',
//             pairing: 'סטייקים, פסטה',
//             category: 'red wine',
//             volume: '750ml',
//             description: 'יין אדום פירותי ומפנק',
//             image: '',
//             countryImage: '',
//           },
//           {
//             name: 'סוביניון בלאן',
//             price: 55,
//             alcoholPercent: '13%',
//             origin: 'ניו זילנד',
//             tasteNotes: 'חמצמץ, רענן',
//             pairing: 'פירות ים, סלטים',
//             category: 'white wine',
//             volume: '750ml',
//             description: 'יין לבן חמצמץ ומרענן',
//             image: '',
//             countryImage: '',
//           },
//         ]
//       },
//     },
  
//     deals: [],
//   };
  
//   export const extrasForPizza = [
//     {
//       name: "מיקס זיתים",
//       vegan: 0,
//       price: 6,
//       comment: "",
//     },
//     {
//       name: "פטה",
//       vegan: 0,
//       price: 8,
//       comment: "",
//     },
//   ];
import Image1 from '../images/resize/ayabottle1.jpg'
import Image2 from '../images/resize/ayawine1.jpg'
import Image3 from '../images/resize/sweets.jpg'
 import Image4 from '../images/resize/kaprezasalad1.jpg'
 import Image5 from '../images/resize/fongipizza1.jpg'
 import Image6 from '../images/resize/danarak3.jpg'
 import Image7 from '../images/resize/ayadan.jpg'
 import Image8 from '../images/resize/ayabeer.jpg'
export const menu = [
  {
    category: 'פיצה',
    image: Image5,
    items: [
      {
        name: "מרגריטה",
        description: "פיצה מרגריטה רוטב עגבניות עם בזיליקום",
        materials: "מוצרלה, רוטב עגבניות, בזיליקום, פרמזן",
        price: 60,
        vegan: false,
        extras: [],
      },
      {
        name: "מרגריטה טבעונית",
        description: "פיצה מרגריטה טבעונית עם רוטב עגבניות",
        materials: "מוצרלה טבעונית מגורדת, רוטב עגבניות, בזיליקום, פרמזן טבעוני",
        price: 62,
        vegan: true,
        extras: [],
      },
      {
        name: "פונגי",
        description: "",
        materials: "מוצרלה, רוטב 3 גבינות, בטטה, גבינת פטה, בצל ירוק, עלי רוקט",
        price: 66,
        vegan: false,
        extras: [],
      },
      {
        name: "ביאנקה",
        description: "",
        materials: "",
        price: "",
        vegan: false,
        extras: [],
      },
    ],
  },
  {
    category: 'לא פיצה',
    image: Image4,
    items: [
      {
        name: "סלט עלים ופלפלים",
        price: 49,
        description: "",
        vegan: true,
      },
      {
        name: "סלט עלים ופטריות",
        price: 47,
        description: "",
        vegan: true,
      },
    ],
  },
  {
    category: 'קינוחים',
    image: Image3,
    items: [
      {
        name: "מאפה שוקולד",
        price: 39,
        description: "",
      },
    ],
  },
  // {
  //   category: 'תוספות',
  //   image: Image1,
  //   items: [
  //     {
  //       name: "נאצוס וסלסה",
  //       price: 34,
  //       description: "",
  //     },
  //   ],
  // },
  {
    category: 'בריה',
    title: 'מהחבית',
    image: Image8,
    items: [
      {
        name: 'סטלה ארטואה',
        price: 18,
        alcoholPercent: '5.0%',
        origin: 'בלגיה',
        tasteNotes: 'מרירות עדינה, גוף קל',
        pairing: 'פיצות, סלטים',
        volume: '500ml',
        description: 'לאגר בלגית קלאסית עם איזון מושלם בין רעננות למרירות',
      },
      {
        name: 'באדוויזר',
        price: 18,
        alcoholPercent: '5.0%',
        origin: 'ארה"ב',
        tasteNotes: 'קלילה, מעט מתקתקה',
        pairing: 'בורגרים, חטיפים',
        volume: '500ml',
        description: 'לאגר אמריקאית פופולרית, מתאימה לכל אירוע',
      },
      {
        name: 'מכבי',
        price: 18,
        alcoholPercent: '5.0%',
        origin: 'ישראל',
        tasteNotes: 'גוף בינוני, טעם חיטה',
        pairing: 'מאפים, זיתים',
        volume: '500ml',
        description: 'הבחירה המקומית המובילה. קלאסית ישראלית!',
      },
    ],
  },
  {
    category: ' בירה בקבוק',
    title: 'בבקבוק',
    image: Image1,
    items: [
      {
        name: 'היינקן',
        price: 20,
        alcoholPercent: '5.0%',
        origin: 'הולנד',
        tasteNotes: 'מרירות עדינה, רעננה',
        pairing: 'פיצה, סלט ירוק',
        volume: '330ml',
        description: 'בירה הולנדית מפורסמת, בטעם נקי ומרענן',
      },
      {
        name: 'גולדסטאר',
        price: 19,
        alcoholPercent: '4.9%',
        origin: 'ישראל',
        tasteNotes: 'כהה, קרמלית',
        pairing: 'בשרים, גבינות קשות',
        volume: '330ml',
        description: 'לאגר ישראלית כהה, גוף מלא ועשיר בטעם',
      },
    ],
  },
  {
    category: 'משקאות פרימיום',
    title: 'פרימיום',
    image: Image6,
    items: [
      {
        name: 'ג’ין מותג פרימיום',
        price: 50,
        alcoholPercent: '40%',
        origin: 'אנגליה',
        tasteNotes: 'חמימות, צמחי תיבול',
        pairing: 'טוניק, פירות',
        volume: '700ml',
        description: 'ג’ין איכותי, תוצרת אנגליה',
      },
      {
        name: 'וויסקי 18 שנה',
        price: 120,
        alcoholPercent: '43%',
        origin: 'סקוטלנד',
        tasteNotes: 'עשיר, מעושן',
        pairing: 'בשרים, גבינות יוקרתיות',
        volume: '700ml',
        description: 'וויסקי סקוטי מעושן ובוגר',
      },
    ],
  },
  {
    category: 'יין',
    title: 'יין אדום ולבן',
    image: Image2,
    items: [
      {
        name: 'קברנה סובניון',
        price: 45,
        alcoholPercent: '13%',
        origin: 'ישראל',
        tasteNotes: 'עשיר, פירות יער',
        pairing: 'סטייקים, גבינות',
        volume: '750ml',
        description: 'יין אדום עשיר בטעמים עם גוף מלא',
      },
      {
        name: 'שרדונה',
        price: 40,
        alcoholPercent: '12%',
        origin: 'ישראל',
        tasteNotes: 'פירותי, רענן',
        pairing: 'דגים, סלטים',
        volume: '750ml',
        description: 'יין לבן פירותי ורענן',
      },
    ],
  },
  {
    category: 'יין בבקבוק',
    title: 'יין בבקבוק',
    image: Image8,
    items: [
      {
        name: 'מרלו',
        price: 60,
        alcoholPercent: '14%',
        origin: 'צרפת',
        tasteNotes: 'פירותי, עשיר',
        pairing: 'סטייקים, פסטה',
        volume: '750ml',
        description: 'יין אדום פירותי ומפנק',
      },
      {
        name: 'סוביניון בלאן',
        price: 55,
        alcoholPercent: '13%',
        origin: 'ניו זילנד',
        tasteNotes: 'חמצמץ, רענן',
        pairing: 'פירות ים, סלטים',
        volume: '750ml',
        description: 'יין לבן חמצמץ ומרענן',
      },
    ],
  },
];

export const extrasForPizza = [
  {
    name: "מיקס זיתים",
    vegan: false,
    price: 6,
    comment: "",
  },
  {
    name: "פטה",
    vegan: false,
    price: 8,
    comment: "",
  },
];
