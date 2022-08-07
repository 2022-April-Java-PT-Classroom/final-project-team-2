package org.wecancodeit.serverside;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@SpringBootApplication
public class ServerSideApplication {
	public ServerSideApplication() {
	}

	public static void main(String[] args) {
		SpringApplication.run(ServerSideApplication.class, args);
<<<<<<< HEAD
		try {
			Connection connection = DriverManager.getConnection("jdbc:postgresql://users.ccilrzy34gcl.us-east-2.rds.amazonaws.com:5432/UsersDB", "postgres", "postgresql");

			Statement statement = connection.createStatement();
			System.out.println("Database Connected !");
			ResultSet resultSet = statement.executeQuery("select * from users");
			while (resultSet.next()) {
				System.out.println(resultSet.getString("login"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
=======
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

>>>>>>> 1a43c8de52c1de495ee92e0bd1c1a824e540abef
	}

}
