import $ from 'jquery'

class Modal{
    constructor(){
        this.modalBtn = $(".modal-open")
        this.modal = $('.modal')
        this.modalX = $('.modal__close')
        this.events()
    }
    
    events(){
        //open modal click
        this.modalBtn.click(this.openModal.bind(this))
        //x click
        this.modalX.click(this.closeModal.bind(this))
        //excape key
        
    }
    
    openModal(){
        //alert('show')
        this.modal.removeClass('modal--hidden')
        this.modal.addClass("modal--visible")
        return false
    }
    closeModal(){
        //alert('hide')
        this.modal.removeClass('modal--visible')
        this.modal.addClass("modal--hidden")
        return false
    }
}

export default Modal