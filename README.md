<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="left">

  <!-- <img src="assets/logo.png" alt="logo" width="200" height="auto" /> -->
  <h1>SkyBall</h1>
  
  <p>
   SkyBall allows new volleyball players to meet others, set up games, and enroll in Beach Volleyball Clinics at Toronto's very own woodbine beach, eliminating the need for organizing over text or through FB groups.
  </p>
  
  

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Roadmap](#compass-roadmap)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

  

<!-- About the Project -->
## :star2: About the Project



<!-- Screenshots -->
### :camera: Screenshots

![App Screenshot](https://firebasestorage.googleapis.com/v0/b/skyball-c1e25.appspot.com/o/images%2FPicture1.png?alt=media&token=341bbab0-5af2-4cbd-9448-1dfb8150b27c)
  
![App Screenshot](https://firebasestorage.googleapis.com/v0/b/skyball-c1e25.appspot.com/o/images%2FPicture3.png?alt=media&token=4e49774f-2466-4311-93d3-38dd9dd097fe)
  
 ![App Screenshot](https://firebasestorage.googleapis.com/v0/b/skyball-c1e25.appspot.com/o/images%2FPicture4.png?alt=media&token=809f38fa-6b23-47da-acfd-2006d68a0bc3)


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Sass</a></li>
    <li><a href="https://nextjs.org/">React Icons</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">V4 UUId</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://firebase.google.com/">Firebase Storage</a></li>
    <li><a href="https://firebase.google.com/">Firebase Database</a></li>
    <li><a href="https://firebase.google.com/">Firebase Authentication</a></li>
  </ul>
</details>



<!-- Features -->
### :dart: Features

- Sign Up and Login to see your customizable schedule of meetups and clinics
- Create your own public meetup
- Register and unregister for public meetups and clinics


<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file. The values for these variables can be obtained by creating an account in Firebase. You will also need to create your own database however with the appropriate collections and documents to be able to run the file.

`REACT_APP_FIREBASE_API_KEY`

`REACT_APP_FIREBASE_AUTH_DOMAIN`

`REACT_APP_FIREBASE_PROJECT_ID`

`REACT_APP_FIREBASE_STORAGE_BUCKET`

`REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
  
`REACT_APP_FIREBASE_APP_ID=1:95244008147`
 
`REACT_APP_FIREBASE_MEASUREMENT_ID`
  

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager

```bash
 npm install
```

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/shan1y/skyball-capstone.git
```

Go to the project directory

```bash
  cd skyball-capstone
```

Install dependencies

```bash
  npm install react-router-dom@5.3 sass react-icons uuidv4
```


<!-- Deployment -->
### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  npm start
```


<!-- Roadmap -->
## :compass: Roadmap

* [ ] Track open spots & numebr of registrants to prevent players from registering if there is no space available.
* [ ] Track number of events signed up for on my schedule page
* [ ] Allow "contact organizer" option on meetup cards to get in touch with public event organizers
* [ ] Add "contact me" section to coach cards



<!-- Contact -->
## :handshake: Contact

Shannon Yazdani - [@shaida_eth](https://twitter.com/shaida_eth) - shannonyazdani@gmail.com

Project Link: https://skyball.netlify.app/


<!-- Acknowledgments -->
## :gem: Acknowledgements

Thank you to the creators of these libraries that were used in my project:

 - [React Icons](https://react-icons.github.io/react-icons/)
 - [SweetAlert2](https://sweetalert2.github.io/)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)
