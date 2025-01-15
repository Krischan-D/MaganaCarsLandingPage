const blogCards = [
    {
        id: 1,
        tag: 'Tips',
        date: 'January 1, 2025',
        title: ' Car Maintenance Tips',
        content: 'Provide practical advice to help car owners maintain their vehicles, ensuring longevity and optimal performance.',
        image: 'images/hero-image.webp'
    },
    {
        id: 2,
        tag: 'News',
        date: 'January 1, 2025',
        title: 'Latest Automotive News and Trends',
        content: 'Keep your audience informed about the newest developments in the automotive industry, including vehicle releases, technological advancements, and market trends.',
        image: 'images/imageslider1.avif'
    },
    {
        id: 3,
        tag: 'Tips',
        date: 'January 1, 2025',
        title: 'Driving Tips and Guides',
        content: ' Offer valuable advice to enhance driving skills, safety, and overall road experience for your readers.',
        image: 'images/imageslider2.webp'
    },
    
]



renderBlogs()
export function renderBlogs(){
    let blogHTML = ''

    blogCards.forEach((blog)=>{
        blogHTML +=
        `
        
        <div class="blog-card">
            <div class="image-container">
                <img src="${blog.image}" alt="">
                <span class="blog-label">${blog.tag}</span>
            </div>
            <div class="blog-desription">
                <p class="blog-date">${blog.date}</p>
                <h1 class="blog-title">${blog.title}</h1>
                <p class="blog-description">${blog.content}</p>
            </div>
            <button class="accent-button learn-more-button">Learn more</button>
        </div>
        
        
        
        `

        document.getElementById('blog-container').innerHTML = blogHTML

    })
}