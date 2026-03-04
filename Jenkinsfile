pipeline {
    agent any

    environment {
        ENVIRON = "test"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://your-repo-url.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}