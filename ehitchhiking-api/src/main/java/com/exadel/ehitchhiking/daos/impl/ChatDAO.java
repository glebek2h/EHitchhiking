package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IChatDAO;
import com.exadel.ehitchhiking.models.Chat;

import java.util.List;

public class ChatDAO extends AbstractDAO<Chat> implements IChatDAO {
    @Override
    public List<Chat> getAll() {
        return (List<Chat>) getCurrentSession().createQuery("from Chat ").list();
    }
}
