
import React from 'react';
import {renderRoutes} from 'react-router-config'

import Header from './header/index'
import Menu from './menu/index'

import './index.scss'

const Root = ({ route }) => (
  <div className='g-main'>
    <Header />
    <div className='g-main-wrapper'>
    	<Menu />
    	<div className='main-container-component'>{renderRoutes(route.routes)}</div>
    </div>
    
  </div>
)

export default Root
