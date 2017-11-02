import React from 'react';

import Regular from 'regularjs';

import {Message} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

class MessagePage extends React.Component {
	componentDidMount(){
		

		
	}
	successMsg = () =>{
		new Message({
			data: {
		        "type": "success",
		        "content": '成功'
		    }
		})
	}
	errorMsg = () =>{
		new Message({
			data: {
		        "type": "error",
		        "content": '错误'
		    }
		})
	}
	render() {
		return (
			<div>
				<div className='markdown'>
					<Markdown source={template} />
				</div>
				<div>
					<h2>代码演示</h2>
					<section className='code-box'>
						<section className='code-box-demo' ref="component1">
							<button className='btn' style={{'marginRight': '8px'}} onClick={this.successMsg}>Success</button>
							<button className='btn' onClick={this.errorMsg}>Error</button>
						</section>
						<section className='code-box-meta'>
							<pre>
								<code>
									
								</code>
							</pre>
						</section>
					</section>
					
				</div>
			</div>
		)
	}

}

export default MessagePage;
