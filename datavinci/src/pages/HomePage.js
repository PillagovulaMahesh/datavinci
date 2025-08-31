import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import NestedCheckbox from '../components/NestedCheckbox';
import './HomePage.css';

function HomePage() {
  return (
    <Layout>
      <Navbar />
      <div className="homepage-container">
        <section className="hero-section">
          <h2>Welcome to DataVinci Frontend Assignment</h2>
          <p>Implement responsive layout and nested checkbox component</p>
        </section>

        <section className="checkbox-section">
          <h3>Nested Checkbox Component</h3>
          <NestedCheckbox />
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
