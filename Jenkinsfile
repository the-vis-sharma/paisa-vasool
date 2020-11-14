pipeline {
    agent {
        docker {
            image 'node:10.22.1-alpine'
            args '-p 4200:4200'
        }
    }
    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_TOKEN')
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Lint Check') {
            steps {
                sh 'npm run-script lint'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build-prod'
            }
        }
        stage('Deploy') {
            steps {
                sh './node_modules/.bin/firebase deploy --token "$FIREBASE_TOKEN"'
            }
        }
    }
}
