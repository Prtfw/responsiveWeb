import $ from 'jquery';

class Scroll{
    constructor(){
        alert('scroll')
        this.show = $('.feature-block');
        this.initHide()
        // this.makeWaypoints()
        // console.log(waypoints)
    };
    initHide(){
        this.show.addClass("toReveal")
    };
    
    makeWaypoints(){
        this.show.each(function(){
                var self = this
                new Waypoint({
                    element: self,
                    handler: "x" ,
                })
            })

    };
}

export default Scroll;