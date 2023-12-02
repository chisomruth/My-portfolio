/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/AI.jpeg";

const imageAltText = "AI Image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Machine learning project🎉",
    description: "Explore and access all my machine learning projects here.",
    url: "https://github.com/chisomruth/All_Machine-Learning_projects",
  },
  {
    title: "My Data Visualization projects",
    description: "Take a deep dive into my data visualization projects.",
    url: "https://github.com/chisomruth/All_Data-visualization-projects",
  },
  {
    title: "My CV/Resume",
    description: "Download my CV/Resume here.",
    url: "file:///C:/Users/chiso/OneDrive/Documents/Chisom%20Chibuike%20Resume.pdf",
  },
  {
    title: "My Data science projects",
    description: "Explore some of my most impactful and promising data science project.",
    url: "https://github.com/chisomruth/All_Data-science_projects",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
