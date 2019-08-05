package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IEmployeeService extends UserDetailsService {

    void createEmployee(boolean isAdmin, String firstName, String lastName,
                        String email, String password, String phoneNum);

    EmployeeVO findUserById(int userId);

    EmployeeVO findUserByUsername(String username);

    void updatePassword(String username, String password);

    void updateEmail(String username, String email);

    EmployeeVO findByEmail(String email);

    int findIdByEmail(String email);

    void deleteUser(String username);

    void deleteUserById(int id);

    List<EmployeeVO> getAll();

    UserDetails loadUserByUsername(String email);

    void updateEmployee(String email, String lastName, String firstName, String phoneNum);
}
