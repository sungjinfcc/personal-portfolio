import React from "react";
import Project from "./Modules/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div className="projects-div">
      <h1 className="projects-title">Projects</h1>
      <div className="projects">
        <Project
          title={"Odin book"}
          src="assets/odin-book.png"
          tech="Full stack Facebook clone app"
          date="Aug, 2, 2023"
          preview="https://sungjinfcc.github.io/odin-book/"
          github="https://github.com/sungjinfcc/odin-book"
        />
        <Project
          title={"Me Chat"}
          src="assets/me-chat.png"
          tech="User Authentication"
          date="Jul, 29, 2023"
          preview="https://sungjinfcc.github.io/me-chat/"
          github="https://github.com/sungjinfcc/me-chat/tree/main"
        />
        <Project
          title={"Blog-API"}
          src="assets/blog.png"
          tech="REST API"
          date="Jul, 26, 2023"
          preview="https://sungjinfcc.github.io/blog-api/"
          github="https://github.com/sungjinfcc/blog-api"
        />
        <Project
          title={"Inventory"}
          src="assets/inventory.png"
          tech="NodeJS, MongoDB, CRUD and MVC"
          date="Jul, 20, 2023"
          preview="https://inventory-application-production-6f37.up.railway.app/catalog"
          github="https://github.com/sungjinfcc/inventory-application"
        />
        <Project
          title={"Where's Waldo"}
          src="assets/where-s-waldo.png"
          tech="BaaS - Firebase"
          date="Jul, 3, 2023"
          preview="https://sungjinfcc.github.io/find-waldo/#/"
          github="https://github.com/sungjinfcc/find-waldo"
        />
        <Project
          title={"Shopping cart"}
          src="assets/shopping-cart.png"
          tech="Router"
          date="Jul, 2, 2023"
          preview="https://sungjinfcc.github.io/shopping-cart/#/"
          github="https://github.com/sungjinfcc/shopping-cart"
        />
        <Project
          title={"Memory card"}
          src="assets/memory-card.png"
          tech="Lifecycle methods, hooks"
          date="Jun, 28, 2023"
          preview="https://sungjinfcc.github.io/memory-card/"
          github="https://github.com/sungjinfcc/memory-card"
        />
        <Project
          title={"CV generator"}
          src="assets/cv-generator.png"
          tech="React"
          date="Jun, 27, 2023"
          preview="https://sungjinfcc.github.io/cv-project/"
          github="https://github.com/sungjinfcc/cv-project"
        />
        <Project
          title={"Battleship"}
          src="assets/battleship.png"
          tech="Jest, Test driven development"
          date="Jun, 24, 2023"
          preview="https://sungjinfcc.github.io/battleship/"
          github="https://github.com/sungjinfcc/battleship"
        />
        <Project
          title={"Weather app"}
          src="assets/weather-app.png"
          tech="API, JSON, Async and Await, Linting"
          date="Jun, 13, 2023"
          preview="https://sungjinfcc.github.io/weather-app/"
          github="https://github.com/sungjinfcc/weather-app"
        />
        <Project
          title={"Todo List"}
          src="assets/todo-list.png"
          tech="Object oriented programing principles"
          date="Jun, 8, 2023"
          preview="https://sungjinfcc.github.io/todo-list/"
          github="https://github.com/sungjinfcc/todo-list"
        />
        <Project
          title={"Restaurant page"}
          src="assets/restaurant-page.png"
          tech="ES6 Modules, Webpack"
          date="Jun, 3, 2023"
          preview="https://sungjinfcc.github.io/restaurant-page/"
          github="https://github.com/sungjinfcc/restaurant-page"
        />
        <Project
          title={"Tic Tac Toe"}
          src="assets/tic-tac-toe.png"
          tech="Factory functions and Module pattern"
          date="May, 15, 2023"
          preview="https://sungjinfcc.github.io/tic-tac-toe/"
          github="https://github.com/sungjinfcc/tic-tac-toe"
        />
        <Project
          title={"Library"}
          src="assets/library.png"
          tech="Object constructor"
          date="May, 14, 2023"
          preview="https://sungjinfcc.github.io/my-library/"
          github="https://github.com/sungjinfcc/my-library"
        />
        <Project
          title={"Admin dashboard"}
          src="assets/admin-dashboard.png"
          tech="Grid layout"
          date="May, 12, 2023"
          preview="https://sungjinfcc.github.io/admin-dashboard/"
          github="https://github.com/sungjinfcc/admin-dashboard"
        />
        <Project
          title={"Sign-up form"}
          src="assets/sign-up-form.png"
          tech="Form validation"
          date="May, 9, 2023"
          preview="https://sungjinfcc.github.io/sign-up-form/"
          github="https://github.com/sungjinfcc/sign-up-form"
        />
        <Project
          title={"Calculator"}
          src="assets/calculator.png"
          tech="Event handling, Clean code"
          date="May, 3, 2023"
          preview="https://sungjinfcc.github.io/Calculator/"
          github="https://github.com/sungjinfcc/Calculator"
        />
        <Project
          title={"Etch a sketch"}
          src="assets/etch-a-sketch.png"
          tech="DOM Manipulation"
          date="May, 2, 2023"
          preview="https://sungjinfcc.github.io/Etch-a-Sketch/"
          github="https://github.com/sungjinfcc/Etch-a-Sketch"
        />
        <Project
          title={"Rock Paper Scissors"}
          src="assets/rock-paper-scissors.png"
          tech="JavaScript"
          date="May, 1, 2023"
          preview="https://sungjinfcc.github.io/Rock-Paper-Scissors/"
          github="https://github.com/sungjinfcc/Rock-Paper-Scissors"
        />
        <Project
          title={"Landing page"}
          src="assets/landing-page.png"
          tech="CSS, Flexbox"
          date="Apr, 26, 2023"
          preview="https://sungjinfcc.github.io/landing-page/"
          github="https://github.com/sungjinfcc/landing-page"
        />
        <Project
          title={"Odin recipes"}
          src="assets/odin-recipe.png"
          tech="HTML"
          date="Apr, 24, 2023"
          preview="https://sungjinfcc.github.io/odin-recipes/"
          github="https://github.com/sungjinfcc/odin-recipes"
        />
      </div>
      <a
        href="https://github.com/sungjinfcc"
        target="_blank"
        rel="noreferrer"
        className="link-more"
      >
        View more
        <FontAwesomeIcon icon={faGithub} className="github" />
      </a>
    </div>
  );
}

export default Projects;
