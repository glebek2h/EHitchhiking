package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.services.IAutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
@EnableScheduling
@Transactional
public class AutoService implements IAutoService {

    @Autowired
    private ITripDriverDAO tripDriverDAO;

    @Autowired
    private ITripPassDAO tripPassDAO;

    @Override
    @Scheduled(fixedDelay = 1000*60*10)
    public void updateTripsState() {
        List<TripDriver> tripDrivers = tripDriverDAO.getAll();
        List<TripPass> tripPasses = tripPassDAO.getAll();
        Instant time = Instant.now();
        for (TripDriver it : tripDrivers) {
            if (time.minus(24, ChronoUnit.HOURS).isAfter(it.getEndTime().toInstant())){
                it.setHistory(true);
                it.setFinished(true);
                it.setActive(false);
                tripDriverDAO.update(it);
            }
        }
        for (TripPass it : tripPasses) {
            if (time.minus(24, ChronoUnit.HOURS).isAfter(it.getEndTime().toInstant())){
                it.setHistory(true);
                it.setFinished(true);
                it.setActive(false);
                tripPassDAO.update(it);
            }
        }
    }
}
