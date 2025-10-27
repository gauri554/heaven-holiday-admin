import package1 from '@/assets/images/products/package1.jpg';
import package2 from '@/assets/images/products/package-2.jpeg';
import package3 from '@/assets/images/products/package-3.jpeg';
import package4 from '@/assets/images/products/package-4.jpeg';
import package10 from '@/assets/images/products/package10.jpg';
import package6 from  '@/assets/images/products/package6.jpg';
import package7 from '@/assets/images/products/package7.jpg';
import package8 from '@/assets/images/products/package8.jpg';
import package9 from '@/assets/images/products/package9.jpg';
import category1 from '@/assets/images/products/category-1.jpg';
import category2 from '@/assets/images/products/category-2.jpg';
import category3 from '@/assets/images/products/category-3.jpg';
import category4 from '@/assets/images/products/category-4.jpg';
import { addOrSubtractDaysFromDate, addOrSubtractMinutesFromDate } from '@/utils/date';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar11 from '@/assets/images/users/avatar-11.jpg';
import avatar12 from '@/assets/images/users/avatar-12.jpg';
import zara from '@/assets/images/seller/zara.svg';
import rolex from '@/assets/images/seller/rolex.svg';
import dyson from '@/assets/images/seller/dyson.svg';
import gopro from '@/assets/images/seller/gopro.svg';
import sellerHm from '@/assets/images/seller/h&m.svg';
import huawei from '@/assets/images/seller/huawei.svg';
import nike from '@/assets/images/seller/nike.svg';
import thenorthface from '@/assets/images/seller/thenorthface.svg';
import facebook from '@/assets/images/app-calendar/facebook.png';
import slack from '@/assets/images/app-calendar/slack.png';
import zoom from '@/assets/images/app-calendar/zoom.png';
import analytics from '@/assets/images/app-calendar/google-analytics.png';
import small1 from '@/assets/images/small/img-1.jpg';
import small2 from '@/assets/images/small/img-2.jpg';
import small3 from '@/assets/images/small/img-3.jpg';
import subcategory from '@/app/(admin)/subcategory/subcategory-list/components/Subcategory';
import { title } from 'process';
export const packageData = [{
  id: '1',
  image: package1,
  title: 'Rajasthan Marwad',
  duration: '8 Days',
  price: 45000,
  rating: {
    star: 4.5,
    review: 189
  },
  category: 'Group Tour',
  categoryid: 'F516276',
  categoryImg: category1,
  slug: 'group-tour',
  createdOn: '12/3/2025',
  subcategory: 'Rajsthan',
  subcategoryslug: 'rajsthan',
  parentcategory: 'Group Tour',
  subcategoryid: '1234BS',
  subcreatedOn: '12/09/2025',
  date: addOrSubtractDaysFromDate(1),
  status: 'Active',
  endDate: addOrSubtractDaysFromDate(20),
   gallery: [
        { id: 101, src: "/images/products/package1.jpg", uploadedOn: "2025-10-01" },
        { id: 102, src: "@/assets/images/products/package1.jpg", uploadedOn: "2025-10-02" },
      ]
}, {
  id: '2',
  image: package2,
  title: 'Highlights of Rajsthan',
  price: 36000,
  duration:'6 days',
  rating: {
    star: 4.1,
    review: 143
  },
  category: 'India',
   categoryid: 'F516277',
  categoryImg: category2,
  slug: 'india',
  createdOn: '04/12/2024',
  subcategory:'North India',
  subcreatedOn: '12/01/2025',
  parentcategory:'India',
  subcategoryslug:'northindia',
  subcategoryid: '1235BS',
  date: addOrSubtractDaysFromDate(5),
  status: 'Inactive',
  endDate: addOrSubtractDaysFromDate(200),
}, {
  id: '3',
  image: package10,
  title: 'Jodhpur Jaisalmer',
  duration:'5 days',
  price: 43000,
  rating: {
    star: 4.4,
    review: 174
  },
  category: 'World',
   categoryid: 'F516278',
  categoryImg: category3,
  slug:'world',
  subcategory: 'South India',
  subcategoryslug: 'southindia',
  subcreatedOn: '12/02/2025',
  subcategoryid: '1236BS',
  parentcategory:'World',
  createdOn:'02/07/2025',
  date: addOrSubtractDaysFromDate(10),
  status: 'Pending',
  endDate: addOrSubtractDaysFromDate(150),
}, {
  id: '4',
  image: package4,
  title: 'Womens Special Rajsthan ',
  duration:'6 days',
  price: 39000,
  rating: {
    star: 4.2,
    review: 23
  },
  category: 'Customized Holidays',
   categoryid: 'F516279',
  categoryImg:category4,
  slug: 'customized-holidays',
  subcategory: 'Asia',
  subcreatedOn: '12/03/2025',
  subcategoryslug: 'asia',
  subcategoryid: '1237BS',
  parentcategory: 'Customized Holidays',
  status:'Active',
  createdOn: '10/06/2025',
  date: addOrSubtractDaysFromDate(15),
  endDate: addOrSubtractDaysFromDate(250),
}, {
  id: '5',
  title: 'Rajsthan Mewad',
  image:package9,
  duration:'8 days',
  price: 45000,
  rating: {
    star: 4.4,
    review: 109
  },
  category: 'Speciality Tours',
   categoryid: 'F516280',
  slug:'speciality-tours',
  createdOn: '11/04/2025',
  subcategory: 'Africa',
  subcategoryslug: 'africa',
  subcategoryid: '1238BS',
  subcreatedOn: '12/09/2025',
  parentcategory: 'Speciality Tours',
  status:'Inactive',
  date: addOrSubtractDaysFromDate(17),
  endDate: addOrSubtractDaysFromDate(70),
}, {
  id: '6',
  title: 'Jaipur Mandawa',
  image:package6,
  duration:'4 days',
  price: 45000,
  rating: {
    star: 4.2,
    review: 200
  },
  category: 'Corporate Tours',
   categoryid: 'F516281',
  slug: 'corporate-tours',
  status: 'pending',
  subcategory: 'America',
  subcategoryslug: 'america',
  subcreatedOn: '12/10/2025',
  subcategoryid: '1239BS',
  parentcategory: 'Corporate Tours',
  createdOn: '15/03/2024',
  date: addOrSubtractDaysFromDate(8),
  endDate: addOrSubtractDaysFromDate(80),
}, {
  id: '7',
  image: package7,
  title: "Jaipur Udaipur",
  duration: '5 days',
  price: 30000,
  rating: {
    star: 4.5,
    review: 321
  },
  category: 'Inbound Tour',
   categoryid: 'F516282',
   status: 'Active',
   subcategory: 'North India',
  subcategoryslug: 'northindia',
  subcategoryid: '1230BS',
  subcreatedOn: '12/11/2025',
  parentcategory: 'Inbound Tour',
  slug:'inbound-tour',
  createdOn: '12/10/2024',
  date: addOrSubtractDaysFromDate(9),
  endDate: addOrSubtractDaysFromDate(120),
 
}, {
  id: '8',
  image: package8,
  title: 'Seniors Special Rajsthan',
  duration: '6 days',
  price: 39000,
  rating: {
    star: 4.1,
    review: 190
  },
  category: 'Family Tour',
   categoryid: 'F516283',
   subcategory: 'Rajsthan',
   subcategoryslug: 'Rajsthan',
   subcategoryid: '1231BS',
   subcreatedOn: '12/12/2025',
   parentcategory:'Family Tour',
   status: 'Inactive',
  slug:'family-tour',
  createdOn: '13/08/2024',
  date: addOrSubtractDaysFromDate(7),
  endDate: addOrSubtractDaysFromDate(220)
}];

