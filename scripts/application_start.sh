
    #!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/backend/deploy.log

echo 'pm2 restart mydemo' >> /home/ec2-user/backend/deploy.log
pm2 restart mydemo >> /home/ec2-user/backend/deploy.log