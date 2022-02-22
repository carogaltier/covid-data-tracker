document.querySelectorAll(".aside li a").forEach((link) => {

  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      };
    });

    if (link.href == ("http://localhost/g/#" + current)) {
      if(document.querySelector('.list-active ul .list-active')){
        document.querySelector('.list-active ul .list-active').classList.remove('list-active');   
      }
      if(document.querySelector('.list-active')){
        document.querySelector('.list-active').classList.remove('list-active');   
      }

      link.parentElement.classList.add("list-active");
      link.closest(".list-item").classList.add("list-active");

      if(link.closest(".list-item").classList.contains('dropdown') == true) {
        link.closest(".list-item").classList.add('show');
      } else {
        if( document.querySelector('.show')){
          document.querySelector('.show').classList.remove('show');
        };
      };
    };
  });

  link.addEventListener('click', ()=> {
    if(link.parentNode.classList.contains('dropdown') == false) {
      id('asideContainer').classList.remove('show2');
    };
    
    if(link.closest(".list-item").classList.contains('dropdown')) {
      if(document.querySelector('.show')) {
        if(document.querySelector('.show') != link.closest(".list-item")) {
          document.querySelector('.show').classList.remove('show');
        };
      };
      link.closest(".list-item").classList.toggle('show');
    } else {
        document.querySelector('.show').classList.remove('show');
    };


  });
});


// ------------------ TOGGLE DROPDOWN MENU ------------------
id('menuBar').addEventListener('click', () => {
    id('asideContainer').classList.toggle('show2');
});

// --------- CLOSE THE MENU BAR WHEN CLICKING OUTSIDE THE MENU ---------
window.addEventListener('click', function(e){
    if (!id('aside-content').contains(e.target) && (!id('menuBar').contains(e.target)) && (!id('aside-footer').contains(e.target))){
    id('asideContainer').classList.remove('show2');

    document.querySelectorAll('.show').forEach((element) => {
    if (element.classList.contains('show') == true) {
        element.classList.remove('show');
    }
    });
  } 
})

