import $ from 'jquery';
import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';

console.log(waypoints)

class Scroll{
    constructor(){
        this.show = $('.feature-block');
        this.initHide()
        this.makeWaypoints()
    };
    initHide(){
        this.show.addClass("toReveal")
    };
    
    makeWaypoints(){
        this.show.each(function(){
                var self = this
                var waypoint = new Waypoint({
                    element: self,
                    handler:  function() {
                        
                         $(self).addClass("toReveal--visible");
                     },
                     offset: '90%'
                })
            })

    };
}

export default Scroll;