export const flightData=[  {
      airline: 'IndiGo',
      flightNo: '6E-203',
      from: 'Delhi (DEL)',
      to: 'Mumbai (BOM)',
      departure: '2025-10-18 08:30',
      arrival: '2025-10-18 10:30',
      duration: '2h 0m',
      notes: 'On Time'
    },
    {
      airline: 'Air India',
      flightNo: 'AI-101',
      from: 'Mumbai (BOM)',
      to: 'Bangalore (BLR)',
      departure: '2025-10-18 12:00',
      arrival: '2025-10-18 14:00',
      duration: '2h 0m',
      notes: 'Delayed 15 min'
    },]
    export const accomodationData=[
        {
      city: 'Munnar',
      country: 'India',
      hotel: 'Elysium Gardens Hill Resorts / Eastend Munnar / TBA / or similar',
      checkIn: '19 Feb',
      checkOut: '21 Feb'
    },
    {
      city: 'Cochin',
      country: 'India',
      hotel: 'Starlit Suites / Keys Select Hotel, Kochi Kerala / TBA - Cochin / or similar',
      checkIn: '21 Feb',
      checkOut: '22 Feb'
    }
    ]
    export const tourinfoData=[
      {
      tourName: "Rajasthan Delight Tour",
      inclusions: "Airfare, Hotels, Meals, Sightseeing, Insurance",
      exclusions: "Personal expenses, Optional tours",
      preparation: "Carry ID proof, light clothes, and medications",
      lastUpdated: "17 Oct 2025",
    },
    {
      tourName: "Goa Beach Escape",
      inclusions: "Accommodation, Meals, Transfers",
      exclusions: "Flight tickets, Alcoholic beverages",
      preparation: "Sunscreen, swimwear, beach slippers",
      lastUpdated: "15 Oct 2025",
    }
    ]
     export const reviewsData=[
      {
       reviewerName: 'John Doe',
      rating: 5,
      comment: 'Amazing tour! Everything was perfectly organized and hotels were top-notch.',
      date: '2025-10-15',
      status: 'Approved',
    },
    {
     reviewerName: 'Jane Smith',
      rating: 4,
      comment: 'Great experience, but the flight timings were slightly inconvenient.',
      date: '2025-10-10',
      status: 'Pending',
    }
    ]
