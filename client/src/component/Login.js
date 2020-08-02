import React from 'react'
import {connect} from 'react-redux'
import { startLoginUser } from '../src/../actions/userAction'

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const loginData={
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(loginData,redirect))
        console.log(loginData)
    }
    render()
    {
        return(
            <div>
                <h2 style={{color:'green',textAlign:'center'}}>Login</h2>
                <form style={{color:'green',textAlign:'center'}} onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        name='email'
                        placeholder='Email'
                    /><br/><br/>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                        placeholder='Password' 
                    /><br/><br/>
                    <input 
                        type='submit'
                        value='Login'
                        style={{textAlign:'center',color:"white",backgroundColor:'blue'}}
                    />
                </form>
            </div>
        )
    }
}

export default connect()(Login)