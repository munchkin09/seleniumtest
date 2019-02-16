pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''ls'''
        sh '''npm install'''
      }
    },
    stage('Test') {
      sh 'echo Testing...'
      sh 'node test.js'
    }
  }
}