export const userData = [{
  id: '101',
  name: 'Anna M. Hines',
  email: 'anna.hines@mail.com',
  phone: '(+1)-555-1564-261',
  enqdate: '12/09/2023',
  pkgname: 'Rajasthan Marwad',
  enqstatus: 'New',
  address: 'Burr Ridge/ Illinois',
  image: avatar1,
  message: 'How are you today?',
  time: addOrSubtractMinutesFromDate(10),
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
 
}, {
  id: '102',
  name: 'Judith H. Fritsche',
  email: 'judith.fritsche.com',
  phone: '(+57)-305-5579-759',
  address: 'SULLIVAN/Kentucky',
  image: avatar2,
  enqstatus: 'Contacted',
  pkgname:'Highlights of Rajsthan',
    enqdate: '12/12/2023',
  message: "Hey! a reminder for tommorow's tour..",
  time: addOrSubtractMinutesFromDate(20),
  location: 'New Jersey, USA',
  languages: ['English', 'German', 'Spanish'],
 
}];

export const ordersData = [{
  id: '1001',
  category: 'Group Tour',
  customerId: '101',
  paymentMethod: 'Credit Card',
  status: 'Completed',
  paymentStatus: 'Unpaid',
  total: 45000,
  amountDue: 8900,
  dueDate: '05-10-2025'
}, {
  id: '1002',
  customerId: '102',
  paymentMethod: 'Google Pay',
  status: 'Completed',
  paymentStatus: 'Paid',
  total: 35000,
  amountDue: 9902,
  dueDate: '01-09-2025'
}];

