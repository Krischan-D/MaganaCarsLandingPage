import {navigation} from "./navbar.js"
import { blogCards} from "./data/blogsData.js"




const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('blogId');
console.log(typeof blogId)

const blogContent = blogCards.filter((blog)=>{
    return Number(blogId) === blog.id
})

const filteredBlog = blogCards.filter((blog)=>{
    return Number(blogId) !== blog.id
})

function renderBlogArticle(){
   blogContent.forEach((blog)=>{
        const artilceContainer = document.getElementById('blog-container')
        const asideElement = document.querySelector('aside');
    
        // artilceContainer.innerHTML = blog.contentHTML
        asideElement.insertAdjacentHTML('beforebegin', blog.contentHTML);
    })

}
renderBlogArticle()



function renderRelatedBlogs(){
    let blogHTML = ''
    filteredBlog.forEach((blog) =>{
        blogHTML += 

        `
            <div class="aside-blogs">
              <div class="other-blog-image">
                <img src="${blog.image.content}" alt="">
              </div>
              <div class="other-blog-description">
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
              </div>
              <button class="aside-blog-button" data-blog-id=${blog.id}>Learn more</button>
           </div>
        
        
        
        `
        
        document.getElementById('relatedBlogsContainer').innerHTML = blogHTML

    })

}

export function goToRelatedBlogs(){
   const buttons = document.querySelectorAll('.aside-blog-button')
   buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            let blogId = button.getAttribute('data-blog-id')
            console.log(blogId)
            window.location.href = `blog_post.html?blogId=${blogId}`
        })
   })
}



renderRelatedBlogs()

goToRelatedBlogs()

function renderOverview(){
    let overViewHTML = ''


    blogContent.forEach((blog)=>{
        overViewHTML += 
        `
            <div class="image-container">
                <img src="${blog.image.hero}" alt="" />
                <div class="overlay">
                    <span>${blog.tag}     <span>${blog.date}</span> </span>
                    <h1>${blog.overviewTitle}</h1>
                    <p>${blog.content}.</p>
                
                </div>
            </div>
        `
        document.getElementById('overview-container').innerHTML = overViewHTML
    })
}

renderOverview()