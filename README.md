#AngularJS Testing with Protractor
==========

> Loading...

##Summary
---------------------------------------------------

1. Intro
2. A little bit on Testing concepts...
3. What's the concept behind end-to-end testing?
4. Automating your Tests
5. Why Protractor?
6. Protractor conceptual map
7. How to install Protractor?
8. Setup your first config.js
9. Writing E2E tests
10. Protractor global variables
11. Mapping element selectors12 How to simulate events
12. How to validate data tests with NodeJS' mySQL module
13. Debugging with elementexplorer.js
14. Planning scalable tests
15. Turbocharge your config.js
16. References

##Team (In alphabetic Order)
---------------------------------------------------

- [Ciro Nunes](https://github.com/cironunes)
- [Rafael Battesti](https://github.com/rafaelbattesti)
- [Ramon Victor](https://github.com/ramonvictor)


##1. Intro

Hello everyone and welcome to Protractor Brasil. This is a live community to be used as a learning and experience exchange space. We are glad to welcome all the developers, testers and enthusiasts who would like to take a deep dive into the world of Testing and specially AngularJS applications using Protractor.

Hope it is going to be of the best use for all!

##2. A little bit on Testing concepts...

So, why should systems be tested and how should it be done? One might say "Don't be stupid, they must be tested for bugs!", but would it be all a testing strategy is for?

Fortunately not. But I will be brief on testing to go straight to protractor. A good test plan not only empowers the team to ***find bugs*** within the system, but also ***prevents them from happening***

Testing a software product is all about ***gaining confidence*** on its fitness for purpose and requirements, and thus reducing the risks involving the main project's stakeholders like the Product Owner (PO), their customers, sponsors and obviously, the product developers!

By adopting a good testing strategy, a company is highly probable to:

- Avoid big money losses;
- Avoid Law suits;
- Prevent safety issues;
- Gather valuable information and measure software response;
- Gain customer confidence for always presenting a flawless system;
- Improve time to market.

Some test types, according to the University of Sydney, are:

- ***acceptance testing*** – User Acceptance Testing (UAT) is a process to obtain confirmation by the system's business expert, preferably the owner or client of the system/story under test, through trial or review, that a system meets mutually agreed-upon requirements. They are first written by the testing team when a new feature to be implemented is received from Product Owner (PO). In Agile testing, this workflow empowers developers to work on a new feature having in mind all business related requirements clearly specified by Test Cases.

- ***end-to-end testing*** – the process of testing business processes as they pass right through the computer systems. To ensure that all aspects of the business are supported by the systems under test. From beginning till the end of the process. For instance, if you are testing an email system you might:
	- Log in into the application;
	- Open your mailbox;
	- Access your inbox;
	- Compose, forward, reply and reply all to emails with and without attachments (doc, video, photo);
	- Close message and check drafts;
	- Check sent items;
	- Close your mailbox;
	- Logout.

- ***regression testing*** – to provide a general assurance that no additional errors were introduced in the process of fixing other problems. Regression testing is commonly used to test the system efficiently by systematically selecting the appropriate minimum suite of tests needed to adequately cover the affected change.

- ***system testing*** – an investigatory testing phase, where the focus is to have almost a destructive attitude and tests not only the design, but also the behaviour and even the believed expectations of the customer. It is also intended to test up to and beyond the bounds defined in the software/hardware requirements specification(s).

- ***unit testing*** – a method by which individual units of source code /configuration are tested to determine if they are fit for use. This is usually performed within the build phase.

There is still a lot more on testing, but let's not loose the track and focus on Protractor.

##12. How to validate DataBase tests using NodeJS' mysql module

First of all, we have to acknoledge the great work brought to life by the npm mysql team.

Then moving to ...




