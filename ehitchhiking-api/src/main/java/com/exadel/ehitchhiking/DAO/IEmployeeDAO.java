package com.exadel.ehitchhiking.DAO;


import com.exadel.ehitchhiking.Models.Employee;

import java.util.List;

public interface IEmployeeDAO extends IBasicDAO<Employee> {
    Employee getByName(String name);
    String getPassword(String username);
    List<Employee> getAll();
    Employee getEmployee(int id);
}
