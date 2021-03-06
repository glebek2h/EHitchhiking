package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IChatDAO;
import com.exadel.ehitchhiking.daos.IEmployeeDAO;
import com.exadel.ehitchhiking.daos.ITripDriverDAO;
import com.exadel.ehitchhiking.daos.ITripPassDAO;
import com.exadel.ehitchhiking.daos.impl.EmployeeDAO;
import com.exadel.ehitchhiking.models.*;
import com.exadel.ehitchhiking.models.vo.ChatMessageVO;
import com.exadel.ehitchhiking.models.vo.ChatVO;
import com.exadel.ehitchhiking.models.vo.TripsActiveVO;
import com.exadel.ehitchhiking.services.IChatMessageService;
import com.exadel.ehitchhiking.services.ITripsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.lang.reflect.Type;
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

    @Autowired
    IEmployeeDAO employeeDAO;


    @Override
    public void saveChatMessage(int id, ChatMessage message) {
        Gson gson = new GsonBuilder().create();
        Type listType = new TypeToken<List<ChatMessageVO>>(){}.getType();
        Chat chat = dao.getChat(id);

        List<ChatMessageVO> history = gson.fromJson(chat.getHistory(), listType);
        String name = employeeDAO.getByEmail(message.getSender()).getFirstName();
        history.add(ChatMessageVO.getNewMsgVO(message, name));

        String newHistory = gson.toJson(history);
        chat.setHistory(newHistory);

        dao.update(chat);
    }

    @Override
    public Chat createChat(){
        Chat chat = new Chat();
        chat.setHistory("[]");
        dao.save(chat);
        return chat;
    }

    @Override
    public String getMemberName(String email) {
        return employeeDAO.getByEmail(email).getFirstName();
    }

    @Override
    public List<ChatVO> getChatInfo(int id){

        List<ChatVO> IDs = new ArrayList<>();

        List<TripPass> listPass = tripPassDAO.getActive(id);

        for (TripPass trip: listPass){
            IDs.add(ChatVO.fromEntity(trip.getTripDriver()));
        }

        List<TripDriver> listDriver = tripDriverDAO.getActive(id);

        for (TripDriver trip: listDriver){
            IDs.add(ChatVO.fromEntity(trip));
        }
        return IDs;
    }
}
