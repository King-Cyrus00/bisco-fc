// galleryData.jsx
// Import your images here
// import image1 from '../assets/images/gallery/image1.jpg';
// import image2 from '../assets/images/gallery/image2.jpg';
// ... etc

export const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    alt: "Young player in action during training",
    category: "training",
    featured: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80",
    alt: "Team training session on the pitch",
    category: "training",
    featured: true,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=800&q=80",
    alt: "Football close-up on grass",
    category: "equipment",
    featured: true,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80",
    alt: "Players celebrating victory",
    category: "matches",
    featured: true,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    alt: "Stadium night view with lights",
    category: "stadium",
    featured: true,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1541622571-57fe5c507f0e?auto=format&fit=crop&w=800&q=80",
    alt: "Team huddle before match",
    category: "matches",
    featured: false,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80",
    alt: "Youth players during practice",
    category: "training",
    featured: false,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    alt: "Players warming up",
    category: "training",
    featured: false,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=800&q=80",
    alt: "Goal celebration moment",
    category: "matches",
    featured: false,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1567198690639-43b59e8d7e8e?auto=format&fit=crop&w=800&q=80",
    alt: "Team photo on field",
    category: "team",
    featured: false,
  },
  // Add more images as needed
];

// Helper function to get featured images only
export const getFeaturedImages = () => {
  return galleryData.filter(image => image.featured);
};

// Helper function to get images by category
export const getImagesByCategory = (category) => {
  return galleryData.filter(image => image.category === category);
};

// Helper function to get all categories
export const getCategories = () => {
  const categories = [...new Set(galleryData.map(image => image.category))];
  return categories;
};

export default galleryData;