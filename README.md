# Bank Of FlatIron 
This is a simple React application that allows users to input transaction data via a form, send the data to a server using a db.json file as a backend, and view the newly added item in a table.

## Installation
To run this application, you will need to have Node.js and npm installed on your machine. You can download them from the official website at https://nodejs.org/.

To get started, clone this repository onto your local machine using the following command:

Copy code
`git clone https://github.com/Marvin-Kabugi/Bank-of-FlatIron`
Next, navigate into the project directory and install the necessary dependencies using the following command:
`cd transaction-tracker-app
npm install`

## Running the Application
To start the application, run the following command:
`npm start`

This will start the development server and open the application in your default browser.

## Using the Application
Once the application is up and running, you can use the form on the homepage to add new transactions. Simply fill out the fields and click the "Add Transaction" button to submit the form.

After submitting the form, the newly added item will be displayed in the table below the form. You can view all of the transactions that have been added by scrolling through the table.

## Server Configuration
This application uses a db.json file as a backend server to store transaction data. The db.json file is located in the src directory and contains an array of objects representing each transaction.

By default, the application is configured to use the following URL to access the server:

http://localhost:3000/transactions


