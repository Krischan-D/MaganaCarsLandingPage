import {navigation} from "./navbar.js"
import { renderBlogs, goToBlog} from "./renderBlogs.js";
import {cartIndicator} from "./cartProducts.js"
import { renderUsername } from "./utils/displayUsername.js";


const viewHeroBtn = document.querySelector('.start-reading-btn')
viewHeroBtn.addEventListener('click', ()=>{
    const blogId = viewHeroBtn.getAttribute('data-car-id')
    console.log(blogId)
    window.location.href = `blog_post.html?blogId=${blogId}`
})