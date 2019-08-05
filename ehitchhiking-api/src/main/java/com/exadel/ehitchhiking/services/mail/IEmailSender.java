package com.exadel.ehitchhiking.services.mail;

import java.util.List;

public interface IEmailSender {
    boolean sendingEmail(List<String> recepients, String topic, String content);
}
