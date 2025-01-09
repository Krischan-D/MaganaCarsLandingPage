// import { carData } from "./modalscript.js"; 
 
 export const car_information = [
      {
        id: "2",
        brand: "Hyundai",
        model_name: "Tucson",
        image: 'images/recommendCars/tucson.avif',
        model_year: "2020",
        color: "Winter White, Aqua Blue",
        price: "₱1,350,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded",
          transmission: "Automatic",
          engine_displacement: "1.6 L/98",
          seats: "5",
        },
      },
      {
        id: "3",
        brand: "Hyundai",
        model_name: "Santa Fe",
        model_year: "2022",
        color: "Stormy Sea, Calypso Red",
        price: "₱2,100,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded",
          transmission: "Automatic",
          engine_displacement: "2.5 L/152",
          seats: "5",
        },
      },
      {
        id: "4",
        brand: "Hyundai",
        model_name: "Kona",
        image:'images/recommendCars/kona.avif',
        model_year: "2022",
        color: "Blue Wave, Pulse Red",
        price: "₱1,250,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded",
          transmission: "Automatic",
          engine_displacement: "2.0 L/122",
          seats: "5",
        },
      },
      {
        id: "5",
        brand: "Toyota",
        model_name: "Corolla",
        image:'images/recommendCars/corolla.avif',
        model_year: "2023",
        color: "White, Blue",
        price: "₱1,200,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded",
          transmission: "Automatic",
          engine_displacement: "2.0 L/121",
          seats: "5",
        },
      },
      {
        id: "6",
        brand: "Toyota",
        model_name: "Supra",
        model_year: "2023",
        color: "White",
        price: "₱5,000,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded",
          transmission: "Automatic, Manual",
          engine_displacement: "3.0 L I-6",
          seats: "2",
        },
      },
      {
        id: "7",
        brand: "Toyota",
        model_name: "Camry",
        model_year: "2024",
        color: "White",
        price: "₱2,300,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded",
          transmission: "Automatic",
          engine_displacement: "2.5 L/152",
          seats: "5",
        },
      },
      {
        id: "8",
        brand: "Toyota",
        model_name: "Avalon",
        model_year: "2020",
        color: "Silver Metallic",
        price: "₱2,800,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded V-6",
          transmission: "Automatic",
          engine_displacement: "3.5 L/211",
          seats: "5",
        },
      },
      {
        id: "9",
        brand: "Mitsubishi",
        model_name: "Mirage G4",
        image:'images/recommendCars/mirage.avif',
        model_year: "2020",
        color: "Silver Metallic",
        price: "₱750,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded I-3",
          transmission: "Automatic",
          engine_displacement: "1.2 L/73",
          seats: "5",
        },
      },
      {
        id: "10",
        brand: "Mitsubishi",
        model_name: "Outlander",
        model_year: "2020",
        color: "White",
        price: "₱1,800,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded I-4",
          transmission: "Automatic",
          engine_displacement: "2.5 L/152",
          seats: "7",
        },
      },
      {
        id: "11",
        brand: "Mitsubishi",
        model_name: "Lancer Evolution",
        model_year: "2015",
        color: "Cream White",
        price: "₱2,500,000", // Added price
        specifications: {
          fuel_type: "Intercooled Turbo Premium Unleaded I-4",
          transmission: "Automatic",
          engine_displacement: "2.0 L/122",
          seats: "5",
        },
      },
      {
        id: "12",
        brand: "Mitsubishi",
        model_name: "Eclipse Cross",
        model_year: "2024",
        color: "Calypso Red",
        price: "₱1,700,000", // Added price
        specifications: {
          fuel_type: "Intercooled Turbo Regular Unleaded I-4",
          transmission: "Automatic",
          engine_displacement: "1.5 L/91",
          seats: "6",
        },
      },
      {
        id: "13",
        brand: "Nissan",
        model_name: "Altima",
        model_year: "2024",
        color: "Metallic Black",
        price: "₱1,900,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded I-4",
          transmission: "Automatic",
          engine_displacement: "2.5 L/152",
          seats: "5",
        },
      },
      {
        id: "14",
        brand: "Nissan",
        model_name: "Maxima",
        model_year: "2023",
        color: "Dark Gray Metallic",
        price: "₱2,400,000", // Added price
        specifications: {
          fuel_type: "Premium Unleaded V-6",
          transmission: "Automatic",
          engine_displacement: "3.5 L/213",
          seats: "5",
        },
      },
      {
        id: "15",
        brand: "Nissan",
        model_name: "Frontier",
        model_year: "2024",
        color: "Silver Metallic",
        price: "₱1,600,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded V-6",
          transmission: "Automatic",
          engine_displacement: "3.8 L/231",
          seats: "5",
        },
      },
      {
        id: "16",
        brand: "Nissan",
        model_name: "GT-R",
        model_year: "2024",
        color: "Dirty-White Metallic",
        price: "₱8,500,000", // Added price
        specifications: {
          fuel_type: "Regular Unleaded V-6",
          transmission: "Automatic",
          engine_displacement: "3.5 L/211",
          seats: "2",
        },
      },
    ];

  export const carData = {
    Toyota: {
      logo: "./assets/logos/toyota_logo.png",
      description: "Toyota, a Japanese multinational corporation and one of the largest car manufacturers globally. Toyota is recognized for its durability, innovation in hybrid technology (e.g., Prius), and a commitment to sustainability with a broad lineup ranging from economy cars to luxury vehicles.",
      cars: [
        { name: "AVALON", image: "./assets/Toyota/Avalon_2020Model.png" },
        { name: "CAMRY", image: "./assets/Toyota/Camry_2024Model.png" },
        { name: "COROLLA", image: "./assets/Toyota/Corolla_2023Model.png" },
        { name: "SUPRA", image: "./assets/Toyota/Supra_2023Model.png" },
      ],
    },
    Mitsubishi: {
      logo: "./assets/logos/mitsubishi_logo.png",
      description: "Mitsubishi Motors, a Japanese brand with a diverse range of vehicles, including compact cars, SUVs, and electric vehicles. Mitsubishi is known for its rugged 4WD models and a strong presence in motorsports, especially rally racing.",
      cars: [
        { name: "OUTLANDER", image: "./assets/Mitsubishi/Outlander_2024Model.png" },
        { name: "LANCER EVO", image: "./assets/Mitsubishi/LancerEvo_2015Model.png" },
        { name: "MIRAGE G4", image: "./assets/Mitsubishi/MirageG4_2024Model.png" },
        { name: "ECLIPSE CROSS", image: "./assets/Mitsubishi/EclipseCross_2024Blue.png" },
      ],
    },
    Nissan: {
      logo: "./assets/logos/nissan_logo.png",
      description: "Nissan, another leading Japanese automaker, Nissan is known for its reliable cars, trucks, and SUVs. The brand is also a pioneer in electric vehicles, with models like the Nissan Leaf. Nissan emphasizes technology, performance, and design in its offerings.",
      cars: [
        { name: "ALTIMA", image: "./assets/Nissan/Altima_2024Model.png" },
        { name: "FRONTIER", image: "./assets/Nissan/Frontier_2024Model.png" },
        { name: "GT-R", image: "./assets/Nissan/GT-R_2024Model.png" },
        { name: "MAXIMA", image: "./assets/Nissan/Maxima_2024Model.png" },
      ],
    },
    Hyundai: {
      logo: "./assets/logos/hyundai_logo.png",
      description: "Hyundai, A South Korean automaker known for producing affordable, reliable, and technologically advanced cars. Hyundai has made a name for itself with its emphasis on fuel efficiency, safety, and quality warranties.",
      cars: [
        { name: "ACCENT", image: "./assets/Hyundai/accent_2022Model.png" },
        { name: "KONA", image: "./assets/Hyundai/Kona_2022Model.png" },
        { name: "SANTA FE", image: "./assets/Hyundai/SantaFe_2022Model.png" },
        { name: "TUCSON", image: "./assets/Hyundai/Tucson_2022Model.png" },
      ],
    },
  };


