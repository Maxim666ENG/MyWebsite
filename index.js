console.clear();
const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    const menu = document.querySelector('.menu');
    const menu_burger = document.querySelector('.menu-times-icon');
    const preview = document.querySelector('.preview-tab');
    const standard_svg = document.querySelector('.standard-svg-tab');
    const optimized_svg = document.querySelector('.optimized-svg-tab');
    const tab_img_1 = document.querySelector('.tab-img-1');
    const tab_img_2 = document.querySelector('.tab-img-2');
    const tab_img_3 = document.querySelector('.tab-img-3');
 //Toggle Nav

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        menu.classList.toggle('menu-active');
    });

    menu_burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        menu.classList.toggle('menu-active');
    });

    preview.addEventListener('click', () =>{
        tab_img_1.classList.add('image-active');
        tab_img_2.classList.remove('image-active');
        tab_img_3.classList.remove('image-active');
        tab_img_2.style["height"] = "0";
        tab_img_3.style["height"] = "210px";
        tab_img_1.style["height"] = "0";
    });

    standard_svg.addEventListener('click', () =>{
        tab_img_2.classList.add('image-active');
        tab_img_1.classList.remove('image-active');
        tab_img_3.classList.remove('image-active');
        tab_img_2.style["height"] = "410px";
        tab_img_1.style["height"] = "0"
        tab_img_3.style["height"] = "0";
    });

    optimized_svg.addEventListener('click', () =>{
        tab_img_3.classList.add('image-active');
        tab_img_1.classList.remove('image-active');
        tab_img_2.classList.remove('image-active');
        tab_img_2.style["height"] = "0";
        tab_img_1.style["height"] = "0";
        tab_img_3.style["height"] = "210px";
    });

  // Fixed an issue here from foreach to forEach.
    navLinks.forEach((link,index) =>{
       if(link.style.animation) {
           link.style.animation=''
        } else {
          //Here there was a small mistake of using normal quotes '' and not back ticks ``.
          //Thats it!
            link.style.animation=`navLinkFade 0.5s ease forwards ${index /10 + 1.5}s`;
        }
        console.log(index / 10);
    });
}
navSlide();
