// src/Branch.js
import React from 'react';
import './Branch.css';
import { Link } from 'react-router-dom';

function Branch() {
  const branches = [
    { id: 1, image: '/images/branch1.jpg', title: 'Branch Church 1' },
    { id: 2, image: '/images/branch2.jpg', title: 'Branch Church 2' },
    { id: 3, image: '/images/branch3.jpg', title: 'Branch Church 3' },
    { id: 4, image: '/images/branch4.jpg', title: 'Branch Church 4' },
  ];

  return (
    <section className="branch-section">
      <h2>Our Church Branches</h2>
      <div className="branch-grid">
        {branches.map((branch) => (
          <Link key={branch.id} to={`/branch/${branch.id}`} className="branch-card">
            <img src={branch.image} alt={branch.title} />
            <h3>{branch.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Branch;
