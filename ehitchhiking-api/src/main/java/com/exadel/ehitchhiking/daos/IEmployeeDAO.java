package com.exadel.ehitchhiking.daos;


import com.exadel.ehitchhiking.models.Employee;

public interface IEmployeeDAO extends IBasicDAO<Employee> {
    Employee getByEmail(String email);

    String getPassword(String email);

    Employee getEmployee(int id);
}
