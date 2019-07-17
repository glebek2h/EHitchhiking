package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.impl.TripPassIBasicDAO;
import com.exadel.ehitchhiking.Models.TripPass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class TripPassengerService {

    @Autowired
    private TripPassIBasicDAO dao = new TripPassIBasicDAO();

//    public void createTripPassenger(int pass, String startingPoint, String endingPoint,
//                                 Timestamp startingTime, Timestamp endingTime, int seats, int tripDriver){
//
//
//        TripPass trip_pass = new TripPass(startingPoint, endingPoint,
//                startingTime, endingTime, true,
//                false, false, seats);
//
//        trip_pass.setPass(dao.getPassenger(pass));
//        trip_pass.setTripDriver(dao.getTrip(tripDriver));
//
//        dao.save(trip_pass);
//
//    }


    public void updateTimeStart(int id, Timestamp newStart){


        TripPass trip_pass = dao.get(id);
        trip_pass.setTime_start(newStart);
        dao.update(trip_pass);

    }

    public void updateTimeEnd(int id, Timestamp newEnd){


        TripPass trip_pass = dao.get(id);
        trip_pass.setTime_end(newEnd);
        dao.update(trip_pass);

    }


    public void updatePointStart(int id, String start){


        TripPass trip_pass = dao.get(id);
        trip_pass.setPoint_start(start);
        dao.update(trip_pass);

    }

    public void updatePointEnd(int id, String end){


        TripPass trip_pass = dao.get(id);
        trip_pass.setPoint_end(end);
        dao.update(trip_pass);

    }



    public void updateSave(int id, boolean isSaved){


        TripPass trip_pass = dao.get(id);
        trip_pass.setIssaved(isSaved);
        dao.update(trip_pass);

    }

    public void updateFinished(int id, boolean isFinished){


        TripPass trip_pass = dao.get(id);
        trip_pass.setIssaved(isFinished);
        dao.update(trip_pass);

    }

    public void updateHistory(int id, boolean isHistory){


        TripPass trip_pass = dao.get(id);
        trip_pass.setIssaved(isHistory);
        dao.update(trip_pass);

    }


    public void updateSeats(int id, int newSeats){


        TripPass trip_pass = dao.get(id);
        trip_pass.setBooked_seats(newSeats);
        dao.update(trip_pass);

    }


    public void deleteDriverTrip(int id){

        dao.delete(dao.get(id));

    }
}
