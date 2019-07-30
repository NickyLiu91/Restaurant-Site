import React from 'react';
import Section from '../component/Section';
import Food from '../component/Food';

export default class Menu extends React.Component {

  state = {
    subsections: ["Appetizers", "Entrées", "Side Dishes", "Desserts", "Drinks"],
    sections: [
      {name: "Appetizers", list: [
        {name: "Takoyaki", image: "images/Takoyaki.jpg", description: "A Japanese snack in the shape of little round balls containing pieces of octopus, served with shaved bonito flakes, and a house made sauce.", price: 4},
        {name: "Edamame", image: "images/Edamame.jpg", description: "Young soybeans blanched in salt, steamed and served.", price: 4},
        {name: "Fried Gyoza", image: "images/FriedGyoza.jpg", description: "Pork Gyoza, fried until golden and crispy, served with a special dipping sauce.", price: 4},
        {name: "Agedashi", image: "images/Agedashi.jpg", description: "Aged Tofu served with scallions and bonito flakes.", price: 4}
      ]},
      {name: "Entrées", list: [
        {name: "Shio Ramen", image: "images/ShioRamen.jpg", description: "A light broth based on salt, served with slices of pork, bamboo shoots, scallions, and a poached egg. ", price: 11},
        {name: "Shoyu Ramen", image: "images/ShoyuRamen.jpg", description: "A light broth based on soy sauce, served with bok choy, char siu(grilled pork), and a hard boiled egg.", price: 11},
        {name: "Tonkotsu Ramen", image: "images/TonkotsuRamen.jpg", description: "A rich broth based on pork bones, served with slices of grilled pork, a hard boiled egg, scallions and shitake mushrooms.", price: 12},
        {name: "Miso Ramen", image: "images/MisoRamen.jpg", description: "A light broth based on Miso, served with slices of pork, corn, mushrooms, scallions, a hard boiled egg, and bamboo shoots.", price: 11},
        {name: "Tempura Ramen", image: "images/TempuraRamen.jpg", description: "A rich seafood broth, served with deep fried shrimp, slices of pork, scallions, a hard boiled egg, and seaweed.", price: 12},
        {name: "Yakisoba", image: "images/Yakisoba.jpg", description: "Stir fried soba noodles, served with a yakisoba sauce, vegetables, grilled pork, and peppers.", price: 10},
        {name: "Pork Katsu", image: "images/PorkKatsu.jpg", description: "Deep fried pork, served with curry, a hard boiled egg, and rice.", price: 10},
        {name: "Beef Katsu", image: "images/BeefKatsu.jpg", description: "Deep fried beef, served with curry, vegetables, and rice.", price: 10},
        {name: "Oyakodon", image: "images/Oyakodon.jpg", description: "Cooked in one pan where onions, chicken, and egg are simmered in an umami rich dashi-based sauce, served over rice.", price: 10},
        {name: "Gyudon", image: "images/Gyudon.jpg", description: "Savory and juicy sliced beef simmered in a sweet and savory dashi broth seasoned with soy sauce and mirin, served over rice.", price: 10},
        {name: "Omurice", image: "images/Omurice.jpg", description: "A staple classic dish in Japan, a fluffy omelet is served over fried rice, chicken, kidney beans, onions, topped with a sweet demi-glaze sauce.", price: 10},
      ]},
      {name: "Side Dishes", list: [
        {name: "Chicken Yakitori Skewers", image: "images/ChickenYakitoriSkewers.jpg", description: "Chicken marinated in a savory sweet sauce, grilled to order.", price: 5},
        {name: "Beef Yakitori Skewers", image: "images/BeefYakitoriSkewers.jpg", description: "Beef marinated in a savory sweet sauce, grilled to order.", price: 5},
        {name: "Chicken Karaage", image: "images/ChickenKaraage.jpg", description: "Japanese fried chicken is made by marinating bite-size pieces of chicken in sake, soy sauce, ginger and garlic.", price: 5}
      ]},
      {name: "Desserts", list: [
        {name: "Sweet Dangos", image: "images/SweetDangos.jpg", description: "A sweet and chewy festival favorite, dumplings made from sweet rice flour, served on skewers.", price: 4},
        {name: "Mochi Ice Cream", image: "images/MochiIceCream.jpg", description: "Soft, pounded sticky rice wrapped around an ice cream filling.", price: 4},
        {name: "Crepes", image: "images/Crepes.jpg", description: "A light, thin and crispy pancake filled with fruits, whipped cream and drizzled with chocolate.", price: 4},
        {name: "Sakuramochi", image: "images/Sakuramochi.jpg", description: "A Japanese sweet consisting of sweet pink-colored rice cake with a red bean paste center, and wrapped in a pickled cherry blossom leaf.", price: 4},
        {name: "Taiyaki", image: "images/Taiyaki.jpg", description: "A Japanese fish-shaped cake, filled with a red bean paste made from sweetened azuki beans.", price: 3}
      ]},
      {name: "Drinks", list: [
        {name: "Brown Rice Tea", image: "images/BrownRiceTea.jpg", description: "", price: 0},
        {name: "Kitkat Milkshake", image: "images/KitkatMilkshake.jpg", description: "", price: 4},
        {name: "Matcha Green Tea Latte", image: "images/MatchaGreenTeaLatte.jpg", description: "", price: 5},
        {name: "Healthy Matcha Smoothie", image: "images/HealthyMatchaSmoothie.jpg", description: "", price: 5},
        {name: "Matcha Elixir", image: "images/MatchaElixir.jpg", description: "", price: 5},
        {name: "Green Tea", image: "images/GreenTea.jpg", description: "", price: 1},
        {name: "Coffee", image: "images/Coffee.jpg", description: "", price: 2},
        {name: "Soda", image: "images/Soda.jpg", description: "", price: 2},
        {name: "Ramune", image: "images/Ramune.jpg", description: "", price: 2},
        {name: "Calpis", image: "images/Calpis.jpg", description: "", price: 4}
      ]}
    ],
    selectedSection: "None",
    selectedItem: "None",
    randomImage: '',
    random: true
  }

