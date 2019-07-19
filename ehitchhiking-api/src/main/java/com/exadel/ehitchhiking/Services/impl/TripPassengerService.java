package com.exadel.ehitchhiking.Services.impl;

import com.exadel.ehitchhiking.DAO.ITripPassDAO;
import com.exadel.ehitchhiking.DAO.impl.TripPassIBasicDAO;
import com.exadel.ehitchhiking.Models.TripPass;
import com.exadel.ehitchhiking.Services.ITripPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;

@Service
@Transactional(rollbackOn = Exception.class)
public class TripPassengerService implements ITripPassengerService {

    @Autowired
    private ITripPassDAO dao;

    public void createTripPassenger(int pass, String startingPoint,
                                    String endingPoint,
                                    Timestamp startingTime, Timestamp endingTime,
                                    int seats, int idTripDriver) {
        TripPass tripPass = new TripPass(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats,
                dao.getPassenger(pass), dao.getTrip(idTripDriver));
        dao.save(tripPass);
    }

    public void updateTimeStart(int id, Timestamp newStart) {
        TripPass tripPass = dao.get(id);
        tripPass.setStartTime(newStart);
        dao.update(tripPass);
    }

    public void updateTimeEnd(int id, Timestamp newEnd) {
        TripPass tripPass = dao.get(id);
        tripPass.setEndTime(newEnd);
        dao.update(tripPass);
    }

    public void updatePointStart(int id, String start) {
        TripPass tripPass = dao.get(id);
        tripPass.setStartPoint(start);
        dao.update(tripPass);
    }

    public void updatePointEnd(int id, String end) {
        TripPass tripPass = dao.get(id);
        tripPass.setEndPoint(end);
        dao.update(tripPass);
    }

    public void updateSave(int id, boolean isSaved) {
        TripPass tripPass = dao.get(id);
        tripPass.setSaved(isSaved);
        dao.update(tripPass);
    }

    public void updateFinished(int id, boolean isFinished) {
        TripPass tripPass = dao.get(id);
        tripPass.setFinished(isFinished);
        dao.update(tripPass);
    }

    public void updateSeats(int id, int newSeats) {
        TripPass tripPass = dao.get(id);
        tripPass.setBookedSeats(newSeats);
        dao.update(tripPass);
    }

    public void deleteDriverTrip(int id) {
        dao.delete(dao.get(id));
    }
}
