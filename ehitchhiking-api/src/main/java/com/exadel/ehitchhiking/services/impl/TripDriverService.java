package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.ICarDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.services.ITripDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class TripDriverService implements ITripDriverService {

    @Autowired
    private ITripDriverDAO dao;

    @Autowired
    private ICarDAO carDAO;

    @Autowired
    private ITripPassDAO tripPassDAO;

    @Override
    public void createTripDriver(String startingPoint, String endingPoint,
                                 Timestamp startingTime, Timestamp endingTime, int idOfCar, int seats){
        TripDriver tripDriver = new TripDriver(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats, carDAO.getCar(idOfCar));
        dao.save(tripDriver);
    }

    @Override
    public void updateTimeStart(int id, Timestamp newStart){
        TripDriver trip_driver = dao.getTripDriver(id);
        trip_driver.setStartTime(newStart);
        dao.update(trip_driver);
    }

    @Override
    public void updateTimeEnd(int id, Timestamp newEnd){
        TripDriver trip_driver = dao.getTripDriver(id);
        trip_driver.setEndTime(newEnd);
        dao.update(trip_driver);
    }

    @Override
    public void updatePointStart(int id, String start){
        TripDriver trip_driver = dao.getTripDriver(id);
        trip_driver.setStartPoint(start);
        dao.update(trip_driver);
    }

    @Override
    public void updatePointEnd(int id, String end){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setEndPoint(end);
        dao.update(tripDriver);
    }

    @Override
    public void updateSave(int id, boolean isSaved){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setSaved(isSaved);
        dao.update(tripDriver);
    }

    @Override
    public void updateFinished(int id, boolean isFinished){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setSaved(isFinished);
        dao.update(tripDriver);
    }

    @Override
    public void updateHistory(int id, boolean isHistory){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setSaved(isHistory);
        dao.update(tripDriver);
    }

    @Override
    public void updateSeats(int id, int newSeats){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setAvailableSeats(newSeats);
        dao.update(tripDriver);
    }
/*
    @Override
    public void addPassenger(int idTripPass, int id){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.getTripPassSet().add(tripPassDAO.getTripPass(idTripPass));
        dao.update(tripDriver);
    }

    @Override
    public void deletePassenger(int idTripPass, int id){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.getTripPassSet().remove(tripPassDAO.getTripPass(idTripPass));
        dao.update(tripDriver);*/
    //}

    @Override
    public void updateCar(int id, int idNewCar){
        TripDriver tripDriver = dao.getTripDriver(id);
        //tripDriver.setCar(carDAO.getCar(idNewCar));
        dao.update(tripDriver);
    }

    @Override
    public void deleteDriverTrip(int id){
        dao.delete(dao.getTripDriver(id));
    }


    @Override
    public List<TripDriverVO> getAll() {
        return dao.getAll().stream().map(TripDriverVO::fromEntity).collect(Collectors.toList());
    }
}
