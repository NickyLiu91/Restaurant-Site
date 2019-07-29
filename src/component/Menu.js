import React from 'react';

export default class Menu extends React.Component {

  state = {
    subsections: {"Appetizers", "Entrées", "Side Dishes", "Desserts", "Drinks"},
    appetizers: {
      {name: "Takoyaki": image: "images/Takoyaki.jpg", description: "A Japanese snack in the shape of little round balls containing pieces of octopus, served with shaved bonito flakes, and a house made sauce.", price: 4},
      {name: "Edamame": image: "images/Edamame.jpg", description: "Young soybeans blanched in salt, steamed and served.", price: 4},
      {name: "Fried Gyoza": image: "images/FriedGyoza.jpg", description: "Pork Gyoza, fried until golden and crispy, served with a special dipping sauce.", price: 4},
      {name: "Agedashi": }, image: "images/Agedashi.jpg", description: "Aged Tofu served with scallions and bonito flakes.", price: 4}
    },
    entrées: {
      {name: "Shio Ramen", image: "images/ShioRamen", description: "A light broth based on salt, served with slices of pork, bamboo shoots, scallions, and a poached egg. ", price: 11},
      {name: "Shoyu Ramen", image: "images/ShoyuRamen", description: "A light broth based on soy sauce, served with bok choy, char siu(grilled pork), and a hard boiled egg.", price: 11},
      {name: "Tonkotsu Ramen", image: "images/TonkotsuRamen", description: "A rich broth based on pork bones,  served with slices of grilled pork, a hard boiled egg, scallions and shitake mushrooms.", price: 12}
      {name: "Miso Ramen", image: "images/MisoRamen", description: "A light broth based on Miso, served with slices of pork, corn, mushrooms, scallions, a hard boiled egg, and bamboo shoots.", price: 11},
      {name: "Tempura Ramen", image: "images/TempuraRamen", description: "A rich seafood broth, served with deep fried shrimp, slices of pork, scallions, a hard boiled egg, and seaweed.", price: 12},
      {name: "Pork Katsu", image: "images/PorkKatsu", description: "Stir fried soba noodles, served with a yakisoba sauce, vegetables, grilled pork, and peppers.", price: 10},
      {name: "Beef Katsu", image: "images/BeefKatsu", description: "Deep fried pork, served with curry, a hard boiled egg, and rice.", price: 10},
      {name: "Oyakudon", image: "images/Oyakudon", description: "Deep fried beef, served with curry, vegetables, and rice.", price: 10},
      {name: "Gyudon", image: "images/Gyudon", description: "Cooked in one pan where onions, chicken, and egg are simmered in an umami rich dashi-based sauce, served over rice.", price: 10},
      {name: "Omurice", image: "images/Omurice", description: "Savory and juicy sliced beef simmered in a sweet and savory dashi broth seasoned with soy sauce and mirin, served over rice.", price: 10},
      {name: "Yakisoba", image: "images/Yakisoba", description: "A staple classic dish in Japan, a fluffy omelet is served over fried rice, chicken, kidney beans, onions, topped with a sweet demi-glaze sauce.", price: 10}
    },
    sideDishes: {
      {name: "Chicken Yakitori Skewers", image: "images/ChickenYakitoriSkewers", description: "Chicken marinated in a savory sweet sauce, grilled to order.", price: 5},
      {name: "Beef Yakitori Skewers", image: "images/BeefYakitoriSkewers", description: "Beef marinated in a savory sweet sauce, grilled to order.", price: 5},
      {name: "Chicken Karaage", image: "images/ChickenKaraage", description: "Japanese fried chicken is made by marinating bite-size pieces of chicken in sake, soy sauce, ginger and garlic.", price: 5}
    },
    desserts: {
      {name: "Sweet Dangos", image: "images/SweetDangos", description: "A sweet and chewy festival favorite, dumplings made from sweet rice flour, served on skewers.", price: 4},
      {name: "Mochi Ice Cream", image: "images/MochiIceCream", description: "Soft, pounded sticky rice wrapped around an ice cream filling.", price: 4},
      {name: "Crepes", image: "images/Crepes", description: "A light, thin and crispy pancake filled with fruits, whipped cream and drizzled with chocolate.", price: 4},
      {name: "Sakuramochi", image: "images/Sakuramochi", description: "A Japanese sweet consisting of sweet pink-colored rice cake with a red bean paste center, and wrapped in a pickled cherry blossom leaf.", price: 4},
      {name: "Taiyaki", image: "images/Taiyaki", description: "A Japanese fish-shaped cake, filled with a red bean paste made from sweetened azuki beans.", price: 3}
    },
    drinks: {
      {name: "Brown Rice Tea", image: "images/BrownRiceTea", description: "", price: 0},
      {name: "Kitkat Milkshakes", image: "images/KitkatMilkshakes", description: "", price: 4},
      {name: "Matcha Green Tea Latte", image: "images/MatchaGreenTeaLatte", description: "", price: 5},
      {name: "Healthy Matcha Smoothie", image: "images/HealthyMatchaSmoothie", description: "", price: 5},
      {name: "Matcha Elixir", image: "images/MatchaElixir", description: "", price: 5},
      {name: "Green Tea", image: "images/GreenTea", description: "", price: 1},
      {name: "Coffee", image: "images/Coffee", description: "", price: 2},
      {name: "Soda", image: "images/Soda", description: "", price: 2},
      {name: "Ramune", image: "images/Ramune", description: "", price: 2},
      {name: "Calpis", image: "images/Calpis", description: "", price: 4}
    }
  }

  render() {
    return (
      <div id="menu">
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
        MENU
      </div>
    )
  }
}
