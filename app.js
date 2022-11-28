const person = {
    name: 'Vlad',
    age: 23,
    info: function() {
        console.log(this.name);
    }
}


person.info()
