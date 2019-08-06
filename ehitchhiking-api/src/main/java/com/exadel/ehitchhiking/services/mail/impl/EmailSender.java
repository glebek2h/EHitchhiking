package com.exadel.ehitchhiking.services.mail.impl;

import com.exadel.ehitchhiking.services.mail.IEmailSender;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;
import sun.jvm.hotspot.debugger.AddressException;

import javax.annotation.PostConstruct;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


import java.util.Date;
import java.util.List;
import java.util.Properties;

@Service
@PropertySource("classpath:application.properties")
public class EmailSender implements IEmailSender {

    @Value("${mail.smtp.sender.from}")
    private String sender;

    @Value("${mail.smtp.sender.password}")
    private String password;

    @Value("${mail.smtp.auth}")
    private String auth;

    @Value("${mail.smtp.starttls.enable}")
    private String starttls_enable;

    @Value("${mail.smtp.host}")
    private String host;

    @Value("${mail.smtp.port}")
    private String port;

    @Value("${mail.smtp.ssl.trust}")
    private String ssl_trust;

    private Properties properties = new Properties();

    @PostConstruct
    public void propertiesInit() {
        properties.setProperty("mail.smtp.auth", auth);
        properties.setProperty("mail.smtp.starttls.enable", starttls_enable);
        properties.setProperty("mail.smtp.host", host);
        properties.setProperty("mail.smtp.port", port);
        properties.setProperty("mail.smtp.ssl.trust", ssl_trust);
    }

    private Session createSession() {
        return javax.mail.Session.getDefaultInstance(properties, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(sender, password);
            }
        });
    }

    @Override
    public boolean sendingEmail(List<String> recepients, String topic, String content)  {
        try {
            Session session = this.createSession();
            MimeMessage message = new MimeMessage(session);

            for (String recepient : recepients) {
                message.addRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
            }

            message.setFrom(new InternetAddress(sender));
            message.setSubject(topic);
            message.setContent(content, "text/plain");
            message.setSentDate(new Date());

            Transport.send(message);
            return true;
        } catch (AddressException | MessagingException e){
            e.printStackTrace();
            return false;
        }
    }
}
