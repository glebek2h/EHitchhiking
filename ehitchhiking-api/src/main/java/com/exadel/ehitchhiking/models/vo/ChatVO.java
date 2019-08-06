package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.ChatMessage;
import com.exadel.ehitchhiking.models.TripDriver;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.boot.json.JsonParser;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatVO {

    private Integer id;
    private String startPoint;
    private String endPoint;
    private List<ChatMessageVO> chatMessage;


    public static ChatVO fromEntity(TripDriver tripDriver) {
        return new ChatVO(
                tripDriver.getChat().getId(),
                tripDriver.getStartPoint(),
                tripDriver.getEndPoint(),
                getListOfMsg(tripDriver.getChat().getHistory())
        );
    }

    private static List<ChatMessageVO> getListOfMsg(String history) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(history, ArrayList.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Collections.emptyList();
    }


}