function filterRecommendCars(array, maxPrice){
    return array.filter((car)=>{
        const price = Number(car.price.replace(/[^0-9]/g, ""))
        return price < maxPrice
    });
}
  
const maxPrice = 1500000
const recommendedCars = filterRecommendCars(car_information, maxPrice)

export function renderRecommendedCars() {
    let recommendedCarsHTML = '';

    recommendedCars.forEach((car) => {
        recommendedCarsHTML += `
        <div class="car-card">
          <div class="img-container"> <img src="${car.image}"alt=""></div>
          <div class="car-information">
            <h1>${car.model_name}</h1>
            <div class="car-specification-container">
              <div class="car-specifications">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <p>${car.specifications.fuel_type}</p>                
              </div>
              <div class="car-specifications">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <p>${car.specifications.transmission}</p>                
              </div>
              <div class="car-specifications">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <p>${car.specifications.engine_displacement}</p>                
              </div>
              <div class="car-specifications">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                <p>${car.specifications.seats} seats</p>                
              </div>
            </div>
            <div class="price-button">
              <span>${car.price}</span>
              <button>View</button>
            </div>
          </div>
        </div>
        `;
    });

    document.getElementById('cars-container').innerHTML = recommendedCarsHTML;
}

renderRecommendedCars();

function addCarImages(car_information, carData) {
  return car_information.map(car => {
    const brandData = carData[car.brand];
    if (brandData) {
      const carImage = brandData.cars.find(c => c.name.toUpperCase() === car.model_name.toUpperCase());
      if (carImage) {
        // Add a new property `car_image` without modifying the existing `image`
        return { ...car, car_image: carImage.image };
      }
    }
    // If no matching image is found, return the car object as is
    return car;
  });
}

// Add car images from carData to car_information
export const updatedCarInformation = addCarImages(car_information, carData);

console.log(updatedCarInformation);