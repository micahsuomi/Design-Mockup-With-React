import React from 'react';
import './Normalize.css';
import './App.css';
import Header from './Header';
import CardsList from './CardsList';
import BlogList from './BlogList';
import TestimonialsDevelopment from './TestimonialsDevelopment';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      <CardsList />
      <BlogList />
      <TestimonialsDevelopment />
      </div>
      <Footer />
    </div>
  );
}

export default App;
