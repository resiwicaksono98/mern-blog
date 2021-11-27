import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateBlog, Login, MainApp, Register } from '../../pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainApp />} >
                    <Route path="create-blog/:id?" element={<CreateBlog />} />
                    <Route path="detail-blog/:id" element={<CreateBlog />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router
