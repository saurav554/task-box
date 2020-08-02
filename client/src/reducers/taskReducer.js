const taskInitialState=[]
const taskReducer=(state=taskInitialState,action)=>{
switch(action.type){
    case 'ADD_TASK':{
        return [...state, action.payload]
    }
    case 'SET_TASK':{
  return[...action.payload]
    }
    case'REMOVE_TASK':{
        return state.filter(ele=>ele.id!=action.payload)

    }
    case 'UPDATE_TASK':{
        return state.map(task=>{
            if(task._id==action.payload.id)
            {
                return Object.assign({},task,action.payload.data)
            }
            else
            {
                return Object.assign({},task)
            }
        })
    }
    default:{
        return[...state]
    }
}
}
export default taskReducer