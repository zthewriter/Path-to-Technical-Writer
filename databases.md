## Introduction to Databases

This introducion to databases is intended to investigate and better understand the following:
1. What are databases?
2. What are their components and how do they operate?
3. Why use databases? 

### Purposes of Databases

###### Databases have three purposes: 
1. To store data.
2. To provide an organized strcuture. 
3. To act as a mechanism to interact with data.

### C.R.U.D. 

The acroynm C.R.U.D. stands for Create, Read, Update, and Delete. These are the four ways in which databases interact with data.

### Problems with Old School Spreadsheets 

Old School spreadsheets do not provide an efficient means of organzing, adding, and extracting data. They often cause the below issues: 

1. Redundancy 
2. Multiple Themes
3. Data Anomalies 
   1. Relational Anomaly
   2. Update Anomaly
   3. Insertion Anomaly 

### Relational Databases

Relational Databases are designed to address the information complexities that organically occur in business. 

A few examples are:
1. Solve data issues.
2. Model relationships efficiently. 
3. Design columns that represent different attributes.
4. Design rows that represent different instances of a business concept (entity).

### Join Operation 

A join operation JOINS information from one table with another. The join operation utilizes matched pairs of values to accomplish this. 

### Four Components of a Database System 

The four components of a database system are:
1. Users
2. Database Applications
3. Database Management System (DBMS)
4. Database

The order of these componets DOES matter. The user connects to the database application, which connects to the DBMS, which in turn connects to the database. When the data is found in the database, the database returns the information to the DBMS, which returns it to the database application, which finally returns a reponse to the user. 

### Metadata

Metadata are data describing the strcuture of the data in the database. 

### Database Management System (DBMS) 

The DBMS controls the database. It creates, processes, and administers database activities. The database cannot be accessed with the DBMS. 
