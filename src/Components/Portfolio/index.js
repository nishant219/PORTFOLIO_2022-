import SidebarInPortfolio from "./sidebarInPortfolio";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDashcube } from "@fortawesome/free-brands-svg-icons";
//import { ReactRouter as Router, Switch, Route, Link } from "react-router-dom";
//import WordCloud from './wordcloud';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  // console.log(portfolioData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <SidebarInPortfolio />

      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
      </div>


      <h2 className="codingProfilesTitle">
        I believe my academic record provides an excellent reflection of my
        professional capabilities.
        <br />
      </h2>

      <h2 className="codingProfiles">
        Coding Profiles :
        <br />
        LeetCode : Solved 90+ Questions + 2* (Problem Solving).
        <li>
          <a
            href="https://leetcode.com/Nishant_219/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDashcube} color="#4d4d4e" />
          </a>
        </li>
        <br />
        GFG : Solved 250+ Questions.
        <li>
          <a
            href="https://auth.geeksforgeeks.org/user/nishant219/practice/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDashcube} color="#4d4d4e" />
          </a>
        </li>
        <br />
        HackerRank : 4* (Java) and 2* (Problem Solving)
        <li>
          <a
            href="https://www.hackerrank.com/nishantap_a21?hr_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDashcube} color="#4d4d4e" />
          </a>
        </li>
        <br />
      </h2>

      <h2>
        <br />
        Check out all of the projects on GitHub profile ( Nishant219 )
        <br />
        Some of my recent work:
        <br />
        1] Voting Dapp with ether.js (Ether.js, Metamask, HTML) -- Link_
        <li>
          <a
            href="https://github.com/nishant219/Ballot_Dapp_Ether.js"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <br />
        2] Breaking-Bad Characters Info ( React ) -- Link_
        <li>
          <a
            href="https://breaking-bad-api-nishant.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <br />
        3] Tic_Tac_Toe ( React ) -- Link_
        <li>
          <a
            href="https://tictactoeinreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <br />
        4] Smart Contracts ( Solidity, Remix IDE ) -- Link_
        <li>
          <a
            href="https://github.com/nishant219/smart_contracts"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <br />
      </h2>

      {/* <div className="tagcloud-wrap">
        <WordCloud/>
        </div> */}

      <Loader type="pacman" />
    </>
  );
};
export default Portfolio;
