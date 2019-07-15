package com.exadel.DBController.Utils;

import com.exadel.DBController.Models.*;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

public class HibernateSessionFactoryUtil {

    private static SessionFactory sessionFactory;

    private HibernateSessionFactoryUtil() {
    }

    public static SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            try {
                Configuration configuration = new Configuration().configure();
                configuration.addAnnotatedClass(Employee.class);
                configuration.addAnnotatedClass(Driver.class);
                configuration.addAnnotatedClass(Cars.class);
                configuration.addAnnotatedClass(Passenger.class);
                configuration.addAnnotatedClass(Trip_Pass.class);
                configuration.addAnnotatedClass(Trip_Driver.class);
                configuration.addAnnotatedClass(Blacklist_Pass.class);
                configuration.addAnnotatedClass(Blacklist_Driver.class);
                StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties());
                sessionFactory = configuration.buildSessionFactory(builder.build());
            } catch (Exception e) {
                System.out.println("Exception!" + e);
            }
        }
        return sessionFactory;
    }
}