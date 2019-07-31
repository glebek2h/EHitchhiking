package com.exadel.ehitchhiking.services;

public interface IChatService {
    void createChat(int idTripDriver);
    void updateHistory(int idTripDriver, String history);
    String getHistory(int idTripDriver);
}
