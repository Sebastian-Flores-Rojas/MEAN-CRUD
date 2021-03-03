const employee = require('../model/employee');
const Employee = require('../model/employee');
const EmployeeController = {};

EmployeeController.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

EmployeeController.getEmployee = async(req, res) => {
    Employee.findById();
};

EmployeeController.postEmployee = async(req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        'status': 'Employee saved'
    });
};

EmployeeController.putEmployee = async(req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({
        status: 'Employee updated'
    });
};

EmployeeController.deleteEmployee = async(req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({
        status: 'Employee eliminated'
    });
};

module.exports = EmployeeController;