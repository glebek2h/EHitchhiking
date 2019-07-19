package com.exadel.ehitchhiking.DAO.impl;

import com.exadel.ehitchhiking.DAO.ITripDriverDAO;
import com.exadel.ehitchhiking.Models.Car;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Models.TripPass;

import org.springframework.stereotype.Repository;

import java.util.List;


@Repository("TripDriverIBasicDAO")
public class TripDriverDAO extends AbstractDAO<TripDriver> implements ITripDriverDAO {

    public List<TripDriver> getAll() {
        List<TripDriver> trips_drivers = (List<TripDriver>) getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.TripDriver").list();
        return trips_drivers;
    }

    public Car getCar(String id){
        List<Car> cars = (List<Car>) getCurrentSession().createQuery("from Car where id = '" + id + "'").list();
        return cars.get(0);
    }

    public TripPass getTripPass(int id) {
        return getCurrentSession().get(TripPass.class, id);
    }

    public TripDriverDAO(){
        setAClass(TripDriver.class);
    }
}
