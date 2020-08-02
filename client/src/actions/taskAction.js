import axios from 'axios'


export const setTask = (task)=>{
    return{
        type: 'SET TASK',
        payload: task
    }
}

export const startSetTask = ()=>{
    return (dispatch) =>{
        axios .get ('/tasks',{
            headers : {
                'authorization': localStorage.getItem ('authToken')
            }
        
        })
    .then((response)=>{
        const task = response.data
        console.log('taskget', task)
        dispatch(setTask(task))
    })
    .catch ((err)=>{
        console.log(err)
    })
}
}

export const removeTask = (id)=>{
    return {
type: 'REMOVE_TASK',payload: id
    }
}

export const startRemoveTask=(id)=>{
    return (dispatch)=>{
        axios.delete(`/tasks/${id}`,{
            headers:{
                'authorization': localStorage.getItem('authToken')  
            }
        })
        .then((response)=>{
            const task = response.data
            dispatch(removeTask(task._id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
 
export const addTask=(task)=>{
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const startLoginTask=(FormData, redirect)=>{
    return (dispatch)=>{
        axios.post('tasks', FormData,{headers:{'authorization': localStorage.getItem('authToken')}})
        .then(response=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors'))
            {
                alert(response.data.message)
            }
            else
            {
                alert('successsfully added')
                const task = response.data
                dispatch(addTask(task))
                //Props.history.push('/users/login')
                redirect()

            }
        })
        .catch(err=>{
            console.log(err)
        })
        //console.log('action generator', formData)
    }
}

export const updateTask=(id, data)=>{
    return{type: 'UPDATE_TASK', payload:{id, data}}
}
   

export const startUpdateTask=(id, status)=>{
    return(dispatch)=>{
        axios.put(`/tasks/${id}`, status,{headers:{'authorization': localStorage.getItem('authToken')}})
        .then((response)=>{
            console.log ('update', response.data)
            const updateData=response.data
            dispatch(updateTask(id, updateData))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
