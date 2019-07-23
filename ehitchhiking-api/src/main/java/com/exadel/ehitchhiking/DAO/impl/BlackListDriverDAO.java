//package com.exadel.ehitchhiking.DAO.impl;
//
//import com.exadel.ehitchhiking.DAO.IBasicDAO;
//import com.exadel.ehitchhiking.DAO.IBlackListDriverDAO;
//import com.exadel.ehitchhiking.Models.BlacklistDriver;
//import com.exadel.ehitchhiking.Models.Driver;
//import com.exadel.ehitchhiking.Models.Passenger;
//
//import org.hibernate.SessionFactory;
//import org.springframework.stereotype.Repository;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Repository
//public class BlackListDriverDAO extends AbstractDAO<BlacklistDriver> implements IBlackListDriverDAO {
//
//    public BlackListDriverDAO(SessionFactory sessionFactory) {
//        super(sessionFactory);
//    }
//
//    @Override
//    public List<BlacklistDriver> getAll() {
//        List<BlacklistDriver> blacklistDrivers = (List<BlacklistDriver>)  getCurrentSession().createQuery("From com.exadel.ehitchhiking.Models.BlacklistDriver").list();
//        return blacklistDrivers;
//    }
//
//    @Override
//    public BlacklistDriver getBlackList(int id){
//        return (BlacklistDriver) getCurrentSession().get(BlacklistDriver.class, id);
//    }
//
//    @Override
//    public BlacklistDriver getBlackList(int driverId, int passId){
//        return (BlacklistDriver) getCurrentSession().createQuery("from BlacklistDriver where driver.id = '" + driverId + "' and passId = '" + passId + "'").uniqueResult();
//    }
//}
