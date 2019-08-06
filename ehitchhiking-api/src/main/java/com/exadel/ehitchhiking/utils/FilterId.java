package com.exadel.ehitchhiking.utils;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class FilterId implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        try {
            Object pr = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            if (((EmployeeVO) pr).getId().equals(Integer.parseInt(request.getParameterValues("id")[0]))) {
                chain.doFilter(request, response);
            } else {
                request.getRequestDispatcher("/error/redirect").forward(request, response);
            }
        } catch (NullPointerException e) {
            request.getRequestDispatcher("/error/redirect").forward(request, response);
        }
    }
}
