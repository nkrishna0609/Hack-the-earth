# SafeSpaceShop

*- Niranjan Krishnaswamy, Krishdev Sutar, Rachel Ruoxuan Wu*

**An automated system which controls the flow of customers in a store and helps manage lengthy lineups which arise due to COVID-19 social distancing principles.**

Devpost: *[https://devpost.com/software/ruhacks2020-project](https://devpost.com/software/ruhacks2020-project)*
YouTube Online Demo: *[https://www.youtube.com/watch?v=0B0BDfz--Zw&feature=emb_title](https://www.youtube.com/watch?v=0B0BDfz--Zw&feature=emb_title)*

## Inspiration ##
As we are currently in the midst of a pandemic, we have all noticed that there are extremely lengthy line-ups in front 
of grocery stores, often taking 20-30 minutes to traverse, due to social distancing principles.  Moreover, we were 
intrigued by the fact the many stores were hit suddenly with the reality of our situation, thus forcing them to  adapt 
extremely quickly. However, stores were not prepared for the amount of work required to manage customer flow within their 
stores. This job has to be done manually as stores do have any prior technology to resolve this issue due to how rapidly 
COVID-19 surfaced. This inefficiency led to the increase in line-ups at storefronts which basically counteracts the purpose 
of the social distancing. We also realized that retail workers were assigned to control these substantial lineups in front 
of the store, putting their lives in danger as they were exposed to the deadly virus as they come into close proximity with 
people who enter the store. We decided to create an automated service which would assist in the process of monitoring lineups 
in front of stores while controlling the flow of customers as they enter and exit. With the help of SafeSpaceShop, it can 
improve the store's efforts to maintain social distancing thus saving lots of lives during the current pandemic crisis.

## What it does ##
SafeSpaceShop is an automated service designed to help store owners track the customer ratio within their store. We have 
cameras situated at the entrances of the store, which utilize computer vision to monitor and recognize when individuals 
enter and exit the store. The number of people who enter, exit, and who are currently in the store are updated to a database. 
There is a display situated outside of the store through the use of a React web app which exhibits the number of people who 
have entered, exited and who are in the store at all times, so customers can be updated of this knowledge. When the number 
of individuals in the store exceeds the store's limit, the entrance door will be forced shut, so that no one would be able 
to enter. When an ample number of people exit the store, the door will open again, allowing for people to enter.

## How we built it ##
The web app (display) was created using React, and the computer vision portion of the service was created using OpenCV and 
Python. We also utilized a MongoDB database to store the values of the number of customers entering, exiting and in the 
store in real-time. MongoDB Stitch was used to create the HTTP endpoints (POST method) which were utilized to update the 
database data as people entered and exited via the OpenCV portion of the service, and was also used to create the endpoints 
(GET method) which was used to display the database values to the web app. Finally, we used an Arduino Servo motor to shut the 
door closed when the limit of the number of people was met or exceeded. The OpenCV portion of the product would be the one 
communicating with the Servo motor. Once the number decreases below the limit, the Servo motor would open the door once again.

## Challenges we ran into ##
Due to the hackathon being forced to be online, it was hard to communicate with other team members as it was more restricting 
than when members are able to communicate face-to-face. Another major challenge that we faced was strategically dividing tasks 
amongst the team members in accordance with each individuals' expertise. With time, we were able to assess each others' skills 
and divide work accordingly to achieve our goal.

## Accomplishments that we're proud of ##
Despite the circumstances caused by the current pandemic, we were able to work cooperatively and finish the project on time. 
Moreover, each of us made sure to work with a tool/technology which we had never used before, so that the learning experience 
was maximized. Furthermore, we are very proud that we managed to efficiently work together, even though we were miles away from 
each other.

## What we learned ##
We were able to grasp a better understanding of React, MongoDB, OpenCV, and Arduino while working on this project. This project 
was indeed challenging, however, this forced us to grasp a better understanding of how all these components communicate with each 
other. Finally, we learned that regardless of the hurdles, we are able to accomplish anything if we put our minds to it.

## What's next for RUHacks2020 project ##
SafeSpaceShop can be continued to be deployed in all stores all across the world. We can add more features to help maintain social 
distancing by using cameras to check if customers within the store are maintaining a distance of 6 feet between each other. Post 
COVID-19, SafeSpaceShop can be continued to be used as a way of reducing overcrowding in stores.
