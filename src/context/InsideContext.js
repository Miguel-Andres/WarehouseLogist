import React ,{ useState } from "react"

export  const  InsideContext = React.createContext([])


export const InsideProvider = (props)=>{

    const [inside,setInside] = useState([])    
       
      

    return(

        <InsideContext.Provider value={[inside,setInside]}>
            {props.children}
        </InsideContext.Provider>

    )
}  