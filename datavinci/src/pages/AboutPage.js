import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import './AboutPage.css';

function AboutPage() {
  return (
    <Layout>
      <Navbar />
      <div className="aboutpage-container">
        <h2>About DataVinci Frontend Assignment</h2>
        <p>
          This project demonstrates a responsive React layout and a functional nested checkbox component.
        </p>
        <p>
          Technologies used: <strong>ReactJS, CSS Flexbox/Grid, Functional Components, React Router</strong>.
        </p>
      </div>
    </Layout>
  );
}

export default AboutPage;
