export const categories = [
  // ... tus categorías existentes
  {
    id: 1,
    name: "Pisos y paredes",
    image: "https://vinisol.com.co/wp-content/uploads/2020/08/pisos-paredes.jpg",
    link: "/category/pisos",
  },
  {
    id: 2,
    name: "Baños",
    image: "https://www.aquitureforma.com/wp-content/uploads/2021/12/materiales-para-reformar-un-bano.jpg",
    link: "/category/banos",
  },
  {
    id: 3,
    name: "Cocinas",
    image: "https://www.ikea.com/images/vista-frontal-de-una-cocina-con-muebles-metod-sin-tiradores--d05a4509d8bc9d2866a4e415a797a7f7.jpg?f=s",
    link: "/category/cocinas",
  },
  {
    id: 4,
    name: "Pinturas",
    image: "data:image/jpeg;base64,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",
    link: "/category/pinturas",
  },
];

export const featuredProducts = [
  // ... tus productos destacados existentes
   {
    id: 1,
    name: "Cerámica para pisos",
    image: "https://ayda.com.co/wp-content/uploads/2023/02/instalacion-ceramica_porcelanato_1-345x523.jpg",
    ref: "REF 903102711",
  },
  {
    id: 2,
    name: "Mosaico decorativo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5jMTPaDHMhXqFGlVACMrlm8k9iivzPmSjQ&s",
    ref: "REF 517084791",
  },
  {
    id: 3,
    name: "Cerámica de pared",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgY1_1EKKMwhNDVt2pOxltAx1Agy-Z92Ohw&s",
    ref: "REF 602911791",
  },
  {
    id: 4,
    name: "Grifería dorada",
    image: "https://ceramicaitalia.vtexassets.com/assets/vtex.file-manager-graphql/images/7b9a64a6-9678-4be8-9dd0-c56eb1b7590f___3fc723a37f4eedea3c1cae33796bc9c0.jpg",
    ref: "REF CA1110001",
  },
];


// Mock data for B2C recommendations
export const b2cRecommendationsMock = [
    {
      id: 101,
      nombre: "Grifería de lavamanos moderna",
      marca: "Corona",
      precio: "250.000",
      imagen: "https://www.corona.co/wcs/stores/servlet/ProductDisplay?urlRequestType=Base&catalogId=10001&categoryId=10001&productId=100001&errorViewName=ProductDisplayErrorView&langId=-5&top_category=10001&parent_category_rn=10001&storeId=10001" // Placeholder or actual image URL
    },
    {
      id: 102,
      nombre: "Piso laminado efecto madera",
      marca: "Lamitech",
      precio: "80.000/m²",
      imagen: "https://via.placeholder.com/150"
    },
     {
      id: 103,
      nombre: "Juego de sanitarios compactos",
      marca: "Corona",
      precio: "850.000",
      imagen: "https://via.placeholder.com/150"
    },
    {
      id: 104,
      nombre: "Pintura acrílica interior",
      marca: "Pintuco",
      precio: "120.000/galón",
      imagen: "https://via.placeholder.com/150"
    },
    {
      id: 105,
      nombre: "Baldosa para ducha antideslizante",
      marca: "Cerámica Italia",
      precio: "65.000/m²",
      imagen: "https://via.placeholder.com/150"
    },
     {
      id: 106,
      nombre: "Lavaplatos de acero inoxidable",
      marca: "Socoda",
      precio: "300.000",
      imagen: "https://via.placeholder.com/150"
    },
     {
      id: 107,
      nombre: "Kit de accesorios para baño",
      marca: "Grival",
      precio: "150.000",
      imagen: "https://via.placeholder.com/150"
    },
    // Add more mock B2C products as needed
];