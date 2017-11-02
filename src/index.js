import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './route/index'
import './assets/sass/style.scss'

import Home from './page/home/index'
import TreePage from './page/tree/index'


ReactDOM.render((
  	<BrowserRouter>
  		{renderRoutes(routes)}
  		
  	</BrowserRouter>
), document.getElementById('component'))
