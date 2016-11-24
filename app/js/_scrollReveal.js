import $ from 'jquery';
import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';

console.log(waypoints)

class Scroll{
    constructor(){
        //alert('scroll')
        this.show = $('.feature-block');
        this.initHide()
        // this.makeWaypoints()
        // console.log(waypoint)
    };
    initHide(){
        this.show.addClass("toReveal")
        //alert("hide")
    };
    
    // makeWaypoints(){
    //     this.show.each(function(){
    //             var self = this
    //             new waypoint({
    //                 element: self,
    //                 handler:  function() {
                        
    //                      $(self).addClass("toReveal--visible");
    //                  },
    //                  offset: '90%'
    //             })
    //         })

    // };
}

export default Scroll;