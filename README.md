# Custom Task Management App

This project was built to solve the problem of a small business so there workers could be given a task list
that is accessible of line. it has basic note taking and a login that is used for time stamping hours. 

## Dependencies 

This project requires the following software to run

* VS code
* Node.js
* Nodemon
* react
* Firebase/Firestore 

### Frontend Install

1. Download and install VS code
2. If node.js is not installed then install it from  https://nodejs.org/en/download/  and chose your platform support
3. Clone the Github repo
4. Npm install to get all dependencies 
5. Cd into Capstone/planer
6. Run the following commands
 * Npm build start
 * npm install -g serve
 * serve -s build


7. Once the app is built it will give you a ip address both the local host and one to access over the network 

### Backend Install

1. Create a firebase account either a free tier or paid here https://firebase.google.com/?gclid=EAIaIQobChMIlauumvP_-wIVEFRgCh1r3QltEAAYASAAEgKDzfD_BwE&gclsrc=aw.ds 
2. Once you have your account  create your project and set it as a web app
Copy your unique identifier in to the firebase.js
3. Click on authentication and create your login styles and add your private keys to your config

### Project Use

Once the project is installed you will be able to locally store tasks and noted for offline use. you can create users in firestore and have them log in/out.

### Credits

Jason Lee - Trainer IOD
Jo Batkin - Trainer IOD
The whole IOD cohort 
Web Dev Simplified - https://www.youtube.com/@WebDevSimplified - General help
Codevolution - https://www.youtube.com/@Codevolution - Material Ui guides

### License  

MIT License

Copyright (c) [2022] [Martin de Lange]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.