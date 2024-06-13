import React from "react";

const animalList = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vREcEc3ie64UW9S6bZElNOj_O96zbifXTA&s",
    name: "Bison",
  },
  {
    image:
      "https://imgs.search.brave.com/hthIb7LsGZzhYM11-MDiomYHbmuzxn7UWWfJCiE95Rs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk4/MTc1OTYwL3Bob3Rv/L2N1dGUtcHVwcHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZiWEpYRkZvelJS/UDNzc3dWNTJoemta/V1gxcXJzMnNIUkY4/SGsxUWMyUDg9",
    name: "Dog",
  },
  {
    image:
      "https://imgs.search.brave.com/jC5q-MZKZKgQM_s-WCkcbz5dG_Q8sgw0v0-TSDnYXOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODg5NDEwNi9waG90/by9jYXQtcG9ydHJh/aXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpSVnZZM3Ey/SEJDSXY2U0tVY1pD/cDJZakVtU2dyM1Y2/cHR5bmlZejg3SXc9",
    name: "Cat",
  },

  {
    image:
      "https://imgs.search.brave.com/oO9OkuRtd8LKkcR3UVYX7E14ZIxWKfnhfOgovBNeugs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTkxOTU2L3Bob3Rv/L2Jyb3duLWhvcnNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tQTI3NzFqaGxw/ams5Wk1mMUczUS1x/RUhzODlEZ05CTTQ4/bXowX3hlNmdJPQ",
    name: "Horse",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vREcEc3ie64UW9S6bZElNOj_O96zbifXTA&s",
    name: "Bison",
  },
  {
    image:
      "https://imgs.search.brave.com/hthIb7LsGZzhYM11-MDiomYHbmuzxn7UWWfJCiE95Rs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk4/MTc1OTYwL3Bob3Rv/L2N1dGUtcHVwcHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZiWEpYRkZvelJS/UDNzc3dWNTJoemta/V1gxcXJzMnNIUkY4/SGsxUWMyUDg9",
    name: "Dog",
  },
  {
    image:
      "https://imgs.search.brave.com/jC5q-MZKZKgQM_s-WCkcbz5dG_Q8sgw0v0-TSDnYXOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODg5NDEwNi9waG90/by9jYXQtcG9ydHJh/aXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpSVnZZM3Ey/SEJDSXY2U0tVY1pD/cDJZakVtU2dyM1Y2/cHR5bmlZejg3SXc9",
    name: "Cat",
  },

  {
    image:
      "https://imgs.search.brave.com/oO9OkuRtd8LKkcR3UVYX7E14ZIxWKfnhfOgovBNeugs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTkxOTU2L3Bob3Rv/L2Jyb3duLWhvcnNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tQTI3NzFqaGxw/ams5Wk1mMUczUS1x/RUhzODlEZ05CTTQ4/bXowX3hlNmdJPQ",
    name: "Horse",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vREcEc3ie64UW9S6bZElNOj_O96zbifXTA&s",
    name: "Bison",
  },
  {
    image:
      "https://imgs.search.brave.com/hthIb7LsGZzhYM11-MDiomYHbmuzxn7UWWfJCiE95Rs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk4/MTc1OTYwL3Bob3Rv/L2N1dGUtcHVwcHku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZiWEpYRkZvelJS/UDNzc3dWNTJoemta/V1gxcXJzMnNIUkY4/SGsxUWMyUDg9",
    name: "Dog",
  },
  {
    image:
      "https://imgs.search.brave.com/jC5q-MZKZKgQM_s-WCkcbz5dG_Q8sgw0v0-TSDnYXOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODg5NDEwNi9waG90/by9jYXQtcG9ydHJh/aXQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpSVnZZM3Ey/SEJDSXY2U0tVY1pD/cDJZakVtU2dyM1Y2/cHR5bmlZejg3SXc9",
    name: "Cat",
  },

  {
    image:
      "https://imgs.search.brave.com/oO9OkuRtd8LKkcR3UVYX7E14ZIxWKfnhfOgovBNeugs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTkxOTU2L3Bob3Rv/L2Jyb3duLWhvcnNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tQTI3NzFqaGxw/ams5Wk1mMUczUS1x/RUhzODlEZ05CTTQ4/bXowX3hlNmdJPQ",
    name: "Horse",
  },
];

const Box = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
      {animalList.map((item, index, array) => {
        return (
          <div
            style={{
              border: "1px solid grey",
            }}
            key={index}
          >
            <img
              style={{
                height: "200px",
                width: "200px",
              }}
              src={item.image}
              alt=""
            />
            <h6 style={{ color: "red" }}>{item.name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
