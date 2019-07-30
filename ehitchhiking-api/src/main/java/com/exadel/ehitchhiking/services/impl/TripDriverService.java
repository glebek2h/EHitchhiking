package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.ICarDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.vo.TripDriverVO;
import com.exadel.ehitchhiking.services.ITripDriverService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Point;
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
                                 Timestamp startingTime, Timestamp endingTime, int idOfCar, int seats,
                                 Point coordStart, Point coordEnd, float distance){

        TripDriver tripDriver = new TripDriver(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats, carDAO.getCar(idOfCar), false, coordStart,coordEnd, distance);
        dao.save(tripDriver);
    }

    @Override
    public TripDriverVO findTripDriver(int id){

        return TripDriverVO.fromEntity(dao.getTripDriver(id));
    }

    @Override
    public void updateTrip(int id, Timestamp newStart, Timestamp newEnd, String start, String end,
                           int newSeats, int idNewCar, Point coordStart, Point coordEnd, float distance){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setStartTime(newStart);
        tripDriver.setEndTime(newEnd);
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
    public void updateSeats(int id, int seats){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setAvailableSeats(seats);
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
        tripDriver.setFinished(isFinished);
        dao.update(tripDriver);
    }

    @Override
    public void updateActive(int id, boolean isActive){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setActive(isActive);
        dao.update(tripDriver);
    }


    @Override
    public void setToNotActive(int id){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setActive(false);
        dao.update(tripDriver);
    }

    @Override
    public void deleteFromHistory(int id, boolean isHistory){
        TripDriver tripDriver = dao.getTripDriver(id);
        tripDriver.setHistory(false);
        dao.update(tripDriver);
    }



    @Override
    public int getAvailableSeats(int id){
        return dao.getAvailableSeats(id);
    }

    @Override
    public void deleteDriverTrip(int id){
        dao.delete(dao.getTripDriver(id));
    }


    @Override
    public List<TripDriverVO> getAll(Timestamp startingTime, Timestamp endingTime, int seats,
                                     Point coordStart, Point coordEnd) {
        List<TripDriverVO> list =  dao.getAll().stream().map(TripDriverVO::fromEntity).collect(Collectors.toList());
        List<TripDriverVO> filteredList;

        list.stream()
                .filter(trips -> trips.getSeats() >= seats
                        && startingTime.toLocalDateTime().minusHours(1).isBefore(Timestamp.from(trips.getStartingTime()).toLocalDateTime())
                        && (Math.sqrt((trips.getCoordStart().getX() - coordStart.getX()) * (trips.getCoordStart().getX() - coordStart.getX()) +
                        (trips.getCoordStart().getY() - coordStart.getY())*(trips.getCoordStart().getY() - coordStart.getY())) <= 0.01)
                        && (Math.sqrt((trips.getCoordEnd().getX() - coordEnd.getX()) * (trips.getCoordEnd().getX() - coordEnd.getX())) +
                        (trips.getCoordStart().getY() - coordEnd.getY())*(trips.getCoordStart().getY() - coordEnd.getY())) <= 0.01)
                .sorted()
                .collect(Collectors.toList());

        for (TripDriverVO trip: list){
            assert(trip.getSeats() >= seats);}
/*        for (TripDriverVO trip: list){
            if (trip.getSeats() >= seats){
                if (startingTime.toLocalDateTime().minusHours(1).isBefore(Timestamp.from(trip.getStartingTime()).toLocalDateTime())
                &  endingTime.toLocalDateTime().plusHours(1).isAfter(Timestamp.from(trip.getEndingTime()).toLocalDateTime())){
                }
            }
        }*/
        return list;
    }
}
