import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../src/../actions/userAction'
class Register extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props)) 
    }
    render()
    {
        return(
            <div>
                <h2 style={{color:'green',textAlign:'center'}}>Register</h2>
                <form onSubmit={this.handleSubmit} style={{color:'green',textAlign:'center'}}>
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.handleChange}
                        name='username'
                        placeholder='Username'
                    /><br/><br/>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={this.handleChange}
                        name='email'
                        placeholder='Email'
                    /><br/><br/>
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'
                        placeholder='Password'
                    /><br/><br/>
                    <input 
                        type='submit'
                        value='Register'
                        style={{textAlign:'center',color:"white",backgroundColor:'blue'}}
                    />
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Register)