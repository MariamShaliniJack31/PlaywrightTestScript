pipeline {
    
    //agent any
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.42.0-jammy'
            args '-u root'
        }
    }
    environment {
        ENVIRON = "test"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MariamShaliniJack31/PlaywrightTestScript.git'
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