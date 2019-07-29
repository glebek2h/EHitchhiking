package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IEmployeeService extends UserDetailsService {
    void createEmployee(boolean isAdmin, String username, String firstName,
                               String lastName, String email, String password, String phoneNum);
    EmployeeVO findUserId(int userId);
    EmployeeVO findUserByUsername(String username);
    void updatePassword(String username, String password);
    void updateEmail(String username, String email);
    void deleteUser(String username);
    void deleteUserId(int id);
    List<EmployeeVO> getAll();
    UserDetails loadUserByUsername(String email);
}
