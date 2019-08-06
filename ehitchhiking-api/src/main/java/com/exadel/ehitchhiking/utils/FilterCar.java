package com.exadel.ehitchhiking.utils;

import com.exadel.ehitchhiking.models.vo.EmployeeVO;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.*;
import java.io.IOException;

public class FilterCar implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        Object pr = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (((EmployeeVO)pr).getId().equals(Integer.parseInt(request.getParameterValues("id")[0]))) {
            chain.doFilter(request, response);
        }else{
            request.getRequestDispatcher("/error/redirect").forward(request, response);
        }
    }
}
