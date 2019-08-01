package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IEmployeeDAO;
import com.exadel.ehitchhiking.models.Employee;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class EmployeeDAO extends AbstractDAO<Employee> implements IEmployeeDAO {

    public EmployeeDAO() {
        super(Employee.class);
    }

    @Override
    public Employee getByEmail(String email){
        return (Employee) getCurrentSession().createQuery("from Employee where email = '" + email + "'").uniqueResult();
    }

    @Override
    public String getPassword(String email) {
        String password = (String) getCurrentSession().createQuery("select password From com.exadel.ehitchhiking.models.Employee where email = '" + email + "'").uniqueResult();
        return password;
    }

    @Override
    public Employee getEmployee(int id) {
        return getCurrentSession().get(Employee.class, id);
    }
}
