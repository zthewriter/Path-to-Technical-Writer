## REST API Architecture

## Overview 

This guide provides a high-level description of a REST API architecture. The description explains how the architecture works, as well as the elements, properties, and relationships that it contains. 

A REST API is type of web API that includes the following main components: 

- [Client](#anch)  
- [REST API](#b) 
- [Database](#c) 

This structure facilitates the data flow from the database to the client and back. In the next section you can find detailed information about how these elements interact. 


## Diagram

The following diagram illustrates the high-level architecture of a REST API:

![arch2](Rest-APIarchitecture%20.png)

**Figure 1. High-Level Diagram of REST API Architecture** 

###### source: [available here](https://www.seobility.net/en/wiki/REST_API) 

The REST API architecture is composed of the following elements, properties, and relationships: 

<a name="anch"></a> 
## Client
  - **Properties:** Sends a ```GET```, ```POST```, ```PUT``` or ```DELETE``` request.  
  - **Relationships:** The Client has a bi-directional relationship with the REST API. They send requests to the REST API and receive responses in JSON and/or XML.    

<a name="b"></a> 
## REST API 
  - **Properties:** It handles ```GET```, ```POST```, ```PUT```, or ```DELETE``` requests, and pulls such requests from the Database.
  - **Relationships:** It has bi-directional relatinships with both the Client and the Database. The REST API receives a request from the Client and forwards it to the Database. The Database composes a response to the request and forwards it back to the REST API. The REST API sends the Database's response to Client in the format(s) of JSON and/or XML.  
  - 
<a name="c"></a> 
## Database 

  - **Properties:** It handles requests from the REST API. 
  - **Relationships:** It has a bi-directional relationship with the REST API. The Database receives requests, and sends responses to those requests back to the REST API.    