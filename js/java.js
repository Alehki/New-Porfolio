const nav = document.getElementById(`nav`)
const menu_icon = document.getElementById(`menu-icon`)

menu_icon.addEventListener(`click`, e =>{
    menu_icon.classList.toggle(`menu-icon--active`)
    nav.classList.toggle(`nav--active`)


    // ver si funciona, es para que el codigo al correr la barra se corra el titulo.
    main_title = document.querySelector(`.main-title`)
    main_title.classList.toggle(`main-title--active`)
}) 

const main_menu = document.getElementById(`main-menu`)

const proyect = document.querySelectorAll(`.proyect`)
const proyect_enter = document.getElementById(`proyect-enter`)

main_menu.addEventListener(`click`, e =>{
    if(e.target.classList.contains(`main-menu__link`)){
        for(const f of main_menu.children){
            f.firstChild.classList.remove(`main-menu--active`)
        }
        e.target.classList.add(`main-menu--active`)
        // console.log(`Hiciste click en ${e.target.textContent}`)

        // Le agrega el link del data del proyecto a la etiqueta a.
        const link = document.getElementById(`link`)
        link.href = e.target.dataset.link

        for(const a of proyect){
            a.children[0].classList.remove(`proyect--active`)
            if(a.classList.contains(`proyect__${e.target.id}`)){
                // console.log(`Se activa ${e.target.id}`)
                a.children[0].classList.toggle(`proyect--active`)
                proyect_enter.classList.add(`proyect-enter--active`)
            }
        }
    }
})

