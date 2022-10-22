const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const version = 'xxxx';

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