import React,{useState} from "react"
const ThingsContext = React.creacteContext()

function ThingsProvider(props){
 const [things, setThings] = useState([])

 function newThingList(newData){
     setThings(prevThing =>{
         return(
             {...prevThing , newData}
         )
     })
 }
    return(
        <ThingsContext.Provider value={{things , setThings}}>
            {props.children}
        </ThingsContext.Provider>
    )
}

export {ThingsProvider, ThingsContext}