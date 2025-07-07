
import Image1 from '../images/resize/ayabottle1.jpg'
import Image2 from '../images/resize/ayawine1.jpg'
import Image3 from '../images/resize/sweets.jpg'
import Image4 from '../images/resize/kaprezasalad1.jpg'
import Image5 from '../images/resize/fongipizza1.jpg'
import Image6 from '../images/resize/danarak3.jpg'
import Image33 from '../images/resize/ayagivesalad.jpg'
import Image7 from '../images/resize/ayadan.jpg'
import Image8 from '../images/resize/ayabeer.jpg'
import flag1 from '../images/flag/be.svg'
import us from '../images/flag/us.svg'
import IsraelFlag from '../images/flag/il.svg'
import flag4 from '../images/flag/gf.svg'
import flag5 from '../images/flag/gf.svg'
import Pizza from '../icons/pizza-svgrepo-com.svg'
import Salad from '../icons/salad-svgrepo-com (1).svg'
import beer2 from '../icons/beer-svgrepo-com (2).svg'
import beer4 from '../icons/beer-svgrepo-com (3).svg'
import Dessert1 from '../icons/cupcake-dessert-food-svgrepo-com.svg'
import winebuttiol from '../icons/wine-svgrepo-com.svg'
import stellaBattle from '../images/buttols/stellabuttol.png'
import wineGlass from '../icons/wine-france-pouring-national-culture-paris-svgrepo-com (1).svg'

import whisky1 from '../icons/whiskey-whisky-svgrepo-com.svg'
import whisky2 from '../icons/whiskey-svgrepo-com.svg'
import whisky3 from '../icons/whiskey-svgrepo-com (2).svg'
import whisky4 from '../icons/whiskey-svgrepo-com (1).svg'


