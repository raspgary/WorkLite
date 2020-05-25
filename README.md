![](static/img/logo.PNG)

A web app that allows law firms to input potential clients' car accident data and recieve an expected case value. Using cloud technology and mathematical models, we are able safely and reliably store client data and maximize users' time and profits by tackling the most valuable cases.

## Inspiration
In the law industry, clients and data are either managaed through paper files or ancient software. This can lead to client data either being lost or stolen for ransom. Furthermore, law firms can't represent all their potential clients, forcing them to decide what cases hold the most value. But how do they decide that? My team and I sought to fix this issue, particularly in the car accident sector.

## How we built it
The web app is built using JavaScript/jQuery, HTML, and CSS. We used a Firebase database for data management. For the backend, we made a Flask API and used the Python NumPy library to make a multivariate regression model for calculating the case values.

## How to run the web app
Clone the repo and open the repo in a command prompt. Make sure you have the proper dependencies. You can download the commonly needed dependencies by running:
`pip install flask numpy pandas`

A username you can use to login is `ez123`. You can input the client data using the intake tab.

