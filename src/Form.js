import React,{useState,useContext} from "react"
import {ThingsProvider} from "./ThingsProvider"

function Form(props){
    //From Provider
    const {things, setThings} = useContext(ThingsProvider)

    // useState for thingsList
    const [thingsList , setThingsList] = useState({
        title:"",
        description: "",
        imgUrl:""
    })
     // Grab value of input
    function handleChange(e){
        const{name , value} = e.target
        setThingsList(prevThings =>({...prevThings, [name]:value}))
}     
     //Submit to array Provider
      function handleSubmit(e){
          e.preventDefault()
          setThings(thingsList)
          setThingsList({
            title:"",
            description: "",
            imgUrl:""
          })
      }
     console.log(`thingList: {thingList.title} {thingList.description} {thingList.imgUrl}`)
    return(
        <>
            <form>
                <input type="text"
                       placeholder="title"
                       className= "title input"
                       name="title"
                       value={thingsList.title}
                       onChange={handleChange}
                />
                <input type="text"
                       placeholder="description"
                       className= "desc input"
                       name="description"
                       value={thingsList.description}
                       onChange={handleChange}
                       />

                 <input type="text"
                       placeholder="imgUrl"
                       className= "imgUrl input"
                       name="imgUrl"
                       value={thingsList.imgUrl}
                       onChange={handleChange}
                />
                <button className= "form-submit-button">Submit</button>

            </form>
        </>

    )
}

export default Form