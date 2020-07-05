const Employee = require('../models/employee')
const employeesController = {}

employeesController.list = (req,res)=>{
    Employee.find()
    .then ((employees)=>{
        res.json(employees)
    })
}

employeesController.create = (req,res)=>{
    const body  =req.body
    const employee = new Employee(body)
    employee.save()
    .then((emp)=>{
      res.json(emp)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports = employeesController