package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.config.ComareUtils;
import com.exadel.ehitchhiking.daos.*;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.models.vo.PassengerVO;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.services.ITripDriverService;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import com.exadel.ehitchhiking.requests.Point;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
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

    @Autowired
    private IDriverDAO driverDAO;

    @Autowired
    private IPassengerDAO passengerDAO;

    @Override
    public String createTripDriver(String startingPoint, String endingPoint,
                                   Instant startingTime, Instant endingTime, int idOfCar, int seats,
                                   Point coordStart, Point coordEnd, float distance) {

        TripDriver tripDriver = new TripDriver(startingPoint, endingPoint,
                Timestamp.from(startingTime), Timestamp.from(endingTime), true,
                false, false, seats, carDAO.getCar(idOfCar), false, coordStart, coordEnd, distance);
        dao.save(tripDriver);
        return tripDriver.getCar().getDriver().getEmployee().getEmail();
    }

    @Override
    public TripDriverVO findTripDriver(int id) {

        return TripDriverVO.fromEntity(dao.getTripDriver(id));
    }

    @Override
    public void updateTrip(int id, Instant newStart, Instant newEnd, String start, String end,
                           int newSeats, int idNewCar, Point coordStart, Point coordEnd, float distance) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setStartTime(java.sql.Timestamp.from(newStart));
        tripDriver.setEndTime(Timestamp.from(newEnd));
        tripDriver.setStartPoint(start);
        tripDriver.setEndPoint(end);
        tripDriver.setAvailableSeats(newSeats);
        tripDriver.setCar(carDAO.getCar(idNewCar));
        tripDriver.setCoordStart(coordStart);
        tripDriver.setCoordEnd(coordEnd);
        tripDriver.setDistance(distance);

        dao.update(tripDriver);

    }

    @Override
    public void updateSeats(int id, int seats) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setAvailableSeats(seats);
        dao.update(tripDriver);
    }


    @Override
    public TripDriverVO updateSave(int id, boolean isSaved) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setSaved(isSaved);
        dao.update(tripDriver);
        return TripDriverVO.fromEntity(dao.getTripDriver(id));
    }

    @Override
    public List<String> updateFinished(int id, boolean isFinished) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setFinished(isFinished);
        tripDriver.setActive(false);
        tripDriver.setHistory(true);
        if (isFinished) {
            float dist = tripDriver.getDistance();
            int seats = tripPassDAO.getAmountPass(id);
            float amountOfPoints = tripDriver.getCar().getDriver().getEmployee().getPoints();
            tripDriver.getCar().getDriver().getEmployee().setPoints((dist * (seats / 10)) + amountOfPoints);
        }

        dao.update(tripDriver);
        List<String> list = new ArrayList<>();
        list.add(tripDriver.getCar().getDriver().getEmployee().getEmail());
        List<TripPass> listTrips = tripPassDAO.getAllPass(id);
        for (TripPass tripPass : listTrips) {
            list.add(tripPass.getPassenger().getEmployee().getEmail());
            tripPass.setActive(false);
            tripPass.setFinished(isFinished);
            tripPass.setHistory(true);
            tripPassDAO.update(tripPass);
        }
        return list;
    }

    @Override
    public List<PassengerVO> getPassengers(int id) {
        List<TripPass> tripPassList = dao.getTripPass(id);
        List<PassengerVO> listPass = new ArrayList<PassengerVO>() {
        };
        for (TripPass tripPass : tripPassList) {
            listPass.add(PassengerVO.fromEntity(tripPass.getPassenger()));
        }
        return listPass;
    }

    @Override
    public void updateActive(int id, boolean isActive) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setActive(isActive);
        dao.update(tripDriver);
    }


    @Override
    public void setToNotActive(int id) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setActive(false);
        dao.update(tripDriver);
    }

    @Override
    public void deleteFromHistory(int id, boolean isHistory) {
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setHistory(false);
        dao.update(tripDriver);
    }


    @Override
    public int getAvailableSeats(int id) {
        return dao.getAvailableSeats(id);
    }

    @Override
    public void deleteDriverTrip(int id) {
        dao.delete(dao.getTripDriver(id));
    }


    @Override
    public List<TripDriverVO> getAll(int idEmp, Instant startingTime, Instant endingTime, int seats,
                                     Point coordStart, Point coordEnd) {
        List<TripDriverVO> list = dao.getAll().stream().map(TripDriverVO::fromEntity).collect(Collectors.toList());
        return list.stream()
                .filter(trips -> trips.getSeats() >= seats
                        && !driverDAO.getDriver(trips.getDriver().getId()).getPassengers().contains(passengerDAO.getByEmployeeId(idEmp))
                        && ComareUtils.isTimeInRange(startingTime, endingTime, trips.getStartingTime())
                        && !trips.getDriver().getId().equals(driverDAO.getByEmployeeId(idEmp).getId()))
                //.sorted()
                .collect(Collectors.toList());
    }
}