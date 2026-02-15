pipeline {
    agent any

    stages {

        stage('Check Files') {
            steps {
                sh 'ls -la'
                script {
                    if (fileExists('index.html')) {
                        echo "index.html exists"
                    } else {
                        error "index.html NOT found"
                    }
                }
            }
        }

        stage('Deploy Website') {
            steps {
                sh '''
                sudo cp -r * /var/www/html/
                '''
            }
        }
    }
}

