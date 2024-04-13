interface user{
    readonly dbid:number,
    email:string,
    userId:number,
    googleId?:number,
    // startTrial: ()=>string
    //akta method call hobe tar return type string 
    startTrial():string
    getCoupoun(coupounNmae:string):number//return type number parameters string
}
interface user{
    githubtoken:string
}
interface admin extends user{
    role:"admin" | "ta" | "learner"
}

const Ritam:user={dbid:2,email:"nhswf",userId:22,startTrial:()=> {
    return "the trial has been started "
    
},
getCoupoun:(name:"Ritam")=>{
    return 10
},githubtoken:"github"}