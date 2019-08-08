package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.ICarDAO;
import com.exadel.ehitchhiking.daos.IDriverDAO;
import com.exadel.ehitchhiking.models.Car;
import com.exadel.ehitchhiking.models.vo.CarVO;
import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.services.ICarService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class CarService implements ICarService {

    @Autowired
    private ICarDAO dao;

    @Autowired
    private IDriverDAO driverDao;

    @Override
    public CarVO createCar(String color, String number, String carModel,
                           int idOfDriver) throws Exception {
        Object pr = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!((EmployeeVO) pr).getId().equals(Integer.valueOf(idOfDriver))) {
            throw new Exception();
        }
        Car newCar = new Car(color, number, carModel, driverDao.getByEmployeeId(idOfDriver));
        dao.save(newCar);
        return CarVO.fromEntity(newCar);
    }

    @Override
    public void findCarNumber(int carId) {
        dao.getNumber(carId);
    }

    @Override
    public void findId(int id) {
        dao.getCar(id);
    }

    @Override
    public void updateCar(CarVO newCar) {
        int carId = newCar.getId();
        Car oldCar = dao.getCar(carId);
        oldCar.setColor(newCar.getColor());
        oldCar.setModel(newCar.getModel());
        oldCar.setNumber(newCar.getNumber());
        dao.update(oldCar);
    }

    @Override
    public void deletedCar(int carId) throws Exception{
        Object pr = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Car car = dao.getCar(carId);
        if (!((EmployeeVO) pr).getId().equals(car.getDriver().getEmployee().getId())) {
            throw new Exception();
        }
        car.setDeleted(true);
        dao.update(car);
    }

    @Override
    public void deleteCarId(int id) {
        dao.delete(dao.getCar(id));
    }

    @Override
    public List<CarVO> getListCars(int empId) {
        return dao.getListCars(empId)
                .stream()
                .map(CarVO::fromEntity)
                .sorted(Comparator.comparingInt(CarVO::getId))//(car1, car2) -> car1.getId().compareTo(car2.getId())
                .collect(Collectors.toList());
    }

    @Override
    public int getAmountCars(int idDriver) {
        return dao.getListCars(idDriver).size();
    }
}