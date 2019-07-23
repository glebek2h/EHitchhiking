package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.IPassengerDAO;
import com.exadel.ehitchhiking.DAO.ITripDriverDAO;
import com.exadel.ehitchhiking.DAO.ITripPassDAO;
import com.exadel.ehitchhiking.Models.TripPass;
import com.exadel.ehitchhiking.Services.ITripPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;

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

    public void createTripPassenger(int pass, String startingPoint,
                                    String endingPoint,
                                    Timestamp startingTime, Timestamp endingTime,
                                    int seats, int idTripDriver) {
        TripPass tripPass = new TripPass(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats,
                passengerDAO.getPassenger(pass), tripDriverDAO.getTripDriver(idTripDriver));
        dao.save(tripPass);
    }

    public void updateTimeStart(int id, Timestamp newStart) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setStartTime(newStart);
        dao.update(tripPass);
    }

    public void updateTimeEnd(int id, Timestamp newEnd) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setEndTime(newEnd);
        dao.update(tripPass);
    }

    public void updatePointStart(int id, String start) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setStartPoint(start);
        dao.update(tripPass);
    }

    public void updatePointEnd(int id, String end) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setEndPoint(end);
        dao.update(tripPass);
    }

    public void updateSave(int id, boolean isSaved) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setSaved(isSaved);
        dao.update(tripPass);
    }

    public void updateFinished(int id, boolean isFinished) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setFinished(isFinished);
        dao.update(tripPass);
    }

    public void updateSeats(int id, int newSeats) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setBookedSeats(newSeats);
        dao.update(tripPass);
    }

    public void deleteDriverTrip(int id) {
        dao.delete(dao.getTripPass(id));
    }
}
