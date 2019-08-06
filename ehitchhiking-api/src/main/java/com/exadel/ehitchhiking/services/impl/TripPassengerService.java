package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.models.vo.DriverVO;
import com.exadel.ehitchhiking.models.vo.TripPassVO;
import com.exadel.ehitchhiking.services.ITripPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Point;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class TripPassengerService implements ITripPassengerService {
    @Autowired
    private ITripPassDAO dao;
    @Autowired
    private IPassengerDAO passengerDAO;
    @Autowired
    private ITripDriverDAO tripDriverDAO;

    @Override
    public List<String> createTripPassenger(int empId, String startingPoint,
                                            String endingPoint,
                                            Instant startingTime, Instant endingTime,
                                            int seats, int idTripDriver, Point coordStart, Point coordEnd,
                                            float distance) {
        TripPass tripPass = new TripPass(startingPoint, endingPoint,
                Timestamp.from(startingTime), Timestamp.from(endingTime), true,
                false, false, seats,
                passengerDAO.getByEmployeeId(empId), tripDriverDAO.getTripDriver(idTripDriver), false, coordStart,
                coordEnd, distance);
        dao.save(tripPass);
        List<String> emailList = new ArrayList<>();
        emailList.add(tripPass.getPassenger().getEmployee().getEmail());
        emailList.add(tripPass.getTripDriver().getCar().getDriver().getEmployee().getEmail());
        return emailList;
    }


    @Override
    public void updateTrip(int id, Instant newStart, Instant newEnd, String start, String end,
                           int newSeats, Point coordStart, Point coordEnd, float distance) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setStartTime(Timestamp.from(newStart));
        tripPass.setEndTime(Timestamp.from(newEnd));
        tripPass.setStartPoint(start);
        tripPass.setEndPoint(end);
        tripPass.setBookedSeats(newSeats);
        tripPass.setCoordStart(coordStart);
        tripPass.setCoordEnd(coordEnd);
        tripPass.setDistance(distance);

        dao.update(tripPass);

    }


    @Override
    public TripPassVO updateSave(int id, boolean isSaved) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setSaved(isSaved);
        dao.update(tripPass);
        return TripPassVO.fromEntity(dao.getTripPass(id));
    }

    @Override
    public List<String> updateFinished(int id, boolean isFinished) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setFinished(isFinished);
        tripPass.setActive(false);
        if (!isFinished) {
            TripDriver tripDriver = tripPass.getTripDriver();
            tripDriver.setAvailableSeats(tripDriver.getAvailableSeats() + tripPass.getBookedSeats());
            tripDriverDAO.update(tripDriver);
        }
        dao.update(tripPass);
        List<String> list = new ArrayList<>();
        list.add(tripPass.getPassenger().getEmployee().getEmail());
        list.add(tripPass.getTripDriver().getCar().getDriver().getEmployee().getEmail());
        return list;
    }


    @Override
    public void updateHistory(int id, boolean isHistory) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setSaved(isHistory);
        dao.update(tripPass);
    }

    @Override
    public void updateActive(int id, boolean isActive) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setActive(isActive);
        dao.update(tripPass);
    }

    @Override
    public void deletePassTrip(int id) {
        dao.delete(dao.getTripPass(id));
    }

    @Override
    public TripPassVO findTripPass(int id) {

        return TripPassVO.fromEntity(dao.getTripPass(id));
    }

    @Override
    public DriverVO findIdDriver(int id) {
        return findTripPass(id).getDriver();
    }

}