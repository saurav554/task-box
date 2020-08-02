import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router-dom'
import {startSetTask,startRemoveTask, startUpdateTask} from '../../actions/taskAction'

function Task(props)
{
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure')
        if(confirmRemove)
        {
            props.dispatch(startRemoveTask(id))
        }
    }

    const handleCheck=(id,stat)=>{
        const status={completed:!stat}
        props.dispatch(startUpdateTask(id,status))
    }
    if(props.task.length == 0)
    {
        props.dispatch(startSetTask())
    }
    console.log(props.task)
    return(
        <div>
            <h2>TaskBox</h2>
            <table border='0' style={{textAlign:"center",background:'rgb(219, 216, 35)'}}>
                <thead>
                    <tr style={{background:"blue"}}>
                        <th><input type='checkbox' disabled/></th>
                        <th>Title</th>
                        <th>CreatedOn</th>
                        <th>DueDate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.task.map((ele,i)=>{
                            return (
                                <tr key={i}>
                                    <td><input type='checkbox' checked={ele.completed} onChange={()=>{handleCheck(ele._id,ele.completed)}}/></td>
                                    <td>{ele.title}</td>
                                    <td>{moment(ele.createdAt).format()}</td>
                                    <td>{ele.dueDate && moment(ele.dueDate).format()}</td>
                                    <td><button onClick={()=>handleRemove(ele._id)} style={{background:"red"}}>remove</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to='/tasks/addTask'>Add Task</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        task:state.task
    }
}

export default connect(mapStateToProps)(Task)