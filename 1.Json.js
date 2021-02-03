
//JSON stand for javascript object notation
const user = {
    name: "asif",
    id:21321,
    school: "shankharigati",
    gf:{
        name:"tamanna",
        school: "gopalpur school",
    }
}

console.log(user);
const userToJson = JSON.stringify(user);
console.log(userToJson);

const JsonToUser = JSON.parse(userToJson);
console.log(JsonToUser);