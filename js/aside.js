document.querySelectorAll('.aside li').forEach((element) => {
    element.addEventListener('click', ()=> {
        document.querySelector('.list-active').classList.remove('list-active') ;         
        element.classList.add('list-active'); 
        
        if(element.classList.contains('dropdown') == true) {
            if (element.classList.contains('show') == true) {
                element.classList.remove('show');
            } else {
                if( document.querySelector('.show')) {
                    document.querySelector('.show').classList.remove('show');  
                };
                element.classList.add('show');
            };
        } else {
            id('asideContainer').classList.remove('show2');
            document.querySelector('.show').classList.remove('show');
        };
    })
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