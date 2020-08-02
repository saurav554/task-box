import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import AddTask from './component/task/AddTask'
import Task from './component/task/Task'
import Register from './component/Register'
import {startUserLogout} from './actions/userAction'
import {connect} from 'react-redux'

function App(props)
{
    const handleLogout=()=>{
        props.dispatch(startUserLogout())
    }
    return(
        <BrowserRouter>
    <div>
        <h2>Task Box</h2>
        {
            Object.keys(props.user).length!==0?(
                    <div>
                        <Link to='/'  style={{color:'blue',margin:'10px'}}>Home</Link>    
                        <Link to='/tasks' style={{color:'blue',margin:'10px'}}>Task Manager</Link>                        
                        <Link to='#' style={{color:'blue',margin:'10px'}} onClick={handleLogout}>Logout</Link>
                    </div>
                ):(

                    <div>
                    <Link to='/'  style={{color:'blue'}}>Home</Link>
                    <Link to='/users/login' style={{color:'blue',margin:'10px'}}>Login</Link>
                    <Link to='/users/register' style={{color:'blue'}}>Register</Link>
                </div>
            )
        }
        
                
        <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/users/login' component={Login}/>
                    <Route path='/users/register' component={Register}/>
                    <Route path='/tasks' component={Task} exact={true}/>
                    <Route path='/tasks/addtask' component={AddTask}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user,
        task:state.task
    }
}

export default connect(mapStateToProps)(App)
        