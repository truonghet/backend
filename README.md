# backend-1

[![CI/CD Pipeline](https://github.com/truonghet/backend/actions/workflows/deploy.yml/badge.svg)](https://github.com/truonghet/backend/actions/workflows/deploy.yml)

# Launch new EC2 instance

```sh
sudo yum update
```

```sh
sudo yum upgrade
```

```sh
sudo yum install -y git htop wget
```

# Install Nodejs
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
# Setup env to install nvm
```sh
export NVM_DIR="$HOME/.nvm"
```

```sh
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

```sh
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
# Install latest  Node
```sh
nvm install --lts
```


# Install PM2
```sh
npm install pm2 -g
```

# Set node, npm and pm2 for root user
```sh
sudo ln -s "$(which node)" /sbin/node
```
```sh
sudo ln -s "$(which npm)" /sbin/npm
```
```sh
sudo ln -s "$(which pm2)" /sbin/pm2
```

#  Install aws code deploy agent
```sh
sudo yum install -y ruby
```

```sh
wget https://aws-codedeploy-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/latest/install
```

```sh
chmod +x ./install
```

```sh
sudo ./install auto
```

```sh
sudo service codedeploy-agent start
```

```sh
sudo service codedeploy-agent status #check codedeploy status
```










# build nodejs application
```sh
npm init -y 
npm express
```

# Paste web content
```sh
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const version = 'v0.7';

app.get('/', (req, res) => {
    res.send(`<html>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="background-color:#232f3e">
                        <h1 style="color:#EC7211 !important;text-align: center;margin-top: 0;"> [Version ${version}]: CI/CD - Codedeploy - GithubAction-HetTV</h1>
                        <div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%)">
                            <img src="https://picsum.photos/1500/600?random=1">
                        </div>
                    </body>
                   </html>`);

    console.log(`[Version ${version}]: New request => http://${hostname}:${port}` + req.url);

})

app.listen(port, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
})
```

# Git init
```sh
git init
```
# Create .gitignore and add node_modules
```sh
git add .
```

```sh
git commit -m "xxxx"
```


```sh
git branch -M main
```

```sh
git remote add origin gitlinkrepo-xxx
```


```sh
git push origin main
```

# Create appspec.yml
```sh
version: 0.0
os: linux
files:
  - source: /
    destination: /home/ec2-user/backend
hooks:
# ApplicationStop:
# DownloadBundle:
#  BeforeInstall:
#    - location: scripts/before_install.sh
#      timeout: 300
#      runas: root
# Install:
  AfterInstall:
    - location: scripts/after_install.sh
      timeout: 300
      runas: root
  ApplicationStart:
    - location: scripts/application_start.sh
      timeout: 300
      runas: root
# ValidateService:
```


