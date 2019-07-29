package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Employee;
import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IEmployeeService extends UserDetailsService {
    void createEmployee(boolean isAdmin, String firstName,
                               String lastName, String email, String password, String phoneNum);
    EmployeeVO findUserId(int userId);
    EmployeeVO findUserUsername(String username);
    int findIdByUsername(String username);
    void deleteUser(String username);
    void deleteUserId(int id);
    List<EmployeeVO> getAll();
    UserDetails loadUserByUsername(String email);
    void updateEmployee(String email, String password, String lastName,
                        String firstName, String phoneNum);
}
