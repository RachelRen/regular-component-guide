import React from 'react';
import { NavLink } from 'react-router-dom'

import './index.scss'
class Menu extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	menuList: [{
	    		url: '/tree',
	    		name: 'Tree'
	    	},{
	    		url: '/associatedinput',
	    		name: 'Associatedinput'
	    	},{
	    		url: '/calendar',
	    		name: 'Calendar'
	    	},{
	    		url: '/cascader',
	    		name: 'Cascader'
	    	},{
	    		url: '/checkbox',
	    		name: 'Checkbox'
	    	},{
	    		url: '/datePicker',
	    		name: 'DatePicker'
	    	},{
	    		url: '/inputnumber',
	    		name: 'InputNumber'
	    	},{
	    		url: '/loading',
	    		name: 'Loading'
	    	},{
	    		url: '/message',
	    		name: 'Message'
	    	},{
	    		url: '/pager',
	    		name: 'Pager'
	    	},{
	    		url: '/popover',
	    		name: 'Popover'
	    	},{
	    		url: '/select',
	    		name: 'Select'
	    	},{
	    		url: '/toolTip',
	    		name: 'ToolTip'
	    	}]
	    }
	  }
	render() {
		return (
			<div className='g-menu'>
				<ul className='m-menu'>
					{this.state.menuList.map((item, index) =>
						<li className='m-menu-item'>
							<NavLink key={index} activeClassName='m-menu-item-link-selected' className='m-menu-item-link' to={item.url}>{item.name}</NavLink>
						</li>
					)}
				</ul>
			</div>
			)
	}

}

export default Menu;
