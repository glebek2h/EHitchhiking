package com.exadel.ehitchhiking.daos;


import com.exadel.ehitchhiking.models.Employee;

import java.util.List;

public interface IEmployeeDAO extends IBasicDAO<Employee> {
    Employee getByEmail(String email);
    String getPassword(String email);
    List<Employee> getAll();
    Employee getEmployee(int id);
}
