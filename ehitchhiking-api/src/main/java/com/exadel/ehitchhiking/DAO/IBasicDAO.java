package com.exadel.ehitchhiking.DAO;

import java.util.List;

public interface IBasicDAO<T> {

    T get(int id);

    List<T> getAll();

    void save(T t);

    void update(T t);

    void delete(T t);
}
