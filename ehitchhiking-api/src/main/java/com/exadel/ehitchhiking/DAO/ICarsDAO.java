package com.exadel.ehitchhiking.DAO;

import com.exadel.ehitchhiking.Models.Cars;

import java.util.List;

public interface ICarsDAO extends IBasicDAO<Cars>{
    List<Cars> getAll();
    String getNumber(int id);
    List<Cars> getAllUsers(String username);
    List<Cars> getListCars(int idDriver);

}
