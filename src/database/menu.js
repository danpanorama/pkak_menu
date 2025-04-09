
import Image1 from '../images/resize/ayagivesalad.jpg'
import Image2 from '../images/resize/sweets.jpg'
import Image3 from '../images/resize/ayadan.jpg'
import Image4 from '../images/resize/ayaeatpizza22.jpg'

export const menu = {
    food: [
      {
        pizza: {
          image:Image4,
          items: [
            {
              name: "מרגריטה",
              description: "פיצה מרגריטה רוטב עגבניות עם בזיליקום",
              materials: "מוצרלה, רוטב עגבניות, בזיליקום, פרמזן",
              price: 60,
              vegan: 0,
              category: "pizza",
              extras: [],
            },
            {
              name: "מרגריטה טבעונית",
              description: "פיצה מרגריטה טבעונית עם רוטב עגבניות",
              materials:
                "מוצרלה טבעונית מגורדת, רוטב עגבניות, בזיליקום, פרמזן טבעוני",
              vegan: 1,
              price: 62,
              category: "pizza",
              extras: [],
            },
            {
              name: "פונגי",
              description: "",
              materials:
                "מוצרלה, רוטב 3 גבינות, בטטה, גבינת פטה, בצל ירוק, עלי רוקט, ",
              vegan: 0,
              price: 66,
              category: "pizza",
              extras: [],
            },
            {
              name: "ביאנקה",
              description: "",
              materials: "",
              vegan: 0,
              price: "",
              category: "pizza",
              extras: [],
            },
          ],
        },
  
        noPizza: {
          image: Image2,
          items: [
            {
              name: "סלט עלים ופלפלים",
              description: "",
              materials: "",
              comments: "",
              category: "salads",
              price: 49,
            },
            {
              name: "סלט עלים ופטריות",
              description: "",
              materials: "",
              comments: "",
              category: "salads",
              price: 47,
            },
          ],
        },
  
        sweets: {
          image:Image3,
          items: [
            {
              name: "מאפה שוקולד",
              price: 39,
            },
          ],
        },
  
        sides: {
          image: Image1,
          items: [
            {
              name: "נאצוס וסלסה",
              price: 34,
            },
          ],
        },
      },
    ],
  
    drinks: {
      bottleBeer: [
        {
          name: "",
          price: 0,
          description: "",
          materials: "",
        },
      ],
      draftBeer: [{}],
      liteDrinks: [{}],
      chasers: [],
      drinks: [],
      premium: [],
      wain: [],
      bottleWain: [],
    },
  
    deals: [],
  };
  
  export const extrasForPizza = [
    {
      name: "מיקס זיתים",
      vegan: 0,
      price: 6,
      comment: "",
    },
    {
      name: "פטה",
      vegan: 0,
      price: 8,
      comment: "",
    },
  ];
  