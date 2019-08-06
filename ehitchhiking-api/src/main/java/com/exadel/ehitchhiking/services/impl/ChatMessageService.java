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
    public List<Integer> getChatInfo(int id){

        List<Integer> IDs = new ArrayList<>();

        List<TripPass> listPass = tripPassDAO.getActive(id);

        for (TripPass trip: listPass){
            IDs.add(trip.getTripDriver().getChat().getId());
        }

        List<TripDriver> listDriver = tripDriverDAO.getActive(id);

        for (TripDriver trip: listDriver){
            IDs.add(trip.getChat().getId());
        }
        return IDs;
    }
}
