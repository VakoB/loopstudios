const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach(entry=>{
            console.log(entry);
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
            // else{
            //     entry.target.classList.remove('show');

            // }
        })
    }
)

// const animatedItems = document.querySelectorAll('.animated-nav')

const navBar = document.querySelector('#animated-nav');
const mainTitle = document.querySelector('#title');
const vrText = document.querySelector('.vr-text');
const vrImage = document.querySelector('.img-box');
const secondTitle = document.querySelector('.second-title');
const logos = document.querySelector('.logos');
const footerConteiner = document.querySelector('.footer-container');


const ImgItems = document.querySelectorAll('.item');



observer.observe(navBar);
observer.observe(mainTitle);
observer.observe(vrText);
observer.observe(vrImage);
ImgItems.forEach(item=>{observer.observe(item)});
observer.observe(secondTitle);
observer.observe(logos);
observer.observe(footerConteiner);
