package com.exadel.ehitchhiking.authentification;

import lombok.*;

@NoArgsConstructor
@ToString
@EqualsAndHashCode
@AllArgsConstructor
public class AuthData {

    @Getter
    @Setter
    private String login;

    @Getter
    @Setter
    private String password;
}
