pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/narvdeshwar-1997/portfolio.git'
            }
        }

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
