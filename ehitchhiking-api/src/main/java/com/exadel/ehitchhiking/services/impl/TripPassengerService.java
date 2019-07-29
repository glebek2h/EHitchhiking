package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IPassengerDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.services.ITripPassengerService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Override
    public void createTripPassenger(int passId, String startingPoint,
                                    String endingPoint,
                                    Timestamp startingTime, Timestamp endingTime,
                                    int seats, int idTripDriver) {
        TripPass tripPass = new TripPass(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats,
                passengerDAO.getPassenger(passId), tripDriverDAO.getTripDriver(idTripDriver));
        dao.save(tripPass);
    }

    @Override
    public void updateTimeStart(int id, Timestamp newStart) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setStartTime(newStart);
        dao.update(tripPass);
    }

    @Override
    public void updateTimeEnd(int id, Timestamp newEnd) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setEndTime(newEnd);
        dao.update(tripPass);
    }

    @Override
    public void updatePointStart(int id, String start) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setStartPoint(start);
        dao.update(tripPass);
    }

    @Override
    public void updatePointEnd(int id, String end) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setEndPoint(end);
        dao.update(tripPass);
    }

    @Override
    public void updateSave(int id, boolean isSaved) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setSaved(isSaved);
        dao.update(tripPass);
    }

    @Override
    public void updateFinished(int id, boolean isFinished) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setFinished(isFinished);
        dao.update(tripPass);
    }


    @Override
    public void updateHistory(int id, boolean isHistory){
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setSaved(isHistory);
        dao.update(tripPass);
    }

    @Override
    public void updateSeats(int id, int newSeats) {
        TripPass tripPass = dao.getTripPass(id);
        tripPass.setBookedSeats(newSeats);
        dao.update(tripPass);
    }

    @Override
    public void deleteDriverTrip(int id) {
        dao.delete(dao.getTripPass(id));
    }
}
