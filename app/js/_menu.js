import $ from 'jquery'

class Menu{
    constructor(){
        this.menuIcon = $('.header__menu-icon')
        this.menuBar = $('.header__menu')
        this.header = $('.header')
        this.events()
    }
    
    events(){
        this.menuIcon.click(this.toggle.bind(this))
    }
    
    toggle(){
        // this.menuIcon.hide()
        this.header.toggleClass('header--expanded')
        this.menuBar.toggleClass('header__menu--visible')
        this.menuIcon.toggleClass('header__menu-icon-x')
    }
}

export default Menu;