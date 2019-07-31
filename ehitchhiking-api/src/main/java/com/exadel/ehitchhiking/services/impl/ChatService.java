package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IChatDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.models.Chat;
import com.exadel.ehitchhiking.models.TripDriver;
import com.exadel.ehitchhiking.services.IChatService;
import org.springframework.beans.factory.annotation.Autowired;

public class ChatService implements IChatService {

    @Autowired
    private IChatDAO dao;

    @Autowired
    private ITripDriverDAO tripDriverDAO;

    @Override
    public void createChat(int idTripDriver) {
        Chat chat = new Chat();
        dao.save(chat);
        TripDriver tripDriver = tripDriverDAO.getTripDriver(idTripDriver);
        tripDriver.setChat(chat);
        tripDriverDAO.update(tripDriver);
    }

    @Override
    public void updateHistory(int idTripDriver, String history) {
        Chat chat = tripDriverDAO.getTripDriver(idTripDriver).getChat();
        chat.setHistory(history);
        dao.update(chat);
    }

    @Override
    public String getHistory(int idTripDriver) {
        return tripDriverDAO.getTripDriver(idTripDriver).getChat().getHistory();
    }
}
