package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.IEmployeeDAO;
import com.exadel.ehitchhiking.DAO.impl.EmployeeDAO;
import com.exadel.ehitchhiking.Models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    private IEmployeeDAO dao = new EmployeeDAO();

    public void createUser(boolean isAdmin, String username, String firstName, String lastName, String email, String password, String phoneNum) {
        dao.save(new Employee(isAdmin, username, firstName, lastName, email, password, phoneNum));
    }

    public Employee findUserId(int userId) {
        return dao.get(userId);
    }

    public Employee findUserUsername(String username) {
        return dao.getByName(username);
    }

    public void updatePassword(String username, String password) {
        Employee employee = dao.getByName(username);
        employee.setPassword(password);
        dao.update(employee);
    }


    public void updateEmail(String username, String email) {
        Employee employee = dao.getByName(username);
        employee.setPassword(email);
        dao.update(employee);
    }


    public void updateFirstName(String username, String firstName) {
        Employee employee = dao.getByName(username);
        employee.setPassword(firstName);
        dao.update(employee);
    }

    public void updateLastName(String username, String lastName) {

        Employee employee = dao.getByName(username);
        employee.setPassword(lastName);
        dao.update(employee);

    }

    public void updatePhone(String username, String phone) {
        Employee employee = dao.getByName(username);
        employee.setPassword(phone);
        dao.update(employee);
    }


    public void deleteUser(String username) {
        dao.delete(dao.getByName(username));
    }

    public void deleteUserId(int id) {
        dao.delete(dao.get(id));
    }
}
