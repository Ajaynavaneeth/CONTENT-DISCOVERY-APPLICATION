package com.example.demo.shop;
import java.sql.*;
import java.util.Scanner;

class Print {
    void test() {
        System.out.println("Welcome to the mart!!!");
    }
}

class PrintStatement extends Print {
    @Override
    void test() {
        System.out.println("Welcome to the shopping mart!!!");
    }

    void shop() {
        System.out.println("Purchase what you want");
    }
}

public class shoppings {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/stores";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Ajay@1234";

    public static void main(String[] args) {
    	PrintStatement d = new PrintStatement();
        d.test();
        d.shop();
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
            System.out.println("Connected to the database.");
            Scanner scanner = new Scanner(System.in);
            System.out.println("1. Login");
            System.out.println("2. Sign Up");

            int choice = scanner.nextInt();
            scanner.nextLine();

            if (choice == 1) {
                int userId = login(scanner, connection);

                if (userId != -1) {
                    boolean continueShopping = true;
                    while (continueShopping) {
                        displayAllProducts(connection);

                        System.out.println("Enter the product ID to add it to the cart (0 to exit): ");
                        int productId = scanner.nextInt();
                        scanner.nextLine(); 

                        if (productId == 0) {
                            continueShopping = false;
                        } else {
                            addProductToCart(connection, userId, productId);
                            System.out.println("Product added to the cart.");
                        }
                    }

                    double totalCartPrice = calculateTotalCartPrice(connection, userId);
                    System.out.println("Total Cart Price: $" + totalCartPrice);

                    if (simulatePayment()) {
                        System.out.println("Payment successful. Order has been placed.");
                    } else {
                        System.out.println("Payment failed. Please try again later.");
                    }

                    scanner.close();
                }
            } else if (choice == 2) {
                signUp(scanner, connection);
            } else {
                System.out.println("Invalid choice. Please try again.");
            }

            connection.close();
            System.out.println("Disconnected from the database.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

   


    
    private static void signUp(Scanner scanner, Connection connection) throws SQLException {
        System.out.println("Please enter your username: ");
        String username = scanner.nextLine();

       
        if (username.trim().isEmpty()) {
            System.out.println("Username cannot be empty. Please try again.");
            return;
        }

        System.out.println("Please enter your password: ");
        String password = scanner.nextLine();


       
        String query = "INSERT INTO users (username, password) VALUES (?, ?)";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, username);
        preparedStatement.setString(2, password);

        int rowsAffected = preparedStatement.executeUpdate();
        preparedStatement.close();

        if (rowsAffected > 0) {
            System.out.println("Sign up successful. Welcome, " + username + "!");
        } else {
            System.out.println("Sign up failed. Please try again later.");
        }
    }


    private static int login(Scanner scanner, Connection connection) throws SQLException {
        System.out.println("Please enter your username: ");
        String username = scanner.nextLine();

        System.out.println("Please enter your password: ");
        String password = scanner.nextLine();

        String query = "SELECT user_id FROM users WHERE username = ? AND password = ?";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setString(1, username);
        preparedStatement.setString(2, password);

        ResultSet resultSet = preparedStatement.executeQuery();
        int userId = -1;
        if (resultSet.next()) {
            userId = resultSet.getInt("user_id");
            System.out.println("Login successful. Welcome, User ID " + userId);
        } else {
            System.out.println("Invalid username or password. Please try again.");
        }
        resultSet.close();
        preparedStatement.close();
        return userId;
    }

    private static void displayAllProducts(Connection connection) throws SQLException {
        String query = "SELECT * FROM products";
        Statement statement = connection.createStatement();
        ResultSet resultSet = statement.executeQuery(query);

        System.out.println("Products:");
        while (resultSet.next()) {
            int productId = resultSet.getInt("product_id");
            String name = resultSet.getString("name");
            String description = resultSet.getString("description");
            double price = resultSet.getDouble("price");

            System.out.println(productId + " | " + name + " | " + description + " | " + price);
        }
        resultSet.close();
        statement.close();
    }

    private static void addProductToCart(Connection connection, int userId, int productId) throws SQLException {
        String query = "INSERT INTO cart (user_id, product_id) VALUES (?, ?)";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, userId);
        preparedStatement.setInt(2, productId);

        preparedStatement.executeUpdate();
        preparedStatement.close();
    }

    private static double calculateTotalCartPrice(Connection connection, int userId) throws SQLException {
        String query = "SELECT SUM(products.price) AS total_cart_price " +
                       "FROM products " +
                       "JOIN cart ON products.product_id = cart.product_id " +
                       "WHERE cart.user_id = ?";
        PreparedStatement preparedStatement = connection.prepareStatement(query);
        preparedStatement.setInt(1, userId);

        ResultSet resultSet = preparedStatement.executeQuery();
        double totalCartPrice = 0;
        if (resultSet.next()) {
            totalCartPrice = resultSet.getDouble("total_cart_price");
        }
        resultSet.close();
        preparedStatement.close();
        return totalCartPrice;
    }

    private static boolean simulatePayment() {
        return true;
    }
	

}


