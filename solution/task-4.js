
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let num = 1;
for(const prop in student){
    if(student.hasOwnProperty(prop)){
        console.log(num);
    }
    num++;
}