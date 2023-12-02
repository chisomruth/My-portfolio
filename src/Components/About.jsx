/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/portfolio-about.jpg";

const imageAltText = "sunset from abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a data scientist with a background in mathematics and statistics. I am passionate about using data to positively enhance the world we live in.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data visualization",
  "Machine learning",
  "Data analysis",
  "Data science",
  "Data collection",
  "Data wrangling",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a focused and dedicated lady who is passionate about using data to solve real world problems. I am interested in the application of datascience and deeplearning to develop novel and enhanced methods in solving healthcare problems.  My dream is to further my studies in the field of machine learning at Stanford University.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          color: "purple",
          backgroundColor: "mintcream",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            color: "purple",
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ color: "purple", padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
