package org.wecancodeit.serverside;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@SpringBootApplication
public class ServerSideApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerSideApplication.class, args);
//		try {
//			Connection connection = DriverManager.getConnection("jdbc:postgresql://users.ccilrzy34gcl.us-east-2.rds.amazonaws.com:5432/UsersDB", "postgres", "postgresql");
//
//			Statement statement = connection.createStatement();
//			System.out.println("Database Connected !");
//			ResultSet resultSet = statement.executeQuery("select * from users");
//			while (resultSet.next()) {
//				System.out.println(resultSet.getString("login"));
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}

	}

}
