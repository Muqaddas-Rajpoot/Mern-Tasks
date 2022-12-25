const initialState={
    firstname:"",
    lastname:"",
    email:"",
    password:""
}
function reducer(state,action){
    const{type,...rest}=action
    switch(action.type){
        case "changeValue":
            return {...state,[action.field]:action.value}
            case "reset":
            return initialState 
            default:
                throw new Error()
    }
}
export  {initialState, reducer}