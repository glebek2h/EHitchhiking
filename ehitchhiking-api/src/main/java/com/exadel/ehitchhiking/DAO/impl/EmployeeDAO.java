package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IEmployeeDAO;
import com.exadel.ehitchhiking.Models.Employee;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository
public class EmployeeDAO extends AbstractDAO<Employee> implements IEmployeeDAO {  //IEmployeeDAO
/*
    // TODO: move to abstract dao
    public Employee get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Employee.class, id);
    }*/
    public List<Employee> getAll() {
        List<Employee> emps = (List<Employee>) HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.ehitchhiking.Models.Employee").list();
        return emps;
    }

    public Employee getByName(String name){
        return (Employee) HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from Employee where userName = '" + name + "'").uniqueResult();
    }

    public String getPassword(String username) {
        List<String> emps = (List<String>) HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("select password From com.exadel.ehitchhiking.Models.Employee where userName = '" + username + "'").list();
        return emps.get(0);
    }
}
