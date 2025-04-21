import Hero from "@/components/main/home";
import MarketItem from "@/components/shared/MarketItem";
import Pets from "@/components/shared/Pets";
import RestaurantItem from "@/components/shared/Restaurants";

import restaurantsImg1 from "../../../assets/images/restaurant.jpg";
import restaurantsImg2 from "../../../assets/images/restaurant-1.jpg";
import restaurantsImg3 from "../../../assets/images/restaurant-2.jpg";
import restaurantsImg4 from "../../../assets/images/restaurant-3.jpg";

import pet1 from '../../../assets/images/pet-1.jpg';
import pet2 from '../../../assets/images/pet-2.jpg';
import pet3 from '../../../assets/images/pet-3.jpg';
import pet4 from '../../../assets/images/pet-4.jpg';

import market1 from '../../../assets/images/marketItem-1.png';
 import market2 from '../../../assets/images/marketItem-2.png';
 import market3 from '../../../assets/images/marketItem-3.png';
 import market4 from '../../../assets/images/marketItem-4.png';



const restaurantData = [
  {
    img: restaurantsImg1,
    alt: "restaurants Img 1",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg2,
    alt: "restaurants Img 2",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg3,
    alt: "restaurants Img 3",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg4,
    alt: "restaurants Img 4",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
  {
    img: restaurantsImg4,
    alt: "restaurants Img 5",
    title: "Central Park",
    location: "Wong Chuk Hang",
    ratings: "4.8",
  },
];

const petData = [
  {
    img: pet1,
    title: 'Luna',
    type: 'Golden Retriever',
    age: '1',
    
},
{
    img: pet2,
    title: 'Luna',
    type: 'Golden Retriever',
    age: '1',
},
{
    img: pet3,
    title: 'Luna',
    type: 'Golden Retriever',
    age: '1',
},
{
    img: pet4,
    title: 'Luna',
    type: 'Golden Retriever',
    age: '1',
},
{
    img: pet4,
    title: 'Luna',
    type: 'Golden Retriever',
    age: '1',
},
];

 const marketData = [
  { img: market1, title: 'Luna', price: '$80.99' },
   { img: market2, title: 'Bella', price: '$75.50' },
  { img: market3, title: 'Bella', price: '$75.50' },
  { img: market4, title: 'Bella', price: '$75.50' },
 ];

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Restaurant Section */}
      <div className="restaurants-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {restaurantData.map((item, idx) => (
          <RestaurantItem key={idx.id} data={item} />
        ))}
      </div> 


      {/* pet Section */}
      <div className="restaurants-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {petData.map((item, index) => (
          <Pets key={index.id} data={item} />
        ))}
      </div>

      {/* market Section */}
      <div className="restaurants-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {marketData.map((item, index) => (
          <MarketItem key={index.id} data={item} />
        ))}
      </div>

     
    </div>
  );
};

export default Home;
