import React from 'react';
import './Normalize.css';
import './App.css';
import Header from './components/header/Header';
import CardsList from './components/services/CardsList';
import BlogList from './components/blogs/BlogList';
import TestimonialsDevelopment from './components/testimonials/TestimonialsDevelopment';
import Footer from './components/footer/Footer';

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
