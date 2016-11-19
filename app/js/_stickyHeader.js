import $ from 'jquery'
import smoothScroll from 'jquery-smooth-scroll'

class Header{
    constructor(){
        this.header = $('.header')
        this.sections = $('.main-nav a')
        this.smoothScrolling();
    }
    smoothScrolling(){
        this.sections.smoothScroll()
    }
    
    
}

export default Header;