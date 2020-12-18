ticketing

## Implementation instruction

-   Created a free google cloud account and a new project named "ticketing.dev".
-   Click on the top leftside options slider and go to "Kubernetes Engine" tab. We will be using this in the future to refer our cluster information.
-   Click on "create cluster" and "Create" a cluster.
-   Install google SDK on our local machine.
-   Initialize gcloud in root directory by running command
    `gcloud init`
-   Once the setup is done, we have to make sure we will run our kubectl commands to connect to Google Cloud Cluster. To do that, go back to Kubernetes Engine page. Click on Clusters tab.
-   You will see your project's cluster running. Click on "connect" button on its side and run that command on your local terminal. This will create a link to our cluster that we can connect from our terminal.
-   To change run our kubectl commands inside cluster, right click on your running "Docker Desktop" application logo on your OS. Click on "Kubernetes" drop-down option and select the name with "gke...". That is your cluster. Now your kubectl will directly run commands inside your cluster.
-   On your Google project page. Click on the top leftside options slider and click on "Cloud Build". Enable that API.
-   To install Load Balancer and Ingress controller on our cluster, go to the "https://kubernetes.github.io/ingress-nginx/deploy" and run the setup command for GCE-GKE in terminal.
-   To create a direct URL link from our browser to our Google Cloud's application, click on the top leftside options slider and click on "Load balancer" from "Networkin services" option. You will see our load balancer listed. Open it and copy the IP shown on the page (ignore port).
-   Change the "/c/Windows/System32/drivers/etc/hosts" file on Windows or "/etc/hosts" if on Linux/Mac and put the following line in it.
    `copied_ip ticketing.dev`

## Technologies:

-   Google Kubernetes Engine (gke)
