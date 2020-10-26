pipeline {
    agent {
        docker {
            image 'thevishsharma/node-chrome:10.22.1-alpine'
            args '-p 4200:4200'
        }
    }
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