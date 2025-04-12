import LOGO from "./LOGO.png";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./banner_bg.png";
import main_banner_bg_sm from "./banner_bg_sm.png";
import add_address_iamge from "./add_address_image.svg";
import Restaurent_icon from "./cutlery_12336133.png";
import Hotel_icon from "./travel_15692631.png";
import education_icon from "./book_3145765.png";
import Hospital_icon from "./medical_13133433.png";
import Rent_icon from "./house_3638682.png";
import gym_icon from "./avatar_14855995.png";
import courrier_icon from "./email_4385761.png";

export const assets = {
  LOGO,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  box_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  
  add_address_iamge,
};
export const categories = [
  {
    text: "Restaurants",
    path: "Restaurants",
    image: Restaurent_icon,
    bgColor: "#FEF6DA",
  },
  {
    text: "Hotels",
    path: "Hotels",
    image: Hotel_icon,
    bgColor: "#FEE0E0",
  },
  {
    text: "Education",
    path: "Education",
    image: education_icon,
    bgColor: "#F0F5DE",
  },
  {
    text: "Hospitals",
    path: "Hospital",
    image: Hospital_icon,
    bgColor: "#E1F5EC",
  },
  {
    text: "Rent & Hire",
    path: "Hire",
    image: Rent_icon,
    bgColor: "#FEE6CD",
  },
  {
    text: "Gym",
    path: "Gym",
    image: gym_icon,
    bgColor: "#E0F6FE",
  },
  {
    text: "Courier Service",
    path: "Courier",
    image: courrier_icon,
    bgColor: "#F1E3F9",
  },
];

export const dummyProducts = [
  {
    _id: "st001",
    name: "Spice Lounge",
    address: "21 Foodie Street, Hyderabad",
    category: "Restaurants",
    overallRating: 4.5,
    userRating: 5,
    createdAt: "2025-04-01T10:05:00.000Z",
    updatedAt: "2025-04-01T10:06:00.000Z"
  },
  {
    _id: "st002",
    name: "Taste Junction",
    address: "102 Curry Avenue, Mumbai",
    category: "Restaurants",
    overallRating: 4.2,
    userRating: 4,
    createdAt: "2025-04-01T11:00:00.000Z",
    updatedAt: "2025-04-01T11:01:00.000Z"
  },
  {
    _id: "st003",
    name: "Grill Masters",
    address: "59 BBQ Lane, Bengaluru",
    category: "Restaurants",
    overallRating: 4.6,
    userRating: 4,
    createdAt: "2025-04-01T12:00:00.000Z",
    updatedAt: "2025-04-01T12:01:00.000Z"
  },
  {
    _id: "st004",
    name: "Comfort Stay Inn",
    address: "88 Lakeview Road, Bengaluru",
    category: "Hotels",
    overallRating: 4.1,
    userRating: 4,
    createdAt: "2025-04-01T13:00:00.000Z",
    updatedAt: "2025-04-01T13:01:00.000Z"
  },
  {
    _id: "st005",
    name: "Elite Grand Hotel",
    address: "202 Palace Road, Delhi",
    category: "Hotels",
    overallRating: 4.4,
    userRating: 5,
    createdAt: "2025-04-01T14:00:00.000Z",
    updatedAt: "2025-04-01T14:01:00.000Z"
  },
  {
    _id: "st006",
    name: "Tranquil Nest",
    address: "17 Green Avenue, Kochi",
    category: "Hotels",
    overallRating: 4.0,
    userRating: 3,
    createdAt: "2025-04-01T15:00:00.000Z",
    updatedAt: "2025-04-01T15:01:00.000Z"
  },
  {
    _id: "st007",
    name: "Bright Minds Academy",
    address: "16 Knowledge Park, Pune",
    category: "Education",
    overallRating: 4.3,
    userRating: 3,
    createdAt: "2025-04-01T16:00:00.000Z",
    updatedAt: "2025-04-01T16:01:00.000Z"
  },
  {
    _id: "st008",
    name: "NextGen Tutorials",
    address: "401 Tech Tower, Hyderabad",
    category: "Education",
    overallRating: 4.7,
    userRating: 5,
    createdAt: "2025-04-01T17:00:00.000Z",
    updatedAt: "2025-04-01T17:01:00.000Z"
  },
  {
    _id: "st009",
    name: "Scholars Point",
    address: "200 Edu Complex, Kolkata",
    category: "Education",
    overallRating: 4.1,
    userRating: 4,
    createdAt: "2025-04-01T18:00:00.000Z",
    updatedAt: "2025-04-01T18:01:00.000Z"
  },
  {
    _id: "st010",
    name: "Iron Temple Gym",
    address: "50 Fitness Lane, Mumbai",
    category: "Gym",
    overallRating: 4.7,
    userRating: null,
    createdAt: "2025-04-01T19:00:00.000Z",
    updatedAt: "2025-04-01T19:01:00.000Z"
  },
  {
    _id: "st011",
    name: "Beast Mode Fitness",
    address: "89 Muscle Road, Chennai",
    category: "Gym",
    overallRating: 4.5,
    userRating: 4,
    createdAt: "2025-04-01T20:00:00.000Z",
    updatedAt: "2025-04-01T20:01:00.000Z"
  },
  {
    _id: "st012",
    name: "Flex Zone",
    address: "33 Power Drive, Jaipur",
    category: "Gym",
    overallRating: 4.2,
    userRating: 3,
    createdAt: "2025-04-01T21:00:00.000Z",
    updatedAt: "2025-04-01T21:01:00.000Z"
  },
  {
    _id: "st013",
    name: "CarePlus Hospital",
    address: "303 Wellness Street, Chennai",
    category: "Hospital",
    overallRating: 4.0,
    userRating: 4,
    createdAt: "2025-04-01T22:00:00.000Z",
    updatedAt: "2025-04-01T22:01:00.000Z"
  },
  {
    _id: "st014",
    name: "GreenLife Clinic",
    address: "74 Health Blvd, Pune",
    category: "Hospital",
    overallRating: 4.3,
    userRating: 5,
    createdAt: "2025-04-01T23:00:00.000Z",
    updatedAt: "2025-04-01T23:01:00.000Z"
  },
  {
    _id: "st015",
    name: "Sunrise Hospital",
    address: "145 Medical Park, Hyderabad",
    category: "Hospital",
    overallRating: 3.9,
    userRating: 3,
    createdAt: "2025-04-02T00:00:00.000Z",
    updatedAt: "2025-04-02T00:01:00.000Z"
  },
  {
    _id: "st016",
    name: "Urban Flat Rentals",
    address: "12 Skyline Towers, Delhi",
    category: "Rent",
    overallRating: 4.2,
    userRating: 5,
    createdAt: "2025-04-02T01:00:00.000Z",
    updatedAt: "2025-04-02T01:01:00.000Z"
  },
  {
    _id: "st017",
    name: "Dream Nest Homes",
    address: "90 Horizon Street, Noida",
    category: "Rent",
    overallRating: 4.5,
    userRating: 4,
    createdAt: "2025-04-02T02:00:00.000Z",
    updatedAt: "2025-04-02T02:01:00.000Z"
  },
  {
    _id: "st018",
    name: "QuickLease Properties",
    address: "58 RentHub Complex, Gurgaon",
    category: "Rent",
    overallRating: 4.0,
    userRating: 4,
    createdAt: "2025-04-02T03:00:00.000Z",
    updatedAt: "2025-04-02T03:01:00.000Z"
  },
  {
    _id: "st019",
    name: "QuickHire Services",
    address: "65 Service Hub, Ahmedabad",
    category: "Hire",
    overallRating: 3.9,
    userRating: 4,
    createdAt: "2025-04-02T04:00:00.000Z",
    updatedAt: "2025-04-02T04:01:00.000Z"
  },
  {
    _id: "st020",
    name: "HireFast Agency",
    address: "120 Workforce Street, Bhopal",
    category: "Hire",
    overallRating: 4.1,
    userRating: 5,
    createdAt: "2025-04-02T05:00:00.000Z",
    updatedAt: "2025-04-02T05:01:00.000Z"
  }
]
;

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];

