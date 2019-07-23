package com.exadel.ehitchhiking.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.data.repository.query.SecurityEvaluationContextExtension;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.sql.DataSource;
import java.util.Arrays;

@EnableWebSecurity
@EnableWebMvc
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private WebApplicationContext applicationContext;

    /*
    @Autowired
    private AuthenticationSuccessHandlerImpl successHandler;*/
/*    @Autowired
    private  SpringSecurityUserInfo springSecurityUserInfo;*/
    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // by default uses a Bean by the name of corsConfigurationSource
                .cors()
                .and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//                .and()
//                .authorizeRequests()
//                .antMatchers("/Login")
//                .permitAll()
//                .antMatchers("/Admin/**").hasAuthority("Admin")
//                .antMatchers("/Employee/**", "/Passenger/**", "/Driver/**", "/Car/**").hasRole("Employee")
//                .antMatchers("/TripPassenger/**").hasRole("Passenger")
//                .antMatchers("/TripDriver/**").hasRole("Driver")
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                .loginProcessingUrl("/Login")
//                .failureHandler((httpServletRequest, httpServletResponse, e) -> {
//                    httpServletResponse.sendError(httpServletResponse.SC_UNAUTHORIZED);
//                })
//                .permitAll()
//                .and()
//                .logout()
//                .permitAll();

    }

/*    @PostConstruct
    public void completeSetup() {
        userDetailsService = applicationContext.getBean(UserDetailsService.class);
    }*/

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(11);
    }
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }

    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth
                .userDetailsService(new UserDetailsService() {
                    @Override
                    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
                        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

                        UserDetails user = null;
                        if (auth != null && !(auth instanceof AnonymousAuthenticationToken)) {
                            // userDetails = auth.getPrincipal()

                            Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

                            String username = null;
                            if (principal instanceof UserDetails) {
                                username = ((UserDetails) principal).getUsername();
                                user = (UserDetails) principal;

                            } else {
                                username = principal.toString();
                            }
                        }

                        return user;
                    }

                })
                .passwordEncoder(passwordEncoder());

    }
/*    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        final DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }*/

    @Bean
    public SecurityEvaluationContextExtension securityEvaluationContextExtension() {
        return new SecurityEvaluationContextExtension();
    }


    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:8080", "http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PUT", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}