pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\Jenkins\\web-app'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning project from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/jishan-08/Jenkins_CICD_WebApp.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Build Step: Checking web application files'
                bat 'dir'
            }
        }

        stage('Test') {
            steps {
                echo 'Test Step: Validating web application'

                bat 'if exist index.html (echo index.html found) else (exit /b 1)'
                bat 'if exist style.css (echo style.css found) else (exit /b 1)'
                bat 'if exist script.js (echo script.js found) else (exit /b 1)'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying web application...'

                bat 'if not exist "%DEPLOY_DIR%" mkdir "%DEPLOY_DIR%"'

                bat 'copy /Y index.html "%DEPLOY_DIR%\\"'
                bat 'copy /Y style.css "%DEPLOY_DIR%\\"'
                bat 'copy /Y script.js "%DEPLOY_DIR%\\"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully!'
        }

        failure {
            echo 'Pipeline failed! Check build logs.'
        }
    }
}