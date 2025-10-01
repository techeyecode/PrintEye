export interface CardItem {
  id: number;
  label: string;
  count: string;
  image: string;
  link: string;
  category?: string;
}

export const SpiralNotepad: CardItem[] = [
  {
    id: 1,
    label: "Standard Spiral Notepad",
    count: "$12.99",
    image:
      "https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/686cd16c1e4bf98d0c659e21_ZWc.webp",
    link: "/products/notepads/order?type=spiral&size=101&paper=1&quantity=50",
    category: "spiral-notepad",
  },
  {
    id: 2,
    label: "Premium Spiral Notepad",
    count: "$18.50",
    image:
      "https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/686cd16c1e4bf98d0c659e21_ZWc.webp",
    link: "/products/notepads/order?type=spiral&size=102&paper=2&quantity=50",
    category: "spiral-notepad",
  },
  {
    id: 3,
    label: "Executive Spiral Notepad",
    count: "$24.75",
    image:
      "https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/686cd16c1e4bf98d0c659e21_ZWc.webp",
    link: "/products/notepads/order?type=spiral&size=103&paper=3&quantity=50",
    category: "spiral-notepad",
  },
  {
    id: 4,
    label: "Custom Spiral Notepad",
    count: "$15.25",
    image:
      "https://cdn.prod.website-files.com/63ff7c6ecc83f9ec7ffe916b/686cd16c1e4bf98d0c659e21_ZWc.webp",
    link: "/products/notepads/order?type=spiral&size=104&paper=4&quantity=50",
    category: "spiral-notepad",
  },
];

export const NotepadCover: CardItem[] = [
  {
    id: 5,
    label: "Hard Cover Notepad",
    count: "$22.99",
    image:
      "https://images.ctfassets.net/9htf9uzhsn4z/1qS8SZtcvhuDW0jn1d7CXm/6b954270ecfcea83199df52cc081fe2e/lulu-notebooks-popular-formats-a5-2x.jpg?w=2880&h=960&fm=webp",
    link: "/products/notepads/order?type=with-cover&cover=hard&size=201&paper=1&quantity=50",
    category: "notepad-with-cover",
  },
  {
    id: 6,
    label: "Soft Cover Notepad",
    count: "$16.50",
    image:
      "https://images.ctfassets.net/9htf9uzhsn4z/2CoU2vFAPunOLsLRdiG0SH/a20cb5c65cea1119ecb22670e9bdbf43/lulu-notebooks-popular-formats-us-trade-2x.jpg?w=2880&h=960&fm=webp",
    link: "/products/notepads/order?type=with-cover&cover=soft&size=202&paper=2&quantity=50",
    category: "notepad-with-cover",
  },
  {
    id: 7,
    label: "Leather Cover Notepad",
    count: "$35.75",
    image:
      "https://images.ctfassets.net/9htf9uzhsn4z/3UaKJPYf99iOfasAJWIK8k/764563d026dbcb6da8c9e8dd097671ae/lulu-notebooks-popular-formats-us-letter-2x.jpg?w=2880&h=960&fm=webp",
    link: "/products/notepads/order?type=with-cover&cover=leather&size=203&paper=3&quantity=50",
    category: "notepad-with-cover",
  },
  {
    id: 8,
    label: "Clear Cover Notepad",
    count: "$19.99",
    image:
      "https://images.ctfassets.net/9htf9uzhsn4z/1qS8SZtcvhuDW0jn1d7CXm/6b954270ecfcea83199df52cc081fe2e/lulu-notebooks-popular-formats-a5-2x.jpg?w=2880&h=960&fm=webp",
    link: "/products/notepads/order?type=with-cover&cover=clear&size=204&paper=4&quantity=50",
    category: "notepad-with-cover",
  },
];

