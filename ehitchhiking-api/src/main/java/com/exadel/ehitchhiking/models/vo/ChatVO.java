package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.TripDriver;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.reflect.Type;
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
        Gson gson = new GsonBuilder().create();
        Type listType = new TypeToken<List<ChatMessageVO>>(){}.getType();
        return gson.fromJson(history, listType);
    }


}
