import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import { CreateBlog, DetailBlog, Home } from '..'
import { Footer, Header } from '../../components'
import './mainApp.scss'


const MainApp = () => {
    return (
        <div className="main-app-wrapper">
                <Header />
            <div className="content-wrapper">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/create-blog/" element={<CreateBlog />} />
                    <Route path="/create-blog/:id" element={<CreateBlog />} />
                    <Route path="/detail-blog/:id" element={<DetailBlog />} />
                </Routes>
            </div>
                <Footer />
        </div>
    )
}

export default MainApp
