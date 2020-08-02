import React from 'react'
import {connect} from 'react-redux'
import {startLoginTask} from '../../actions/taskAction'
// import DatePicker from 'react-datepicker'

class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            description:'',
            completed:false,
            dueDate:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleCheck=()=>{
        this.setState((prevState)=>({completed:!prevState.completed}))
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description,
            dueDate:this.state.dueDate
        }
        console.log('add task', formData)
        const redirect=()=>{
            return this.props.history.push('/tasks')
        }
        this.props.dispatch(startLoginTask(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props)) 
    }
    render()
    {
     return(
         <div>
             <h2>Add Task</h2>
             <form onSubmit={this.handleSubmit}>
                 <label>title:
                     <input
                     type='text'
                     name='title'
                     value={this.state.title}
                     onChange={this.handleChange}
                     placeholder='task title'
                     /><br/><br/>
                 </label>

                 <label>
                     description:
                     <textarea
                     type='text'
                     name='description'
                     cols='30'
                     rows='10'
                     value={this.state.description}
                     onChange={this.handleChange}
                     placeholder='task description'
                     /><br/><br/>
                 </label>
                 <label>
                     <input
                     type='checkbox'
                     name='completed'
                     value={this.state.completed}
                     onChange={this.handleCheck}
                     />completed
                 </label><br/><br/>
                 <label>
                     <input
                     type='date'
                      name='dueDate'
                      value={this.state.dueDate}
                      onChange={this.handleChange}/>

                 </label><br/><br/>

                 <input type='submit' value='submit'/>
             </form>
         </div>
     )
    }
}
const mapStateToProps=(state)=>{
    return{
        task:state.task
    }
}
export default connect(mapStateToProps)(AddTask)