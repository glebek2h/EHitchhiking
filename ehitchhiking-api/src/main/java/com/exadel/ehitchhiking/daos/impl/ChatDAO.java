package com.exadel.ehitchhiking.daos.impl;

import com.exadel.ehitchhiking.daos.IChatDAO;
import com.exadel.ehitchhiking.models.Chat;
import com.exadel.ehitchhiking.models.ChatMessage;
import org.springframework.stereotype.Repository;
@Repository
public class ChatDAO extends AbstractDAO<Chat> implements IChatDAO {

        public ChatDAO() {
            super(Chat.class);
        }

        public String getHistory(int id){

            return (String) getCurrentSession().createQuery("select history From Chat where id = '" + id + "'").uniqueResult();
        }

    @Override
    public Chat getChat(int id) {
        return getCurrentSession().get(Chat.class, id);
    }
}
