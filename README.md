#EHitchhiking 

## Prerequisites
 
 This api project was created using maven dependencies(including hibernate, spring boot, lombok etc), Java 1.8. It runs on the postgresql Database, which you need to install.  
 
### Installing
 
To run the project on your machine you need to install the postgres. To install the postgres. Follow this link to download the postgres https://www.enterprisedb.com/downloads/postgres-postgresql-downloads. After downloading find pgAdmin4 on your computer and open the browser for creating the database (with default port number 5432). It is possible to run the script (On GitHub -- newdb.sql) in your IDEA. In Intellij you can add the databse by clicking Database on the right part of your IDEA screen, pressing + -> Data Source -> Postgre SQL. Add your database name and password and test the connection and press add. You need to add your settings in the ehichhiking-api.src.mail.java.com.exadel.ehichhiking.resourses.applicaition.properties 

	spring.datasource.url=jdbc:postgresql://localhost:5432/*theNameOfYourDB* 		(default: postgres)
	spring.datasource.username= *your username* (default: postgres)
	spring.datasource.password= *your password*

In the right part of the screen click on maven -> + -> ehichhiking-api -> select gs-serving-web-content. 

In Project structure, in Project choose Project SDK -- "*1.8*". Project language "8 - lambdas, type annotations"
In "*Modules*" in "*gs-serving-web-content*" maven added Spring and Web. Right-click on the gs-serving-web-content to add Hibernate. 

In settings find *plugings* -> *marketplace* -> find *lombok*, download it and restart your IDEA. 

To start the server go to *ehichhiking-api.src.mail.java.com.exadel.ehichhiking.Start* and press the *run Start* button next to


	public class Start {    
 
		public static void main(String[] args) {
        	SpringApplication.run(Start.class, args);
    	}
	}