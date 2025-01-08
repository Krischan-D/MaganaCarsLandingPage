const services = [
    {
        serviceName: 'Financing Options',
        description: 'We provide flexible loan and lease plans to suit various budgets, ensuring you can drive away in your desired vehicle with manageable payments.',
        icon: 'images/services/services.png'
    },
    {
        serviceName: 'Trade-in Program',
        description: 'Easily upgrade to a new vehicle by trading in your current car. We offer fair valuations and a straightforward process to apply your trade-in value toward your next purchase.',
        icon: 'images/services/trade.png'
    },
    {
        serviceName: 'Test Drive Scheduling',
        description: 'Experience our vehicles firsthand by scheduling a test drive at your convenience, either at our dealership or at your preferred location.',
        icon: 'images/services/test-drive.png'
    },
    {
        serviceName: 'Vehicle Maintenance Services',
        description: 'Keep your car in optimal condition with our comprehensive maintenance services, including regular check-ups and genuine parts replacements',
        icon: 'images/services/maintenance.png'
    },
    {
        serviceName: 'Insurance Assistance',
        description: 'Simplify your car ownership experience with our insurance assistance, offering policies that provide comprehensive coverage and peace of mind.',
        icon: 'images/services/insurance.png'
    },
    {
        serviceName: 'Car Customization and Accessories',
        description: 'Personalize your vehicle with our range of customization options and accessories, enhancing both aesthetics and functionality to match your preferences.',
        icon: 'images/services/customization.png'
    },
    
    

]
renderServices()

export function renderServices(){
    let servicesHTML =''

    services.forEach((service)=>{
    servicesHTML += 

    `
        <div class="service">
            <div class="icon-container">
                <img src="${service.icon}" alt="">
            </div>
            <h2>${service.serviceName}</h2>
            <p>${service.description}</p>
        </div>

    `

    document.getElementById('services-container').innerHTML = servicesHTML
    })
}