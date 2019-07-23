package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IEmployeeDAO;
import com.exadel.ehitchhiking.models.Employee;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class EmployeeDAO extends AbstractDAO<Employee> implements IEmployeeDAO {

    public EmployeeDAO(SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    @Override
    public List<Employee> getAll() {
        List<Employee> emps = (List<Employee>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.models.Employee").list();
        return emps;
    }

    @Override
    public Employee getByName(String name){
        return (Employee) getCurrentSession().createQuery("from Employee where username = '" + name + "'").uniqueResult();
    }

    @Override
    public String getPassword(String username) {
        String password = (String) getCurrentSession().createQuery("select password From com.exadel.ehitchhiking.models.Employee where username = '" + username + "'").uniqueResult();
        return password;
    }

    @Override
    public Employee getEmployee(int id) {
        return getCurrentSession().get(Employee.class, id);
    }
}