export const NotepadWithoutACover: CardItem[] = [
  {
    id: 9,
    label: "Basic Notepad Pack",
    count: "$8.99",
    image:
      "https://res.cloudinary.com/unitedprint-com-se/image/upload/c_fill,f_auto,h_250,q_auto::best/v1/master/px7y48yj7zsoohg588yi",
    link: "/products/notepads/order?type=without-cover&size=301&paper=1&quantity=100",
    category: "notepad-without-cover",
  },
  {
    id: 10,
    label: "Premium Bond Notepad",
    count: "$14.25",
    image:
      "https://res.cloudinary.com/unitedprint-com-se/image/upload/c_fill,f_auto,h_250,q_auto::best/v1/master/px7y48yj7zsoohg588yi",
    link: "/products/notepads/order?type=without-cover&size=302&paper=2&quantity=100",
    category: "notepad-without-cover",
  },
  {
    id: 11,
    label: "Recycled Notepad",
    count: "$11.50",
    image:
      "https://res.cloudinary.com/unitedprint-com-se/image/upload/c_fill,f_auto,h_250,q_auto::best/v1/master/px7y48yj7zsoohg588yi",
    link: "/products/notepads/order?type=without-cover&size=303&paper=3&quantity=100",
    category: "notepad-without-cover",
  },
  {
    id: 12,
    label: "Grid Notepad",
    count: "$10.75",
    image:
      "https://res.cloudinary.com/unitedprint-com-se/image/upload/c_fill,f_auto,h_250,q_auto::best/v1/master/px7y48yj7zsoohg588yi",
    link: "/products/notepads/order?type=without-cover&size=304&paper=4&quantity=100",
    category: "notepad-without-cover",
  },
];

export const Cube: CardItem[] = [
  {
    id: 13,
    label: "Standard Cube Notepad",
    count: "$28.50",
    image: "https://m.media-amazon.com/images/I/710Y2sULLEL._AC_UL320_.jpg",
    link: "/products/notepads/order?type=cube&size=401&paper=1&quantity=25",
    category: "notepad-cube",
  },
  {
    id: 14,
    label: "Mini Cube Notepad",
    count: "$19.99",
    image: "https://m.media-amazon.com/images/I/710Y2sULLEL._AC_UL320_.jpg",
    link: "/products/notepads/order?type=cube&size=402&paper=2&quantity=25",
    category: "notepad-cube",
  },
  {
    id: 15,
    label: "Jumbo Cube Notepad",
    count: "$45.75",
    image: "https://m.media-amazon.com/images/I/51yCKhEP84L._AC_UL320_.jpg",
    link: "/products/notepads/order?type=cube&size=403&paper=3&quantity=25",
    category: "notepad-cube",
  },
  {
    id: 16,
    label: "Custom Cube Notepad",
    count: "$32.25",
    image: "https://m.media-amazon.com/images/I/51yCKhEP84L._AC_UL320_.jpg",
    link: "/products/notepads/order?type=cube&size=404&paper=4&quantity=25",
    category: "notepad-cube",
  },
];

export const Footed: CardItem[] = [
  {
    id: 17,
    label: "Standard Footed Notepad",
    count: "$15.99",
    image:
      "https://i.etsystatic.com/58125950/r/il/075b6d/6879422264/il_600x600.6879422264_j0gf.jpg",
    link: "/products/notepads/order?type=footed&size=501&paper=1&quantity=50",
    category: "footed-notepad",
  },
  {
    id: 18,
    label: "Executive Footed Notepad",
    count: "$24.50",
    image:
      "https://i.etsystatic.com/58125950/r/il/075b6d/6879422264/il_600x600.6879422264_j0gf.jpg",
    link: "/products/notepads/order?type=footed&size=502&paper=2&quantity=50",
    category: "footed-notepad",
  },
  {
    id: 19,
    label: "Premium Footed Notepad",
    count: "$29.75",
    image:
      "https://i.etsystatic.com/58125950/r/il/075b6d/6879422264/il_600x600.6879422264_j0gf.jpg",
    link: "/products/notepads/order?type=footed&size=503&paper=3&quantity=50",
    category: "footed-notepad",
  },
  {
    id: 20,
    label: "Custom Footed Notepad",
    count: "$18.25",
    image:
      "https://i.etsystatic.com/58125950/r/il/075b6d/6879422264/il_600x600.6879422264_j0gf.jpg",
    link: "/products/notepads/order?type=footed&size=504&paper=4&quantity=50",
    category: "footed-notepad",
  },
];

export const AllNotepads: CardItem[] = [
  ...SpiralNotepad,
  ...NotepadCover,
  ...NotepadWithoutACover,
  ...Cube,
  ...Footed,
];
