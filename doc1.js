var person = {
    age : 23,
    getAge: function(){
        return this.age;
    }
}
var person2 = {age :54};
person.getAge.call(person2);

console.log(getAge)