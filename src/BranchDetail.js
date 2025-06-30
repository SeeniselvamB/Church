// src/BranchDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './BranchDetail.css';

const branchData = {
  1: {
    image: '/images/branch1.jpg',
    title: 'Kalkurichi Church',
    about: 'This is the description for Branch Church 1.',
  },
  2: {
    image: '/images/branch2.jpg',
    title: 'Thoppur',
    about: 'This is the description for Branch Church 2.',
  },
  3: {
    image: '/images/branch3.jpg',
    title: 'Pudhupatti',
    about: 'This is the description for Branch Church 3.',
  },
  4: {
    image: '/images/branch4.jpg',
    title: 'Thonugal',
    about: 'This is the description for Branch Church 4.',
  },
};

function BranchDetail() {
  const { id } = useParams();
  const branch = branchData[id];

  if (!branch) return <p>Branch not found.</p>;

  return (
    <div className="branch-detail">
      <h2>{branch.title}</h2>
      <img src={branch.image} alt={branch.title} />
      <p>{branch.about}</p>
    </div>
  );
}

export default BranchDetail;
