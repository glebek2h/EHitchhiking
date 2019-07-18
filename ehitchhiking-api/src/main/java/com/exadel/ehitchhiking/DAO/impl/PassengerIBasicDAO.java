package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.Models.Passenger;
import com.exadel.ehitchhiking.Utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class PassengerIBasicDAO extends AbstractDAO<Passenger> implements IPassengerDAO {

    public List<Passenger> getAll() {
        List<Passenger> passs = (List<Passenger>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.Passenger").list();
        return passs;
    }

    public Passenger getByName(String username) {
        List<Passenger> passengers = (List<Passenger>)  getCurrentSession().createQuery("from Passenger where employee = (from Employee where userName = '" + username + "')").list();
        return passengers.size() > 0 ? passengers.get(0) : null;
    }

    public PassengerIBasicDAO(){
        setAClass(Passenger.class);
    }
}
