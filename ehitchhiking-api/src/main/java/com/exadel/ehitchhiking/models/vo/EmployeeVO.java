package com.exadel.ehitchhiking.models.vo;


import com.exadel.ehitchhiking.models.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmployeeVO {

    private Integer id;

    private boolean isAdmin;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    public static EmployeeVO fromEntity(Employee Employee) {
        return new EmployeeVO(
                Employee.getId(),
                Employee.isAdmin(),
                Employee.getFirstName(),
                Employee.getLastName(),
                Employee.getEmail(),
                Employee.getPhoneNumber()
        );
    }
}
