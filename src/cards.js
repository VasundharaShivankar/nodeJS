const Expressions=({name})=>{
    if(name==="smiling"){
        return(<h1>😊</h1>)
    }
    else if(name==="sad")
        {
            return(<h1>😔</h1>)
        }
    else if(name==="shocked")
        {
            return(<h1>🫨</h1>)
        }
    else if(name==="excited")
        {
            return(<h1>🤩</h1>)
        }
    else{
        return(<h1>😇</h1>)
    }    
}

const Greetings=()=>{
    return(<h1>Hello</h1>)
}

export default Expressions;
export {Greetings};