console.clear();
const navSlide= ()=> {
    const color_tab = document.querySelector('.color-tab');
    const line_tab = document.querySelector('.line-tab');
    const solid_tab = document.querySelector('.solid-tab');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
    const menu = document.querySelector('.menu');
    const menu_burger = document.querySelector('.menu-times-icon');
    const icons_preview_color = document.querySelector('.icons-preview-color');
    const icons_preview_line = document.querySelector('.icons-preview-line');
    const icons_preview_solid = document.querySelector('.icons-preview-solid');
 //Toggle Nav

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        menu.classList.toggle('menu-active');
    });

    menu_burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        menu.classList.toggle('menu-active');
    });

    color_tab.addEventListener('click', () =>{
        color_tab.classList.add('border_bot_active');
        line_tab.classList.remove('border_bot_active');
        solid_tab.classList.remove('border_bot_active');
        icons_preview_color.classList.add('tab-active');
        icons_preview_line.classList.remove('tab-active');
        icons_preview_solid.classList.remove('tab-active');
    });

    line_tab.addEventListener('click', () =>{
        line_tab.classList.add('border_bot_active');
        color_tab.classList.remove('border_bot_active');
        solid_tab.classList.remove('border_bot_active');
        icons_preview_line.classList.add('tab-active');
        icons_preview_color.classList.remove('tab-active');
        icons_preview_solid.classList.remove('tab-active');
    });

    solid_tab.addEventListener('click', () =>{
        solid_tab.classList.add('border_bot_active');
        line_tab.classList.remove('border_bot_active');
        color_tab.classList.remove('border_bot_active');
        icons_preview_solid.classList.add('tab-active');
        icons_preview_line.classList.remove('tab-active');
        icons_preview_color.classList.remove('tab-active');
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
