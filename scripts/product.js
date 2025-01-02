const car_information = [
    {
        id: "2",
        brand: "Hyundai",
        model_name: "Tucson",
        model_year: "2020",
        color: "Winter White, Aqua Blue",
        specifications: {
            fuel_type: "Regular Unleaded",
            transmission: "Automatic",
            engine_displacement: "1.6 L/98",
            seats: "5",
        }
    },

    {
        id: "3",
        brand: "Hyundai",
        model_name: "Santa Fe",
        model_year: "2022",
        color: "Stormy Sea, Calypso Red",
        specifications: {
            fuel_type: "Regular Unleaded",
            transmission: "Automatic",
            engine_displacement: "2.5 L/152",
            seats: "5",
        }
    },

    {
        id: "4",
        brand: "Hyundai",
        model_name: "Kona",
        model_year: "2022",
        color: "Blue Wave, Pulse Red",
        specifications: {
            fuel_type: "Regular Unleaded",
            transmission: "Automatic",
            engine_displacement: "2.0 L/122",
            seats: "5",
        }
    },

    {
        id: "5",
        brand: "Toyota",
        model_name: "Corolla",
        model_year: "2023",
        color: "White, Blue",
        specifications: {
            fuel_type: "Regular Unleaded",
            transmission: "Automatic",
            engine_displacement: "2.0 L/121",
            seats: "5",
        }
    },

    {
        id: "6",
        brand: "Toyota",
        model_name: "Supra",
        model_year: "2023",
        color: "White",
        specifications: {
            fuel_type: "Regular Unleaded",
            transmission: "Automatic, Manual",
            engine_displacement: "3.0 L I-6",
            seats: "2",
        }
    },

    {
        id: "7",
        brand: "Toyota",
        model_name: "Camry",
        model_year: "2024",
        color: "White",
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
        specifications: {
            fuel_type: "Regular Unleaded V-6",
            transmission: "Automatic",
            engine_displacement: "3.5 L/211",
            seats: "5",
        }
    },

    {
        id: "9",
        brand: "Mitsubishi",
        model_name: "Mirage G4",
        model_year: "2020",
        color: "Silver Metallic",
        specifications: {
            fuel_type: "Regular Unleaded I-3",
            transmission: "Automatic",
            engine_displacement: "1.2 L/73",
            seats: "5",
        }
    },

    {
        id: "10",
        brand: "Mitsubishi",
        model_name: "Outlander",
        model_year: "2020",
        color: "White",
        specifications: {
            fuel_type: "Regular Unleaded I-4",
            transmission: "Automatic",
            engine_displacement: "2.5 L/152",
            seats: "7",
        }
    },

    {
        id: "11",
        brand: "Mitsubishi",
        model_name: "Lancer Evolution",
        model_year: "2015",
        color: "Cream White",
        specifications: {
            fuel_type: "Intercooled Turbo Premium Unleaded I-4",
            transmission: "Automatic",
            engine_displacement: "2.0 L/122",
            seats: "5",
        }
    },

    {
        id: "12",
        brand: "Mitsubishi",
        model_name: "Eclipse Cross",
        model_year: "2024",
        color: "Calypso Red",
        specifications: {
            fuel_type: "Intercooled Turbo Regular Unleaded I-4",
            transmission: "Automatic",
            engine_displacement: "1.5 L/91",
            seats: "6",
        }
    },

    {
        id: "13",
        brand: "Nissan",
        model_name: "Altima",
        model_year: "2024",
        color: "Metallic Black",
        specifications: {
            fuel_type: "Regular Unleaded I-4",
            transmission: "Automatic",
            engine_displacement: "2.5 L/152",
            seats: "5",
        }
    },

    {
        id: "14",
        brand: "Nissan",
        model_name: "Maxima",
        model_year: "2023",
        color: "Dark Gray Metallic",
        specifications: {
            fuel_type: "Premium Unleaded V-6",
            transmission: "Automatic",
            engine_displacement: "3.5 L/213",
            seats: "5",
        }
    },

    {
        id: "15",
        brand: "Nissan",
        model_name: "Frontier",
        model_year: "2024",
        color: "Silver Metallic",
        specifications: {
            fuel_type: "Regular Unleaded V-6",
            transmission: "Automatic",
            engine_displacement: "3.8 L/231",
            seats: "5",
        }
    },

    {
        id: "16",
        brand: "Nissan",
        model_name: "GT-R",
        model_year: "2024",
        color: "Dirty-White Metallic",
        specifications: {
            fuel_type: "Regular Unleaded V-6",
            transmission: "Automatic",
            engine_displacement: "3.5 L/211",
            seats: "2",
        }
    }


];




car_information.forEach(element => {
    console.log(element.brand)
});



function filterCars(array, brand){

    return array.filter(el => el.brand === brand)

}


const brand = filterCars(car_information, "Mitsubishi")

console.log(brand)


