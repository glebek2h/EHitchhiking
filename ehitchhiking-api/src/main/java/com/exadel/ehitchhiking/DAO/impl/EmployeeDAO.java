package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IEmployeeDAO;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository
public class EmployeeDAO extends AbstractDAO<Employee> implements IEmployeeDAO {  //IEmployeeDAO

    public List<Employee> getAll() {
        List<Employee> emps = (List<Employee>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Employee").list();
        return emps;
    }

    public Employee getByName(String name){
        return (Employee) getCurrentSession().createQuery("from Employee where userName = '" + name + "'").uniqueResult();
    }

    public String getPassword(String username) {
        List<String> emps = (List<String>) getCurrentSession().createQuery("select password From com.exadel.ehitchhiking.Models.Employee where userName = '" + username + "'").list();
        return emps.get(0);
    }

    public EmployeeDAO(){
        setAClass(Employee.class);
    }
}