export const dummyRatings = [
  {
    user_id: "u001",
    username: "Rahul Sharma",
    store_id: "st001",
    rating: 5,
  },
  {
    user_id: "u002",
    username: "Anjali Verma",
    store_id: "st001",
    rating: 4,
  },
  {
    user_id: "u003",
    username: "Amit Singh",
    store_id: "st002",
    rating: 4,
  },
  {
    user_id: "u004",
    username: "Priya Desai",
    store_id: "st001",
    rating: 3,
  },
  {
    user_id: "u005",
    username: "Rohit Mehra",
    store_id: "st003",
    rating: 5,
  }
];

export const dummyUsers = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    address: "123 Maple Street, New York, NY",
    password: "password123"
  },
  {
    username: "jane_smith",
    email: "jane.smith@example.com",
    address: "456 Oak Avenue, Los Angeles, CA",
    password: "securepass456"
  },
  {
    username: "michael_brown",
    email: "michael.brown@example.com",
    address: "789 Pine Road, Chicago, IL",
    password: "mikebrown789"
  },
  {
    username: "emily_jones",
    email: "emily.jones@example.com",
    address: "321 Birch Lane, Houston, TX",
    password: "emilyrules"
  },
  {
    username: "william_lee",
    email: "william.lee@example.com",
    address: "654 Cedar Drive, Phoenix, AZ",
    password: "will123lee"
  },
  {
    username: "olivia_white",
    email: "olivia.white@example.com",
    address: "987 Elm Street, Philadelphia, PA",
    password: "olivia@987"
  },
  {
    username: "daniel_kim",
    email: "daniel.kim@example.com",
    address: "246 Spruce Way, San Antonio, TX",
    password: "danielpass"
  },
  {
    username: "sophia_green",
    email: "sophia.green@example.com",
    address: "135 Aspen Blvd, San Diego, CA",
    password: "sophiagreen"
  },
  {
    username: "david_miller",
    email: "david.miller@example.com",
    address: "579 Willow Ave, Dallas, TX",
    password: "david1234"
  },
  {
    username: "ava_harris",
    email: "ava.harris@example.com",
    address: "864 Redwood St, San Jose, CA",
    password: "ava_h@rris"
  }
];


