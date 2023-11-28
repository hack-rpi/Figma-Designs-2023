import React from 'react';
import './Competition.css'; // 假设你将CSS保存在这个文件

const Competition = () => {
  const joinCompetition = () => {
    alert('Thank you for your interest! We will send more information soon.');
  };

  return (
    <>
      <header className="container">
        <h1>Ugliest Code Competition</h1>
        <p>An "Ugliest Code Competition" is a humorous contest where programmers intentionally create the most convoluted and poorly written code.</p>
        <button onClick={joinCompetition}>Join now</button>
      </header>
      <div className="award container">
        <h2>First Place Award</h2>
        <p>An iPhone 15pro</p>
        <h2>Second Place Award</h2>
        <p>An AirPods Max</p>
        <h2>Third Place Award</h2>
        <p>An Apple Watch Series 9</p>
      </div>
      <footer className="footer">
        <p>Contact us at uglycode@competition.com or call 123-456-7890</p>
      </footer>
    </>
  );
};

export default Competition;
