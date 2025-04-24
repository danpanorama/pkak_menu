
import Image1 from '../images/resize/ayabottle1.jpg'
import Image2 from '../images/resize/ayawine1.jpg'
import Image3 from '../images/resize/sweets.jpg'
 import Image4 from '../images/resize/kaprezasalad1.jpg'
 import Image5 from '../images/resize/fongipizza1.jpg'
 import Image6 from '../images/resize/danarak3.jpg'
 import Image7 from '../images/resize/ayadan.jpg'
 import Image8 from '../images/resize/ayabeer.jpg'


 import flag1 from '../images/flag/be.svg'
 import us from '../images/flag/us.svg'
 import flag3 from '../images/flag/il.svg'
 import flag4 from '../images/flag/gf.svg'
 import flag5 from '../images/flag/gf.svg'


 import stellaBattle from '../images/buttols/stellabuttol.png'

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
        image:Image5
      },
      {
        name: "מרגריטה טבעונית",
        description: "פיצה מרגריטה טבעונית עם רוטב עגבניות",
        materials: "מוצרלה טבעונית מגורדת, רוטב עגבניות, בזיליקום, פרמזן טבעוני",
        price: 62,
        vegan: true,
        extras: [],
        image:Image5
      },
      {
        name: "פונגי",
        description: "",
        materials: "מוצרלה, רוטב 3 גבינות, בטטה, גבינת פטה, בצל ירוק, עלי רוקט",
        price: 66,
        vegan: false,
        extras: [],
        image:Image5
      },
      {
        name: "ביאנקה",
        description: "",
        materials: "",
        price: "",
        vegan: false,
        extras: [],
        image:Image5
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
    details:'330/500',
    title: 'מהחבית',
    image: Image8,
    items: [
      {
        name: 'סטלה ',
        price: 18,
        alcoholPercent: '5.0%',
        origin: 'בלגיה',
        tasteNotes: 'מרירות עדינה, גוף קל',
        pairing: 'פיצות, סלטים',
        volume: '500ml',
        description: 'לאגר בלגית קלאסית עם איזון מושלם בין רעננות למרירות',
        img:flag1,
        logo:stellaBattle
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
        img:us,
        logo:stellaBattle
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
        img:flag3,
        logo:stellaBattle
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
