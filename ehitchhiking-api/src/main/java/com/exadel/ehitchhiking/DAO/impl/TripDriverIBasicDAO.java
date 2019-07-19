package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.IBasicDAO;
import com.exadel.ehitchhiking.DAO.ITripDriverDAO;
import com.exadel.ehitchhiking.Models.Cars;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Repository("TripDriverIBasicDAO")
public class TripDriverIBasicDAO extends AbstractDAO<TripDriver> implements ITripDriverDAO {

    public List<TripDriver> getAll() {
        List<TripDriver> trips_drivers = (List<TripDriver>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.TripDriver").list();
        return trips_drivers;
    }

    public Cars getCar(String id){
        List<Cars> cars = (List<Cars>) getCurrentSession().createQuery("from Cars where id = '" + id + "'").list();
        return cars.get(0);
    }

    public TripPass getTripPass(int id) {
        return getCurrentSession().get(TripPass.class, id);
    }

    public TripDriverIBasicDAO(){
        setAClass(TripDriver.class);
    }
}
