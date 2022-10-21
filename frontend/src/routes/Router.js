import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import About from '../pages/About/About'
import Home from '../pages/Home/Home'
import UserMenu from '../pages/UserMenu/UserMenu'
import User from '../pages/User/User'
import { ROUTES } from './RouterConfig'

const Router = () => {
  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Navbar />
        <Element />
      </>
    )
  }
  const RouteWithoutNavbar = ({ Element }) => {
    return (
      <>
        <Element />
      </>
    )
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path={ROUTES.Home}
          element={<RouteWithRole Element={Home} />}
        ></Route>
        <Route
          exact
          path={ROUTES.About}
          element={<RouteWithRole Element={About} />}
        ></Route>
        <Route
          exact
          path={ROUTES.User}
          element={<RouteWithoutNavbar Element={User} />}
        ></Route>
        <Route
          exact
          path={ROUTES.UserMenu}
          element={<RouteWithoutNavbar Element={UserMenu} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default Router