  componentDidMount() {
    this.randomImageGenerator()
    this.changePicture()
  }

  randomImageGenerator = () => {
    if (this.state.random == true) {
      let allObjects = []
      this.state.sections.forEach(object => {
        object.list.forEach(object2 => {
          allObjects.push(object2)
        })
      })

      let randomNumber = Math.floor(Math.random() * allObjects.length)

      this.setState({
        randomImage: allObjects[randomNumber]
      })
    }
  }

  changePicture = () => {
    setInterval(this.randomImageGenerator, 4000)
  }

  generateMenuSections = () => {
    if (this.state.selectedSection == "None") {
      return this.state.sections.map(
        (item, index) => <Section key={index} item={item} selectSection={this.selectSection} selectedSection={this.state.selectedSection}/>
      )
    } else {
      let relevantSection = [this.state.selectedSection]
      let number = this.state.sections.findIndex(obj => obj.name == this.state.selectedSection)
      this.state.sections.map(obj => {
        relevantSection.push(obj)
        if (obj.name == this.state.selectedSection) {
          this.state.sections[number].list.map(
            item => {
              item.className="sub-section"
              relevantSection.push(item)
            }
          )
        }
      })

      return relevantSection.map(
        (item, index) => <Section key={index} item={item} selectSection={this.selectSection} selectedSection={this.state.selectedSection} selectItem={this.selectItem}/>
      )
    }
  }

  selectSection = (event) => {
    if (this.state.selectedSection == event) {
      this.setState({
        selectedSection: "None"
      })
    } else {
      this.setState({
        selectedSection: event
      })
    }
  }

  selectItem = (event) => {
    this.setState({
      selectedItem: event,
      random: false
    })
  }

  render() {
    if (this.state.selectedItem == "None") {
      return (
        <div id="menu">
          <ul id="sidebar">
            {this.generateMenuSections()}
          </ul>
          <Food selectedItem={this.state.randomImage}/>
        </div>
      )
    } else {
      return (
        <div id="menu">
          <ul id="sidebar">
            {this.generateMenuSections()}
          </ul>
          <Food selectedItem={this.state.selectedItem}/>
        </div>
      )
    }
  }
}
