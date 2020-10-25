pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Test') {
            parallel {
                stage('Lint Check') {
                    steps {
                        sh 'npm run-script lint'
                    }
                }
                stage('Unit Test') {
                    steps {
                        sh 'npm run-script test'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build-prod'
            }
        }
        stage('Deploy') {
            steps {
                sh 'firebase deploy'
            }
        }
    }
}