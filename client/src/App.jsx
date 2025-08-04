import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import WriteArticle from './pages/WriteArticle';
import BlogTitles from './pages/BlogTitles';
import GenerateImages from './pages/GenerateImages';
import RemoveBackground from './pages/RemoveBackground';
import ReviewResume from './pages/ReviewResume';
import Community from './pages/Community';
import RemoveObject from './pages/RemoveObject';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Or correct path
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';


const App = () => {

  const {getToken} = useAuth()
  useEffect(()=>{
    getToken().then((token)=> console.log(token));
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='community' element={<Community />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='about-us' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path="/ai/privacy-policy" element={<PrivacyPolicy />} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;
