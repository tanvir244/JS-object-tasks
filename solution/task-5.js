
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const key in myObject){
    let propName = key;
    let propType = typeof myObject[key];
    let result   = `key: ${key} | type: ${propType}` 
    console.log(result);
}