export const menu = [
  {
    category: 'פיצה',
    image: Image5,
    id:1,
    icon:Pizza,
    items: [
      {
        name: "מרגריטה",
        description: "פיצה מרגריטה רוטב עגבניות עם בזיליקום",
        materials: "מוצרלה, רוטב עגבניות, בזיליקום, פרמזן",
        price: 60,
        id:1,
        vegan: false,
        extras: [],
        image:Image5
      },
      {
        name: "🌾 מרגריטה טבעונית" ,
        description: "פיצה מרגריטה טבעונית עם רוטב עגבניות",
        materials: "מוצרלה טבעונית מגורדת, רוטב עגבניות, בזיליקום, פרמזן טבעוני",
        price: 62,
        vegan: true,
        extras: [],
        image:Image5,
         id:2,
      },
      {
        name: "פונגי",
        description: "",
        materials: "מוצרלה, רוטב 3 גבינות, בטטה, גבינת פטה, בצל ירוק, עלי רוקט",
        price: 66,
        vegan: false,
        extras: [],
        image:Image5,
         id:3,
      },
      {
        name: "ביאנקה",
        description: "",
        materials: "",
        price: "",
        vegan: false,
        extras: [],
        image:Image5,
         id:4,
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
    category: 'בירה',
      id:4,
    details:'330/500',
    title: 'מהחבית',
    icon:beer2,
    image: Image8,
    items: [
      {
        name: 'סטלה ',
        price: 18,
          id:1,
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
          id:2,
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
          id:3,
        alcoholPercent: '5.0%',
        origin: 'ישראל',
        tasteNotes: 'גוף בינוני, טעם חיטה',
        pairing: 'מאפים, זיתים',
        volume: '500ml',
        description: 'הבחירה המקומית המובילה. קלאסית ישראלית!',
        img:IsraelFlag,
        logo:stellaBattle
      },

         {
      name: 'טוכר רד',
      price: 24,
      id: 4,
      alcoholPercent: '5.2%',
      origin: 'גרמניה',
      tasteNotes: 'מאלט קרמלי, גוף בינוני',
      pairing: 'בשרים, גבינות חצי קשות',
      volume: '500ml',
      description: 'לאגר אדמונית גרמנית עם סיומת חלקה ומתובלת',
      img: IsraelFlag,
      logo: stellaBattle
    },
    {
      name: 'שפירא IPA',
      price: 26,
      id: 5,
      alcoholPercent: '6.5%',
      origin: 'ישראל',
      tasteNotes: 'מרירות גבוהה, הדרים ופרחים',
      pairing: 'כנפיים חריפות, טאקוס',
      volume: '330ml',
      description: 'IPA ישראלית בועטת ומאוזנת עם ניחוחות פירותיים',
      img: IsraelFlag,
      logo:stellaBattle
    },
    {
      name: 'בלו מון',
      price: 24,
      id: 6,
      alcoholPercent: '5.4%',
      origin: 'ארה"ב',
      tasteNotes: 'חיטה, קליפת תפוז, כוסברה',
      pairing: 'סלטים, פסטות שמנת',
      volume: '330ml',
      description: 'בירת חיטה אמריקאית עם טאץ׳ הדרי מרענן',
      img: us,
      logo: stellaBattle
    },
    {
      name: 'מורטי',
      price: 25,
      id: 7,
      alcoholPercent: '8.5%',
      origin: 'איטליה',
      tasteNotes: 'מתקתקה, דובדבן, מאלט חזק',
      pairing: 'קינוחים, גבינות בשלות',
      volume: '330ml',
      description: 'דובדבנית כהה עם גוף עשיר וטעמים עמוקים',
      img: flag1,
      logo: stellaBattle
    },
    {
      name: 'ליפמנס',
      price: 25,
      id: 8,
      alcoholPercent: '3.8%',
      origin: 'בלגיה',
      tasteNotes: 'פירות יער, חמיצות עדינה',
      pairing: 'גבינות רכות, קינוחים פירותיים',
      volume: '250ml',
      description: 'בירת פירות בלגית עם חמיצות עדינה וטעמים טבעיים',
      img: flag1,
      logo: stellaBattle
    },
    {
      name: 'הוגארדן',
      price: 23,
      id: 9,
      alcoholPercent: '4.9%',
      origin: 'בלגיה',
      tasteNotes: 'חיטה, קליפות תפוז, עשבי תיבול',
      pairing: 'מאכלים קלים, פירות ים',
      volume: '330ml',
      description: 'בירת חיטה בלגית עם ניחוח רענן וטעם מרכך',
      img: flag1,
      logo: stellaBattle
    },
    {
      name: 'ברו דוג',
      price: 28,
      id: 10,
      alcoholPercent: '5.6%',
      origin: 'סקוטלנד',
      tasteNotes: 'מרירה, הדרים חזקים',
      pairing: 'בורגרים, צ׳יפס, אוכל מתובל',
      volume: '330ml',
      description: 'IPA סקוטית נועזת עם טעמים חדים של הדרים',
      img: flag1,
      logo: stellaBattle
    },
    {
      name: 'קסטיל רוז',
      price: 27,
      id: 11,
      alcoholPercent: '8%',
      origin: 'בלגיה',
      tasteNotes: 'דובדבנים, מתוק-מריר',
      pairing: 'גבינות קשות, עוגות שוקולד',
      volume: '330ml',
      description: 'בירת דובדבן בלגית חזקה ומתקתקה עם סיומת אלכוהולית',
      img: flag1,
      logo: stellaBattle
    },
    {
      name: 'לף בלונד',
      price: 25,
      id: 12,
      alcoholPercent: '6.6%',
      origin: 'בלגיה',
      tasteNotes: 'פרחונית, מתקתקה, מאלט',
      pairing: 'עוף בגריל, פסטה ברוטב שמנת',
      volume: '330ml',
      description: 'בלונד בלגית מסורתית, עשירה אך מאוזנת',
      img: flag1,
      logo: stellaBattle
    }



    ],
  },





  {
    category:'בירה בקבוק',
    title: 'בבקבוק',
    icon:beer4,
    image: Image1,
    items: [
      {
        name: 'היינקן',
        price: 20,
          id:3,
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
          id:2,
        alcoholPercent: '4.9%',
        origin: 'ישראל',
        tasteNotes: 'כהה, קרמלית',
        pairing: 'בשרים, גבינות קשות',
        volume: '330ml',
        description: 'לאגר ישראלית כהה, גוף מלא ועשיר בטעם',
          img: IsraelFlag,
      logo: stellaBattle
      },
    ],
  },
   {
    category: 'יין',
    title: 'יין אדום ולבן',
    image: Image2,
    icon:wineGlass,
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
    icon:winebuttiol,
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
  {
    category: 'משקאות פרימיום',
    title: 'פרימיום',
    icon:whisky3,
    image: Image6,
    items: [
      {
        name: 'ג’ין מותג פרימיום',
        price: 50,
          id:1,
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
    category: 'לא פיצה',
    image: Image4,
    icon:Salad,
      id:2,
    items: [
      {
        name: "סלט עלים ופלפלים",
        price: 49,
        description: "",
        vegan: true,
        materials: "",
        extras: [],
        image:Image5
      },
      {
        name: "סלט עלים ופטריות",
        price: 47,
        description: "",
        vegan: true,
        materials: "",
        extras: [],
        image:Image33
      },
    ],
  },
  {
    category: 'קינוחים',
    image: Image3,
      id:3,
      icon:Dessert1,
    items: [
      {
        name: "מאפה שוקולד",
        price: 39,
        description: "",
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
