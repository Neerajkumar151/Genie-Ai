import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import RemoveObject from './pages/RemoveObject'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ai' element={<Layout/>} >
        <Route index element={<Dashboard/>} />
        <Route path='write-article' element={<WriteArticle/>} />
        <Route path='blog-titles' element={<BlogTitles/>} />
        <Route path='generate-images' element={<GenerateImages/>} />
        <Route path='remove-background' element={<RemoveBackground/>} />
        <Route path='review-resume' element={<ReviewResume/>} />
        <Route path='community' element={<Community/>} />
        <Route path='remove-object' element={<RemoveObject/>} />
        

        </Route>
      </Routes>
    </div>
  )
}

export default App