export const bookingData = [{
  id: '1001',
  image: package1,
  category: 'Group Tour',
  paymentMethod: 'Credit Card',
  bookingDate:'13/08/2025',
  travelerName: 'John Smith',
  packageName: 'Rajsthan Marwad',
  phone:'9987345678',
  travelDate: '15/09/2025',
  status: 'Completed',
  guests: '10',
  paymentStatus: 'Unpaid',
  totalAmt:40000,
  bookingId: 'FS16276',
  bookingStatus: 'completed',
}, {
  id: '1002',
  image: package2,
  category: 'Family Tour',
  paymentMethod: 'Google Pay',
  status: 'Completed',
   bookingDate:'13/08/2025',
   packageName:'Highlights of Rajsthan',
  travelerName: 'John Abrahm',
  travelDate: '20/08/2025',
  phone:'9987345678',
  guests:'5',
    bookingDate:'13/08/2025',
  paymentStatus: 'Paid',
  totalAmt:39000,
  bookingId: 'HB73029',
  bookingStatus: 'completed',
  
}];
export const warehouseData = [{
  id: '201',
  userId: '101',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY',
  
}, {
  id: '202',
  userId: '102',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY',
 
}, {
  id: '203',
  userId: '103',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY',
 
}, {
  id: '204',
  userId: '104',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY',
 
}, {
  id: '205',
  userId: '105',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY',
 
}, {
  id: '206',
  userId: '106',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY',
 
}, {
  id: '207',
  userId: '107',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY'
 
}, {
  id: '208',
  userId: '108',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY'
}, {
  id: '209',
  userId: '109',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY'
}, {
  id: '210',
  userId: '110',
  warehouseName: 'Central Fulfillment',
  location: '123 Commerce St, NY'
}];

export const citiesListData = [{
  cityname: 'Mumbai',
  stationname: 'International Airport',
  packagename:'Rajsthan Tour',
  country: 'India',
  option: 'Dropdown',
  date: addOrSubtractDaysFromDate(1)
}, 
{
  cityname: 'Mumbai',
  stationname: 'International Airport',
  country: 'India',
   packagename:'Rajsthan Tour',
  date: addOrSubtractDaysFromDate(1)
},
{
  cityname: 'Mumbai',
  stationname: 'International Airport',
  country: 'India',
   packagename:'Rajsthan Tour',
  date: addOrSubtractDaysFromDate(1)
},
{
  cityname: 'Mumbai',
  stationname: 'International Airport',
  country: 'India',
   packagename:'Rajsthan Tour',
  date: addOrSubtractDaysFromDate(1)
}
];
export const departureListData = [{
  packageName: 'Rajsthan Marwad',
 departureCity: 'Mumbai',
  departureDate:'18/10/2025',
  seatsAvailable:'30',
  price:'53,000',
  country: 'India',
  option: 'Dropdown',
  date: addOrSubtractDaysFromDate(1)
}, 
{
  cityname: 'Mumbai',
 departureCity: 'Mumbai',
  departureDate:'18/10/2025',
  seatsAvailable:'30',
  price:'53,000',
  country: 'India',
  option: 'Dropdown',
   packageName:'Highlights of Rajsthan',
  date: addOrSubtractDaysFromDate(1)
}];
export const itineraryListData = [{
  day: '1',
  title: 'Arrival at Jodhpur',
  sightseeing: 'Hawa Mahal , City Palace, Jantar Mantar',
  meals: 'Breakfast, Lunch, Dinner'
 
}, {
  day: '2',
  title: 'Arrival at Jodhpur',
  sightseeing: 'Hawa Mahal , City Palace, Jantar Mantar',
  meals: 'Breakfast, Lunch, Dinner'
 
}, {
  day: '3',
  title: 'Arrival at Jodhpur',
  sightseeing: 'Hawa Mahal , City Palace, Jantar Mantar',
  meals: 'Breakfast, Lunch, Dinner'
 
}, {
   day: '4',
  title: 'Arrival at Jodhpur',
  sightseeing: 'Hawa Mahal , City Palace, Jantar Mantar',
  meals: 'Breakfast, Lunch, Dinner'
 
}];

