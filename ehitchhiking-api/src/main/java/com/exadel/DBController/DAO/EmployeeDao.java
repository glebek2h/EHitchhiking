package com.exadel.DBController.DAO;

import com.exadel.DBController.Models.Employee;
import com.exadel.DBController.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class EmployeeDao implements Dao<Employee> {

    public void save(Employee emp) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(emp);
        tx1.commit();
        session.close();
    }

    public void update(Employee emp) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(emp);
        tx1.commit();
        session.close();
    }

    public void delete(Employee emp) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(emp);
        tx1.commit();
        session.close();
    }

    public Employee get(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Employee.class, id);
    }

    public List<Employee> getAll() {
        List<Employee> emps = (List<Employee>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From com.exadel.DBController.Models.Employee").list();
        return emps;
    }
}
