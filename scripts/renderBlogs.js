import { blogCards } from "./data/blogsData.js"


renderBlogs()
export function renderBlogs(){
    let blogHTML = ''

    blogCards.forEach((blog)=>{
        blogHTML +=
        `
        
        <div class="blog-card">
            <div class="image-container">
                <img src="${blog.image.hero}" alt="">
                <span class="blog-label">${blog.tag}</span>
            </div>
            <div class="blog-desription">
                <p class="blog-date">${blog.date}</p>
                <h1 class="blog-title">${blog.title}</h1>
                <p class="blog-description">${blog.content}</p>
            </div>
            <button class="accent-button learn-more-button" data-blog-id="${blog.id}">Learn more</button>
        </div>
        
        
        
        `

        document.getElementById('blog-container').innerHTML = blogHTML

    })
}


export function goToBlog(){
    let learnMoreButtons = document.querySelectorAll('.learn-more-button')
    learnMoreButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            let blogId = button.getAttribute('data-blog-id')
            window.location.href = `blog_post.html?blogId=${blogId}`;
            console.log(blogId)
        })
    })
}


goToBlog()