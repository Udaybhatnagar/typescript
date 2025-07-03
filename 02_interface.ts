interface Usertype {
    firstname:string,
    lastname:string,
    age:number

}

function greet(user:Usertype){
    console.log(user.age)
}

let user:Usertype={
    firstname:"uday bhatnagar",
    lastname:"bhatnagar",

    age:24
}
