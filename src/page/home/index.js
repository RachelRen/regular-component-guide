import React from 'react';

import Regular from 'regularjs';

import {Message, Checkbox} from 'regular-component';

import Markdown from 'react-markdown';

import indexTempl from './index.html';


class Home extends React.Component {
	componentDidMount(){
		new Message({
			data: {
				"type": "success",
		        "content": '更新成功'
			}
		})
	}
	render() {
		let test = `rer<br/>rerer`
		return (
			<div>
				<section>
					<h2>安装</h2>
					<div>
						使用 npm
						<div>
							$ npm install regular-component
						</div>
					</div>
					<div className='markdown'>
						<Markdown source={indexTempl} />
					</div>
					
				</section>
				
			</div>
		)
	}

}

export default Home;
