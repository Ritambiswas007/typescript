const User={
    name:"Ritam",
    email:"ritam@gmail.com",
    isActive:true
}
function createUser({name:string,isPaid:boolean}){}
createUser({name:"ERitam",isPaid:true})


type User={
    name:string;
    email:string;
    isActive:boolean
}
type Mystring=string //we can now use Mystring as string everywhere 

function createUser1(user:User):User{
    return {
        name:"Ritam",
        email:"jdnfs@gmail.com",
        isActive:false
    }
}
type cardNumber={
    cardnumber:string
}
type cardDate={
    cardDate:string
}
type CardDetails=cardNumber & cardDate &{
    cvv:number

}
createUser1({name:"",email:"",isActive:true})
export{}