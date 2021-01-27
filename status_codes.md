## HTTP Status Codes

_sources_: 
1. [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status )
2. [HTTP Status Code Definitions](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#:~:text=An%20informational%20response%20indicates%20that,terminated%20by%20an%20empty%20line.)

### 5 types of status codes

1. Informational responses (100-199)
2. Successful responses (200-299)
3. Redirects (300-399)
4. Client errors (400-499)
5. Server errors (500-599)

```
NOTE: Unofficial codes exist too and are available for reference via source link.
```

### Informational responses (100-199)

An **informational response** status codes demonstrate that a request was received and understood. It informs the user to wait for a final response while processing continues.   

#### For example: 
Status code **100 Continue** signifies the user should continue with the request, or ignore the response if the request is completed.

### Successful responses (200-299)

A **successful response** demonstrates the request sent by the user was recevied, understood, and accepted. 

#### For example: 

Status code **200 OK** signifies the request has succeeded. 

```
NOTE: The meaning of success depends on the HTTP method.

GET: The resource has been fetched and is transmitted in the message body. 
HEAD: The entity headers are in the message body.
PUT or POST: The resource describing the result of the action is transmitted in the message body
TRACE: The message body contains the request message as received by the server. 
```
Status code **201 Created** signifies the request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT reequests. 

Status code **202 Accepted** signifies the request has been received, but not yet acted upon.

Status code **203 Non-Authoratative Information** signifies the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.  

Status code **204 No contenet** signifies there is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.

### Redirects (300-399) 

A **redirect** occurs when the user is guided to another page. 

#### For example: 

A user may be guided to another web page after clicking on an advertisement. 

Status code **301 Moved permanently** signifies that when a url is changed, the user will automatically be directed to the new url. 

### Client errors (400-499)

**Client errors** occur when the user has caused an error. 

#### For example: 

Status code **400 bad request** siginifes incomplete information on behalf of the user. 

Status code **401 Unauthorized** signifies an invald password, email, or username on behalf of the user. It can also signify the verified user does not have access to the features the user is attempting to access.  

Status code **404 Not Found** sigifies the user made a request the server does not have. 

Status code **418 I'm a teapot** signifies the server does not have the capability to brew tea. 

### Server error responses (500-599)

**Server error responses** occur when the server fails to fulfill a request. 

#### For example: 

Status code **500 Internal Server Error** signifies something unexpected occurred.

Status code **501 Not Implemented** signifies the server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability. 

Status code **503 Service Unavailable** signifies the server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state