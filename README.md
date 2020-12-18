ticketing

-   Change the "/c/Windows/System32/drivers/etc/hosts" file on Windows or "/etc/hosts" if on Linux/Mac and put the following command
    `127.0.0.1 ticketing.dev`

## Implementation instruction

-   Created a free google cloud account and a new project named "ticketing.dev".
-   From the left side slider options, go to "Kubernetes Engine" tab. We will be using this in the future to refer our cluster information.
-   Click on "create cluster" and "Create" a cluster.
-   Install google SDK on our local machine.
-   Initialize gcloud in root directory by running command
    `gcloud init`
-   Once the setup is done, we have to make sure we will run our kubectl commands to connect to Google Cloud Cluster. To do that, go back to Kubernetes Engine page. Click on Clusters tab.
-   You will see your project's cluster running. Click on "connect" button on its side and run that command on your local terminal. This will change your "Docker Desktop" cluster to our project's cluster we created in Cloud.
