# Node.js Application CI/CD Pipeline With Jenkins

![pipline drawio (1)](https://github.com/Mahmoud-Sh3ban/NodeJS-DevOps-Pipeline/assets/130512698/1e279941-0af6-4ea3-8ce1-93ce142b74dc)


## Description

This project focuses on building and deploying a Node.js application using Jenkins, Docker, and AWS services. The goal is to establish a robust CI/CD pipeline that automates the deployment process and ensures seamless integration and delivery for Node.js applications.

The repository includes a Node.js web application that allows users to vote for their favorite programming language. The application provides real-time vote updates, creating an interactive user experience. The Jenkins pipeline takes care of building a Docker image of the application, pushing it to an Elastic Container Registry (ECR), and deploying it to an Elastic Container Service (ECS) cluster.



## Prerequisites

Before you begin, please ensure that you have the following prerequisites set up:

- Docker: Install Docker on your local machine to build and manage container images.
- AWS Account: Create an AWS account and set up the necessary services:
  - ECR (Elastic Container Registry): Set up a container registry to store your Docker images.
  - ECS (Elastic Container Service): Create an ECS cluster for deploying and running your containers.
- Jenkins Server: Set up a Jenkins server with the following plugins installed:
  - Docker Pipeline: Provides integration with Docker for building and pushing container images.
  - AWS Credentials: Allows Jenkins to access your AWS resources.
  - Slack Notifications: Enables sending notifications to Slack for build and deployment events.


## Configuration

To configure the project for your environment, follow these steps:

1. **Jenkinsfile**: Review the Jenkinsfile and adjust the AWS region, ECR repository URL, and other parameters according to your setup.

2. **aws-credentials**: Rename the `aws-credentials` and replace the placeholder values with your AWS credentials.


## Usage

The Jenkins pipeline automates the entire deployment process. Here's a brief overview of the pipeline stages:

1. **Build**: Builds the Docker image of your Node.js application.

2. **Push**: Pushes the Docker image to your ECR repository.

3. **Deploy**: Deploys the Docker image to your ECS cluster and starts a new task.

To trigger the pipeline, run the associated Jenkins job. The pipeline will execute each stage sequentially, ensuring a seamless deployment of your application.


## Notifications

Slack notifications are integrated into the Jenkins pipeline to provide real-time updates on build, push, and deployment events. To enable Slack notifications, follow these steps:

1. **Configure Slack Integration**: Set up a Slack channel and obtain the necessary credentials for Jenkins integration.

2. **Update Jenkins Configuration**: Add the Slack credentials and specify the channel to receive notifications in your Jenkins global configuration settings.


Once the Slack integration is set up, you will receive notifications in the specified channel for each stage of the pipeline.

Please note that Slack integration is optional and can be customized or disabled based on your preferences.


## Author

- [Mahmoud Shaaban](https://www.linkedin.com/in/mahmoud-shaaban74/)
