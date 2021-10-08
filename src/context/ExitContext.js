import React , {useState}from "react"

export const ExitContext = React.createContext([])


export const  ExitProvider=(props)=> {
    const [exit,setExit] = useState([])

    return (
      <ExitContext.Provider  value={[exit,setExit]}>
            {props.children}
      </ExitContext.Provider>
    )
}


