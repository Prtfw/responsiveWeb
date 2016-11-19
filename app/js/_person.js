class Person{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
   
    hi(){
        console.log('Hiiiiiiiyo' + " said " + this.name)
    }
}

// var Person = require("./js/_person")
import Person from './js/_person'

var $ = require("jquery")

var john = new Person('john J S', 'red')

var jane = new Person('jane R', 'yellow')

john.hi()


export default Person;
