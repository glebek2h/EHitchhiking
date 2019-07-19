package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IEmployeeDAO;
import com.exadel.ehitchhiking.Models.Employee;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.util.List;


@Repository("EmployeeDAO")
public class EmployeeDAO extends AbstractDAO<Employee> implements IEmployeeDAO {

    public List<Employee> getAll() {
        List<Employee> emps = (List<Employee>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Employee").list();
        return emps;
    }

    public Employee getByName(String name){
        return (Employee) getCurrentSession().createQuery("from Employee where username = '" + name + "'").uniqueResult();
    }

    public String getPassword(String username) {
        List<String> emps = (List<String>) getCurrentSession().createQuery("select password From com.exadel.ehitchhiking.Models.Employee where username = '" + username + "'").list();
        return emps.get(0);
    }

    public EmployeeDAO(){
        setAClass(Employee.class);
    }

}
