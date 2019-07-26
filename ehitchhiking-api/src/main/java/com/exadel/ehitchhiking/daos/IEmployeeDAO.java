package com.exadel.ehitchhiking.daos;


import com.exadel.ehitchhiking.models.Employee;

import java.util.List;

public interface IEmployeeDAO extends IBasicDAO<Employee> {
    Employee getByName(String name);
    String getPassword(String username);
    List<Employee> getAll();
    Employee getEmployee(int id);
}
