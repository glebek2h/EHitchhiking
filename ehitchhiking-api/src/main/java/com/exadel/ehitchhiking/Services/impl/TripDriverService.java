package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.ICarDAO;
import com.exadel.ehitchhiking.DAO.ITripDriverDAO;
import com.exadel.ehitchhiking.Models.TripDriver;
import com.exadel.ehitchhiking.Services.ITripDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.sql.Timestamp;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class TripDriverService  implements ITripDriverService {

    @Autowired
    private ITripDriverDAO dao;

    @Autowired
    private ICarDAO carsIBasicDAO;

    public void createTripDriver(String startingPoint, String endingPoint,
                                 Timestamp startingTime, Timestamp endingTime, int id_of_car, int seats){
        TripDriver trip_driver = new TripDriver(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats, carsIBasicDAO.get(id_of_car));
        dao.save(trip_driver);
    }

    public void updateTimeStart(int id, Timestamp newStart){
        TripDriver trip_driver = dao.get(id);
        trip_driver.setStartTime(newStart);
        dao.update(trip_driver);
    }

    public void updateTimeEnd(int id, Timestamp newEnd){
        TripDriver trip_driver = dao.get(id);
        trip_driver.setEndTime(newEnd);
        dao.update(trip_driver);
    }

    public void updatePointStart(int id, String start){
        TripDriver trip_driver = dao.get(id);
        trip_driver.setStartPoint(start);
        dao.update(trip_driver);
    }

    public void updatePointEnd(int id, String end){
        TripDriver tripDriver = dao.get(id);
        tripDriver.setEndPoint(end);
        dao.update(tripDriver);
    }

    public void updateSave(int id, boolean isSaved){
        TripDriver tripDriver = dao.get(id);
        tripDriver.setSaved(isSaved);
        dao.update(tripDriver);
    }

    public void updateFinished(int id, boolean isFinished){
        TripDriver tripDriver = dao.get(id);
        tripDriver.setSaved(isFinished);
        dao.update(tripDriver);
    }

    public void updateHistory(int id, boolean isHistory){
        TripDriver tripDriver = dao.get(id);
        tripDriver.setSaved(isHistory);
        dao.update(tripDriver);
    }

    public void updateSeats(int id, int newSeats){
        TripDriver tripDriver = dao.get(id);
        tripDriver.setAvailableSeats(newSeats);
        dao.update(tripDriver);
    }

    public void addPassenger(int idTripPass, int id){
        TripDriver tripDriver = dao.get(id);
        tripDriver.getTripPassSet().add(dao.getTripPass(idTripPass));
        dao.update(tripDriver);
    }

    public void deletePassenger(int idTripPass, int id){
        TripDriver tripDriver = dao.get(id);
        tripDriver.getTripPassSet().remove(dao.getTripPass(idTripPass));
        dao.update(tripDriver);
    }

    public void updateCar(int id, int idNewCar){
        TripDriver tripDriver = dao.get(id);
        tripDriver.setCar(carsIBasicDAO.get(idNewCar));
        dao.update(tripDriver);
    }

    public void deleteDriverTrip(int id){
        dao.delete(dao.get(id));
    }
}
