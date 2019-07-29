package com.exadel.ehitchhiking.services.impl;

import com.exadel.ehitchhiking.daos.IEmployeeDAO;
import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import com.exadel.ehitchhiking.services.IEmployeeService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(rollbackOn = Exception.class)
@NoArgsConstructor
public class EmployeeService implements IEmployeeService {

    @Autowired
    private IEmployeeDAO dao;

    @Override
    public void createEmployee(boolean isAdmin, String firstName, String lastName,
                               String email, String password, String phoneNum) {
        dao.save(new Employee(isAdmin, firstName, lastName, email, password, phoneNum));
    }

    @Override
    public EmployeeVO findUserId(int userId) {
        return EmployeeVO.fromEntity(dao.getEmployee(userId));
    }

    @Override
    public EmployeeVO findUserUsername(String username) {
        return EmployeeVO.fromEntity(dao.getByEmail(username));
    }

    @Override
    public int findIdByUsername(String username) {
        Employee employee = dao.getByEmail(username);
        return employee.getId();
    }


    @Override
    public void updateEmployee(String email, String password, String lastName,
                               String firstName, String phoneNum) {
        Employee employee = dao.getByEmail(email);
        employee.setPassword(password);
        employee.setFirstName(firstName);
        employee.setLastName(lastName);
        employee.setPhoneNumber(phoneNum);
        dao.update(employee);
    }


    @Override
    public void deleteUser(String username) {
        dao.delete(dao.getByEmail(username));
    }

    @Override
    public void deleteUserId(int id) {
        dao.delete(dao.getEmployee(id));
    }

    @Override
    public List<EmployeeVO> getAll() {
        return dao.getAll().stream().map(EmployeeVO::fromEntity).collect(Collectors.toList());
    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return findUserUsername(email);
    }

}
