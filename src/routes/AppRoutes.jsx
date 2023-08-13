import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Movies } from '../pages/Movies'
import { SingleMovie } from '../pages/SingleMovie'
import { Star } from '../pages/Star'
import { Watchlist } from '../pages/Watchlist'

export const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Movies/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/star" element={<Star/>} />
        <Route path="/singlemovie/:movieId" element={<SingleMovie/>} />
    </Routes>
    </>
  )
}
