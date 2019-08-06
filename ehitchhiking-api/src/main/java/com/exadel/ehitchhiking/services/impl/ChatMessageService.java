package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IChatDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.daos.impl.EmployeeDAO;
import com.exadel.ehitchhiking.models.*;
import com.exadel.ehitchhiking.models.vo.TripsActiveVO;
import com.exadel.ehitchhiking.services.IChatMessageService;
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
public class ChatMessageService implements IChatMessageService {

    @Autowired
    private IChatDAO dao;

    @Autowired
    ITripPassDAO tripPassDAO;

    @Autowired
    ITripDriverDAO tripDriverDAO;


    @Override
    public void saveChatMessage(int id, ChatMessage message) {
        String history = dao.getHistory(id);
        dao.save(new Chat(history + message.toString()));
    }

    @Override
    public Chat createChat(){
        Chat chat = new Chat();
        dao.save(chat);
        return chat;
    }

    @Override
    public List<List<Object>> getChatInfo(int id){

        List<List<Object>> IDs = new ArrayList<>();

        List<TripPass> listPass = tripPassDAO.getActive(id);

        for (TripPass trip: listPass){
            List<Object> list = new ArrayList<>();
            list.add(trip.getTripDriver().getChat().getId());
            list.add(trip.getTripDriver().getCoordStart());
            list.add(trip.getTripDriver().getCoordEnd());
            list.add(trip.getPassenger().getEmployee().getFirstName());
            IDs.add(list);

        }

        List<TripDriver> listDriver = tripDriverDAO.getActive(id);

        for (TripDriver trip: listDriver){
            List<Object> list = new ArrayList<>();
            list.add(trip.getChat().getId());
            list.add(trip.getCoordStart());
            list.add(trip.getCoordEnd());
            list.add(trip.getCar().getDriver().getEmployee().getFirstName());
            IDs.add(list);
        }
        return IDs;
    }
}