export const bannerListData = [{
  id: '1',
  image:package1,
  title:'Rajasthan Marwad',
  subtitle: 'Arrival at Jodhpur',
 linkedTo:'category:Group Tour',
 status:'Active',
 createdAt: addOrSubtractDaysFromDate(1),
order:2
 
}, {
   id: '2',
    title: "Discover Sikkim",
    subtitle: "Darjeeling Gangtok Special",
    image: package1,
    linkTo: "Category: India North East",
    order: 2,
    status: "Inactive",
    createdAt: "2025-10-10T14:00:00Z"
 
}, {
  id: '3',
    title: "Explore Europe",
    subtitle: "Starting from ₹1,15,000",
    image: "/images/banners/europe.jpg",
    linkTo: "Tour: Europe Highlights",
    order: 1,
    status: "Active",
    createdAt: "2025-10-12T10:00:00Z"
 
}];
export const roleListData = [{
  role: 'Admin',
  permissions: 'All Access',
  status: true,
  users: [{
    image: [avatar4, avatar3, avatar6],
    TextAvatar: [{
      text: 'p',
      variant: 'danger'
    }]
  }]
}, {
  role: 'Tour Manager',
  permissions: 'Manage Tours',
  users: [{
    image: [avatar6, avatar7],
    TextAvatar: [{
      text: '+12',
      variant: 'info'
    }]
  }]
}, {
  role: 'Booking Agent',
  permissions: 'Manage Bookings',
  status: true,
  users: [{
    image: [avatar10]
  }]
}, {
  role: 'Content Editor',
  permissions: 'View Reports',
  status:true, 
  users: [{
    image: [avatar10, avatar11, avatar12]
  }]
}];
export const permissionsList = [{
  name: 'User Management',
  title: 'Manage Users',
  role: 'Admin',
  assignedTo: ['Manager'],
  date: addOrSubtractDaysFromDate(1),
  lastUpdate: 'Today'
}, {
  name: 'Financial Management',
  title: 'Manage Finances',
  role: 'Manager',
  assignedTo: ['Administrator', 'Developer'],
  date: addOrSubtractDaysFromDate(10),
  lastUpdate: 'Yesterday'
}, {
  name: 'Content Management',
  title: 'Manage Tours',
  role: 'Editor',
  assignedTo: ['Manager', 'Administrator'],
  date: addOrSubtractDaysFromDate(100),
  lastUpdate: '06 Dec 2023'
}, {
  name: 'Payroll',
  title: 'Booking Reports',
  role: 'Agent',
  assignedTo: ['Manager', 'Administrator', 'Analyst', 'Trial'],
  date: addOrSubtractDaysFromDate(250),
  lastUpdate: '14 May 2024'
}, {
  name: 'Reporting',
  title: 'Manage Packages',
  assignedTo: ['Manager', 'Trial', 'Developer'],
  date: addOrSubtractDaysFromDate(150),
  lastUpdate: 'Today'
}, {
  name: 'API Controls',
  assignedTo: ['Manager', 'Analyst'],
  date: addOrSubtractDaysFromDate(70),
  lastUpdate: '10 Oct 2023'
}, {
  name: 'Disputes Management',
  assignedTo: ['Manager', 'Developer'],
  date: addOrSubtractDaysFromDate(120),
  lastUpdate: 'Yesterday'
}, {
  name: 'Database Management',
  assignedTo: ['Manager', 'Administrator', 'Developer'],
  date: addOrSubtractDaysFromDate(60),
  lastUpdate: 'Yesterday'
}, {
  name: 'Repository Management',
  assignedTo: ['Administrator', 'Developer'],
  date: addOrSubtractDaysFromDate(78),
  lastUpdate: '03 Dec 2023'
}];

