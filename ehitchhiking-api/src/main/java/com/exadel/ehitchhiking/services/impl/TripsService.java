package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.daos.impl.TripDriverDAO;
import com.exadel.ehitchhiking.daos.impl.TripPassDAO;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.models.TripPass;
import com.exadel.ehitchhiking.models.vo.TripsHistoryVO;
import com.exadel.ehitchhiking.services.ITripsService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class TripsService implements ITripsService {

    @Autowired
    ITripDriverDAO tripDriver = new TripDriverDAO();

    @Autowired
    ITripPassDAO tripPassenger = new TripPassDAO();

    public List<TripsHistoryVO> getAllHistory(int id){
        List<TripsHistoryVO> history = new ArrayList<>();
        System.out.println(tripDriver.getHistory(id));

        for (TripDriver tr : tripDriver.getHistory(id))
            history.add(TripsHistoryVO.fromEntity(tr));

        for (TripPass tr : tripPassenger.getHistory(id))
            history.add(TripsHistoryVO.fromEntity(tr));
        System.out.println(history);
        return history;
    }
}
