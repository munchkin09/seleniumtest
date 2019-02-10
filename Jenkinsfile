pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/seleniumtest_master'''
        sh '''npm install'''
      }
    }
    stage('Test') {
      sh 'echo Testing...'
      sh 'node test.js'
    }
  }
}