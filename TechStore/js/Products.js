class Products {
  #stock;
  constructor(name, image, price, description, processor, stock) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
    this.processor = processor;
    this.#stock = stock;
  }

  getStock() {
    return this.#stock;
  }

  reduceStock() {
    if (this.#stock > 0) {
      this.#stock--; //posibles cambios
    }
  }
}

class Laptop extends Products {}

class SmartPhone extends Products {
  constructor(
    name,
    image,
    price,
    description,
    processor,
    camera,
    storage,
    batery,
    stock
  ) {
    super(name, image, price, description, processor, stock);
    this.camera = camera;
    this.storage = storage;
    this.batery = batery;
  }
}

class PCs extends Products {
  constructor(
    name,
    image,
    price,
    description,
    processor,
    ram,
    storage,
    gpu,
    stock
  ) {
    super(name, image, price, description, processor, stock);
    this.ram = ram;
    this.storage = storage;
    this.gpu = gpu;
  }
}

// --> LAPTOPS
const AsusROGZephyrusG14 = new Laptop(
  "Asus ROG Zephyrus G14",
  "./images/Asus ROG Zephyrus G14.webp",
  "$ 11.285.204 COP",
  "Laptop gamer ultra potente con Ryzen 9",
  10,
  "AMD Ryzen 9"
);

const MacBookPro14 = new Laptop(
  'MacBookPro 14"', //<- Name
  "./images/MacBookPro14.webp", //<- rute of image
  "$13,499,000 COP", //<- price
  "Diseño elegante y potente para profesionales", //<- description
  7, //<- stock
  "Apple M2 Pro" //<- aditional
);

// PCS

const AlienwareAuroraR13 = new PCs(
  "Alienware Aurora R13", //<- Name
  "./images/AlienwareAuroraR13.webp", //<- rute of image
  "$11,872,065 COP", //<- price
  "Potente PC para gaming y edición", //<- description
  "Intel i9-12900KF", //<- aditional
  "32GB DDR5",
  "1TB SSD + 2TB HDD",
  "NVIDIA RTX 3080",
  5 //<- stock
);

const HPPavilionGaming = new PCs(
  "HP Pavilion Gaming", //<- Name
  "./images/CorsairVengeancei7500.webp", //<- rute of image
  "$13,502,948 COP", //<- price
  "Torre de alto rendimiento ideal para juegos AAA y productividad", //<- description
  "Intel Core i7-14700K", //<- aditional
  "32GB DDR5",
  "1TB NVMe SSD",
  "NVIDIA GeForce RTX 4070 Ti",
  7 //<- stock
);

// SMART PHONES
const iPhone15Pro = new SmartPhone(
  "iPhone 15 Pro", //<- Name
  "./images/iPhone15pro.webp", //<- rute of image
  "$4,899,900 COP", //<- price
  "Potencia y cámara profesional en tu bolsillo", //<- description
  "A17 Bionic", //<- aditional
  "Triple (48MP + 12MP + 12MP)",
  "256GB",
  "3200 mAh",
  15 //<- stock
);

const SamsungGalaxyS24Ultra = new SmartPhone(
  "Samsung Galaxy S24 Ultra", //<- Name
  "./images/samsungs24ultra.webp", //<- rute of image
  "$3,999,900 COP", //<- price
  "Pantalla AMOLED y cámara de 200MP", //<- description
  "Snapdragon 8 Gen 3", //<- aditional
  "Cuádruple (200MP + 50MP + 12MP + 10MP)",
  "512GB",
  "5000 mAh",
  12 //<- stock
);

const AllProducts = [
  AsusROGZephyrusG14,
  MacBookPro14,
  AlienwareAuroraR13,
  HPPavilionGaming,
  iPhone15Pro,
  SamsungGalaxyS24Ultra,
];
