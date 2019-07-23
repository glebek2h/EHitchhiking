package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IEmployeeDAO;
import com.exadel.ehitchhiking.DAO.impl.EmployeeDAO;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Services.IEmployeeService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class EmployeeService implements IEmployeeService {

    @Autowired
    private IEmployeeDAO dao;

    @Override
    public void createEmployee(boolean isAdmin, String username, String firstName, String lastName, String email, String password, String phoneNum) {
        dao.save(new Employee(isAdmin, username, firstName, lastName, email, password, phoneNum));
    }

    @Override
    public Employee findUserId(int userId) {
        return dao.getEmployee(userId);
    }

    @Override
    public Employee findUserUsername(String username) {
        return dao.getByName(username);
    }

    @Override
    public int findIdByUsername(String username) {
        Employee employee = dao.getByName(username);
        return employee.getId();
    }

    @Override
    public void updatePassword(String username, String password) {
        Employee employee = dao.getByName(username);
        employee.setPassword(password);
        dao.update(employee);
    }

    @Override
    public void updateEmail(String username, String email) {
        Employee employee = dao.getByName(username);
        employee.setPassword(email);
        dao.update(employee);
    }

    @Override
    public void updateFirstName(String username, String firstName) {
        Employee employee = dao.getByName(username);
        employee.setPassword(firstName);
        dao.update(employee);
    }

    @Override
    public void updateLastName(String username, String lastName) {
        Employee employee = dao.getByName(username);
        employee.setPassword(lastName);
        dao.update(employee);
    }

    @Override
    public void updatePhone(String username, String phone) {
        Employee employee = dao.getByName(username);
        employee.setPassword(phone);
        dao.update(employee);
    }

    @Override
    public void deleteUser(String username) {
        dao.delete(dao.getByName(username));
    }

    @Override
    public void deleteUserId(int id) {
        dao.delete(dao.getEmployee(id));
    }

    @Override
    public List<Employee> getAll() {
        return dao.getAll();
    }
}
