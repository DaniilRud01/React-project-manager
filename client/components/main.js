import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, Route } from 'react-router-dom'
import './style.scss'
import Project from './project-list'

const Main = () => {
  return (
    <div className="container">
      <Menu>
        <Link className="button">Задачи и работы</Link>
        <Link to="/project" className="button-project">
          <Link to="/project">Проекты</Link>
        </Link>
        <Link className="button">Календарь</Link>
        <Link className="button">Возможности</Link>
      </Menu>
      <div className="nav">
        <div className="nav-btn">
          <Link className="button">Задачи и работы</Link>
          <Link to="/project" className="button">
            <Link to="/project">Проекты</Link>
          </Link>
          <Link className="button">Календарь</Link>
          <Link className="button">Возможности</Link>
        </div>
      </div>
      <Route exact path="/project" component={() => <Project />} />
    </div>
  )
}
export default Main
