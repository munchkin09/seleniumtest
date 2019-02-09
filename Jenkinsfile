pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sh '''cd


/var/lib/jenkins/workspace/seleniumtest_master'''
        sh '''npm install
'''
        sh 'node test.js'
      }
    }
  }
}