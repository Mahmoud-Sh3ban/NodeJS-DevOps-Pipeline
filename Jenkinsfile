pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        // Build Docker image
        sh 'docker build -t node-app .'
      }
    }

    stage('Push to ECR') {
      steps {
        script {
          withAWS(region: 'us-east-1', credentials: 'aws-credentials') {
            // Get ECR login credentials
            sh "aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/r2w3u4t4"
            
            // Tag and push the Docker image to ECR
            sh "docker tag node-app:latest public.ecr.aws/r2w3u4t4/node-app:latest"
            sh "docker push public.ecr.aws/r2w3u4t4/node-app:latest"
          }
        }
      }
    }
    
    stage('Deploy to ECS') {
      steps {
        script {
          withAWS(region: 'us-east-1', credentials: 'aws-credentials') {
            // Run the task using the existing task definition and cluster
            sh 'aws ecs run-task --cluster NodeJS --task-definition nodejs-task --region us-east-1'
          }
        }
      }
    }
  }

  post {
    success {
      script {
        // Slack notification for successful build, push, and deployment
        slackSend(channel: '#node_app', message: ':heavy_check_mark: Docker image build, push, and ECS deployment successful!')
      }
    }
    failure {
      script {
        // Slack notification for failed build, push, or deployment
        slackSend(channel: '#node_app', message: ':x: Docker image build, push, or ECS deployment failed!')
      }
    }
  }
}
