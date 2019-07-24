package com.exadel.ehitchhiking.services;

import com.exadel.ehitchhiking.models.Employee;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface IEmployeeService {
    void createEmployee(boolean isAdmin, String username, String firstName,
                               String lastName, String email, String password, String phoneNum);
    Employee findUserId(int userId);
    Employee findUserUsername(String username);
    int findIdByUsername(String username);
    void updatePassword(String username, String password);
    void updateEmail(String username, String email);
    void updateFirstName(String username, String firstName);
    void updateLastName(String username, String lastName);
    void updatePhone(String username, String phone);
    void deleteUser(String username);
    void deleteUserId(int id);
    List<Employee> getAll();
    UserDetails loadUserByUsername(String username);
}
