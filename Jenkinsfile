pipeline {
  agent any
  stages {
    stage('') {
      steps {
        sh '''cd


'''
        git(url: 'https://github.com/munchkin09/seleniumtest', branch: 'master')
        sh '''cd seleniumtest
'''
        sh '''npm install
'''
        sh 'node test.js'
      }
    }
  }
}