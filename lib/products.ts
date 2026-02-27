export type Product = {
  id: string
  name: string
  category: string
  description: string
  image: string
  weight: string[]
}

export const categories = [
  "All",
  "Ground Spices",
  "Blended Masala",
  "Whole Spices",
] as const

export const products: Product[] = [
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Ground Spices",
    description:
      "Pure and vibrant turmeric powder sourced from the finest farms. Rich golden color and earthy aroma.",
    image: "/images/products/turmeric-powder.jpg",
    weight: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: "chili-powder",
    name: "Red Chili Powder",
    category: "Ground Spices",
    description:
      "Premium red chili powder with the perfect balance of heat and color. Ideal for all Indian recipes.",
    image: "/images/products/chili-powder.jpg",
    weight: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    category: "Ground Spices",
    description:
      "Freshly ground coriander with a mild, nutty flavor. A kitchen essential for everyday cooking.",
    image: "/images/products/coriander-powder.jpg",
    weight: ["100g", "250g", "500g", "1kg"],
  },
  {
    id: "cumin-powder",
    name: "Cumin Powder",
    category: "Ground Spices",
    description:
      "Aromatic cumin powder with a warm, earthy flavor. Perfect for curries, rice dishes, and more.",
    image: "/images/products/cumin-powder.jpg",
    weight: ["100g", "250g", "500g"],
  },
  {
    id: "garam-masala",
    name: "Garam Masala",
    category: "Blended Masala",
    description:
      "Our signature blend of aromatic spices including cardamom, cinnamon, cloves, and more.",
    image: "/images/products/garam-masala.jpg",
    weight: ["50g", "100g", "250g", "500g"],
  },
  {
    id: "kitchen-king",
    name: "Kitchen King Masala",
    category: "Blended Masala",
    description:
      "An all-purpose masala blend that adds instant flavor to any vegetable or gravy dish.",
    image: "/images/products/kitchen-king.jpg",
    weight: ["50g", "100g", "250g"],
  },
  {
    id: "pav-bhaji-masala",
    name: "Pav Bhaji Masala",
    category: "Blended Masala",
    description:
      "Authentic Maharashtrian pav bhaji masala blend with the perfect mix of spices for street-style flavor.",
    image: "/images/products/pav-bhaji-masala.jpg",
    weight: ["50g", "100g", "250g"],
  },
  {
    id: "biryani-masala",
    name: "Biryani Masala",
    category: "Blended Masala",
    description:
      "A fragrant blend of whole and ground spices crafted for the perfect biryani every time.",
    image: "/images/products/biryani-masala.jpg",
    weight: ["50g", "100g", "250g"],
  },
  {
    id: "sambhar-masala",
    name: "Sambhar Masala",
    category: "Blended Masala",
    description:
      "Traditional South Indian sambhar masala with roasted spices for authentic flavor.",
    image: "/images/products/sambhar-masala.jpg",
    weight: ["50g", "100g", "250g"],
  },
  {
    id: "chat-masala",
    name: "Chat Masala",
    category: "Blended Masala",
    description:
      "Tangy and zesty chat masala perfect for salads, fruits, and snacks. Adds an instant punch of flavor.",
    image: "/images/products/chat-masala.jpg",
    weight: ["50g", "100g", "250g"],
  },
  {
    id: "black-pepper",
    name: "Black Pepper (Whole)",
    category: "Whole Spices",
    description:
      "Premium quality whole black peppercorns with a bold, pungent aroma and sharp flavor.",
    image: "/images/products/black-pepper.jpg",
    weight: ["50g", "100g", "250g"],
  },
]
