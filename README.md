# HELLO DEAR VISITOR!

![](./images/Under-Construction-Anime.jpg)

## This project is activiely being build and will soon be deployed for users to enjoy and shop. You can still view the project files and implementation details down below.

## Sincere apologies for the inconvenience and Thank You for Visiting

# E-Commerce Amazon Clone with Microservices

## Table of Contents

1. [Introduction](#introduction)
1. [Motivation](#motivation)
1. [Pre-requisite Tools](#pre-requisite-tools)
1. [Implementation](#implementation)
1. [Screenshots](#screenshots)
1. [Technologies Used](#technologies-used)

## Introduction

Creating an Amazon like E-commerce online store where buyers and sellers can register and start sell/buy goods.

This project

## Motivation

I always wanted to know how these giant online websites that sell goods were created. Handling real goods and money is real feat. On the other hand, it always bothered me to hear "scalable", "serverless", "cloud", "production-ready", etc. words and how they are NOT something a single unemployeed person can create.

Thus, to learn the REAL tech and prove others wrong, it was motivation enough for me to create something that included every single thing.

This is a MEGAPROJECT of building a scalable, production grade Amazon like E-commerce website using pure Microservices architecture with Google Kubernetes Engine.

## Implementation instruction

- Created a free google cloud account and a new project named "ticketing.dev".
- Click on the top leftside options slider and go to "Kubernetes Engine" tab. We will be using this in the future to refer our cluster information.
- Click on "create cluster" and "Create" a cluster.
- Install google SDK on our local machine.
- Initialize gcloud in root directory by running command
  `gcloud init`
- Once the setup is done, we have to make sure we will run our kubectl commands to connect to Google Cloud Cluster. To do that, go back to Kubernetes Engine page. Click on Clusters tab.
- You will see your project's cluster running. Click on "connect" button on its side and run that command on your local terminal. This will create a link to our cluster that we can connect from our terminal.
- To change run our kubectl commands inside cluster, right click on your running "Docker Desktop" application logo on your OS. Click on "Kubernetes" drop-down option and select the name with "gke...". That is your cluster. Now your kubectl will directly run commands inside your cluster.
- On your Google project page. Click on the top leftside options slider and click on "Cloud Build". Enable that API.
- To install Load Balancer and Ingress controller on our cluster, go to the "https://kubernetes.github.io/ingress-nginx/deploy" and run the setup command for GCE-GKE in terminal.
- To create a direct URL link from our browser to our Google Cloud's application, click on the top leftside options slider and click on "Load balancer" from "Networkin services" option. You will see our load balancer listed. Open it and copy the IP shown on the page (ignore port).
- Change the "/c/Windows/System32/drivers/etc/hosts" file on Windows or "/etc/hosts" if on Linux/Mac and put the following line in it.
  `copied_ip ticketing.dev`
- We have to create a K8s Secret object that will hold our JWT secret. This service will be used by other pods to decode user's JWT tokens.
  `kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your_key`

## Different types of errors with solutions

- If hot reload/ live update on skaffold with GKE is not working, go to package.json file and modify start script as follows,
  `"scripts": { "start": "ts-node-dev --poll src/index.ts" }`
- If you get error like "default credentials not found" or something with credentials, run following command and login into your project's account
  `gcloud auth application-default login`
- While testing your application, if you are not able to access the api endpoint or getting 404 errors, change the protocol from "ticketing.dev/..." to "https://ticketing.dev/...". Excplicitely mention HTTPS.
- EOF exiting with status code 1 or any disconnects while working with GKE. This cause due to VPN. Do not use VPN while working on this.
- If testing environment shows some tests failing even after you resolved them, stop and restart that test by "Ctrl + C" and "npm test".

## Design decisions and strucutre

- This project follows microservices structure along with individual database per service architecture.
- Created auth (authentication) basic server using express.
- Build Docker and GKE Kubernetes setup and unit tested.
- Created Auth custom errors and middleware in separate folders along with BaseError interface for error response consistency.

## Technologies:

Server side:

- TypeScript
- Express-Router (to organize routes)
- Express-Validator (to validate and sanitize incoming username, email, password)
- Express-Async-Errors (to handle async errors)
- Unit and Integral testing. Jest npm library. Supertest for sending requests.

Cloud and Kubernetes:

- Google Kubernetes Engine (gke)