export const reviewListData = [{
  id: '401',
  userId: '101',
  title: 'Travelled in December 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 4.5
}, {
  id: '402',
  userId: '102',
  title: 'Travelled in March 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 4.5
}, {
  id: '403',
  userId: '103',
  title: 'Travelled in October 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 4
}, {
  id: '404',
  userId: '104',
  title: 'Travelled in October 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 4.5
}, {
  id: '405',
  userId: '105',
  title: 'Travelled in May 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 4
}, {
  id: '406',
  userId: '106',
  title: 'Travelled in August 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 4.5
}, {
  id: '407',
  userId: '107',
  title: 'Travelled in May 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 2
}, {
  id: '408',
  userId: '108',
  title: 'Travelled in September 2023',
  description: '"We have enjoyed all your arrangements through out the tour. Especially, Indian food, sight seeing facility with Mr. Amit Nandoskar & Mr. Henry Kwok (local guide) for all days. Hotel accommodation are also very good. Mr. Amit Nandoskar has taken personal care of all senior citizen - Especially Mr. Surendra Sanghvi from Ahmedabad. We are thankful to choose Veena World."',
  rating: 3
}];
export const socialGroupsData = [{
  id: '501',
  image: avatar1,
  name: 'Interior Design & Architech',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 23345,
  friends: true
}, {
  id: '502',
  image: avatar2,
  name: 'Event Management',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 26312,
  joined: true
}, {
  id: '503',
  image: avatar3,
  name: 'Commercial University, Delhi.',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 39678,
  friends: true
}, {
  id: '504',
  image: avatar4,
  name: 'Tourist Place of Potland',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 2345,
  friends: true
}, {
  id: '505',
  image: avatar5,
  name: 'Promote Your Business',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 7980,
  suggested: true
}, {
  id: '506',
  image: avatar6,
  name: 'The Greasy Mullets',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 98231,
  suggested: true
}, {
  id: '507',
  image: avatar7,
  name: 'Tourist Place of Portland',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 2015,
  joined: true
}, {
  id: '508',
  image: avatar8,
  name: 'UI / UX Design',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 1450,
  joined: true
}, {
  id: '509',
  image: avatar9,
  name: 'Music Circle',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 9387,
  friends: true
}, {
  id: '510',
  image: avatar1,
  name: 'Travelling The World',
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  membersCount: 25800020,
  joined: true
}];
export const messages = [];
const defaultTo = {
  id: '112',
  mutualCount: 56,
  name: 'Gilbert Chicoine',
  image: avatar10,
  email: 'jamesbridge@teleworm.us',
  message: 'Hey! Okay, thank you for letting me know. See you!',
  time: addOrSubtractMinutesFromDate(650),
  phone: '456 9595 9594',
  location: 'California, USA',
  languages: ['English', 'German', 'Spanish'],
  activityStatus: 'online',
  compony: 'Kaika Hill, CEO',
  position: 'Hill & CO',
  address: 'Burr Ridge/ Illinois'
};
for (const user of userData) {
  messages.push({
    id: '101',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: 'Hey 😊'
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '102',
    to: user,
    from: defaultTo,
    message: {
      type: 'text',
      value: 'Hii'
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '103',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: "Hi Gaston, thanks for joining the meeting. Let's dive into our quarterly performance review."
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '104',
    to: user,
    from: defaultTo,
    message: {
      type: 'text',
      value: "Hi Gilbert, thanks for having me. I'm ready to discuss how things have been going."
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '105',
    to: defaultTo,
    from: user,
    message: {
      type: 'file',
      value: [{
        preview: small1
      }, {
        preview: small2
      }, {
        preview: small3
      }]
    },
    sentOn: addOrSubtractMinutesFromDate(110)
  }, {
    id: '106',
    to: user,
    from: defaultTo,
    message: {
      type: 'file',
      value: [{
        name: 'financial-report-2024.zip',
        size: 2.3
      }]
    },
    sentOn: addOrSubtractMinutesFromDate(20)
  }, {
    id: '107',
    to: defaultTo,
    from: user,
    message: {
      type: 'text',
      value: "Thanks, Emily. I appreciate your support. Overall, I'm optimistic about our team's performance and looking forward to tackling new challenges in the next quarter."
    },
    sentOn: addOrSubtractMinutesFromDate(10)
  });
}