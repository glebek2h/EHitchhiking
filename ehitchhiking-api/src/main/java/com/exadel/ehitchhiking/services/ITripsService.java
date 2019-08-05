package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.vo.TripsActiveVO;
import com.exadel.ehitchhiking.models.vo.TripsHistoryVO;

import java.util.List;

public interface ITripsService {
    List<TripsHistoryVO> getAllHistory(int id);
    List<TripsActiveVO> getAllActive (int id);
    void refreshHistory(int id);
}