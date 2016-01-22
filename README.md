# service-worker
Serice workers is a new concept in Javascript. It is helpful in running a background task and to show background notification.


Created a sample to demonstrate the service worker 

Note :  Service workers work only on HTTPS and localhosts, refer 

https://kumaraswins.github.io/service-worker/ for live example. To check first load the website with the internet connect and reload the website by disconnecting your internet, you could see the base page.

 What are service worker : 
 Service workers lifecycle is completely separate from the web page
 
 To install the service worker we need to register it which is done in the JS page, this will be in the background and toatlly isolated from the otherJS operations
 
 During the install step if we want ot cache any static data we can do it there and SW become installed. In case of any error in the installation process the service workers will not get installed in the web page, but it will not affect the other operations since it is a isolated process. Next time it will try if it fails for the first time
 
 How to update service worker http://www.html5rocks.com/en/tutorials/service-worker/introduction/#toc-how
 
 After activation the service worker will controll all the pages which falls under its scope
 
 Once the service woker is activated, it will be in either of 2 states
 
 i) Either it will be terminated to save memory
 ii) It will handle the fetch and displays the message
 
 Before implementing the SW in your application if we are planning to support for the older browser we need to import Polyfills.js in the sw.js to ensure that this functionality works here
 
 To make use of the service workers we need to do in a localhost or https domain since we can  hijack connections, fabricate, and filter responses. To avoid this we cant use in http protocol
 
 The service wokrer will not work on the fist load, it will load/ install on the fist load and will execute on the second time loading
 
 Programatic control over
 Caches
 Requests
 Responses
 The service workers gets upgraded on the background like google chrome browser
 
 Push Notifications in the web app can be done using service workers
 
 Background sync is a new web API that lets you defer actions until the user has stable connectivity. This is useful for ensuring that whatever the user wants to send, is actually sent.
 
 In case of poor connectivity we can cache the request and can establish the connection once we get the stable connection
 
 Chat application in the mobile web URL https://youtu.be/l4e_LFozK2k
 
 
 Some URL reg serivce worker and bg sync
 
 https://docs.google.com/document/d/1WNPIS_2F0eyDm5SS2E6LZ_75tk6XtBSnR1xNjWJ_DPE/edit?pref=2&pli=1
 https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web
 https://developers.google.com/web/updates/2015/12/background-sync?hl=en
