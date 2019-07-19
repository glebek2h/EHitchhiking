package com.exadel.ehitchhiking.Services;

import com.exadel.ehitchhiking.DAO.ICarsDAO;
import com.exadel.ehitchhiking.DAO.ITripDriverDAO;
import com.exadel.ehitchhiking.DAO.impl.CarsIBasicDAO;
import com.exadel.ehitchhiking.DAO.impl.TripDriverIBasicDAO;
import com.exadel.ehitchhiking.Models.Cars;
import com.exadel.ehitchhiking.Models.TripDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.sql.Timestamp;

@Service
@Transactional(rollbackOn = Exception.class)
public class TripDriverService  {

    @Autowired
    private ITripDriverDAO dao = new TripDriverIBasicDAO();
    @Autowired
    private ICarsDAO carsIBasicDAO = new CarsIBasicDAO();

    public void createTripDriver(String startingPoint, String endingPoint,
                                 Timestamp startingTime, Timestamp endingTime, int id_of_car, int seats){




        TripDriver trip_driver = new TripDriver(startingPoint, endingPoint,
                startingTime, endingTime, true,
                false, false, seats, carsIBasicDAO.get(id_of_car));

        dao.save(trip_driver);

    }


    public void updateTimeStart(int id, Timestamp newStart){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setTime_start(newStart);
        dao.update(trip_driver);

    }

    public void updateTimeEnd(int id, Timestamp newEnd){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setTime_end(newEnd);
        dao.update(trip_driver);

    }


    public void updatePointStart(int id, String start){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setPoint_start(start);
        dao.update(trip_driver);

    }

    public void updatePointEnd(int id, String end){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setPoint_end(end);
        dao.update(trip_driver);

    }



    public void updateSave(int id, boolean isSaved){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setIssaved(isSaved);
        dao.update(trip_driver);

    }

    public void updateFinished(int id, boolean isFinished){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setIssaved(isFinished);
        dao.update(trip_driver);

    }

    public void updateHistory(int id, boolean isHistory){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setIssaved(isHistory);
        dao.update(trip_driver);

    }

    public void updateSeats(int id, int newSeats){


        TripDriver trip_driver = dao.get(id);
        trip_driver.setAvailable_seats(newSeats);

        dao.update(trip_driver);

    }

    public void addPassenger(int idTripPass, int id){
        TripDriver trip_driver = dao.get(id);
        trip_driver.getSet_trip_pass_id().add(dao.getTripPass(idTripPass));
        dao.update(trip_driver);
    }

    public void deletePassenger(int idTripPass, int id){
        TripDriver trip_driver = dao.get(id);
        trip_driver.getSet_trip_pass_id().remove(dao.getTripPass(idTripPass));
        dao.update(trip_driver);
    }


    public void updateCar(int id, int idNewCar){
        TripDriver trip_driver = dao.get(id);
        trip_driver.setCar(carsIBasicDAO.get(idNewCar));
        dao.update(trip_driver);
    }


    public void deleteDriverTrip(int id){

        dao.delete(dao.get(id));

    }
}
