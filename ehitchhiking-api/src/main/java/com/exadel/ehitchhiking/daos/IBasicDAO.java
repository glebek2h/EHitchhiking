package com.exadel.ehitchhiking.daos;

import java.util.List;

public interface IBasicDAO<T> {

//    T get(int id);

    List<T> getAll();

    void save(T t);

    void update(T t);

    void saveOrUpdate(T t);

    void delete(T t);
}
