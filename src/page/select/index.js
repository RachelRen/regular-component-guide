import React from 'react';

import Regular from 'regularjs';

import {Select} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

import code from './code.md';

class SelectPage extends React.Component {
	componentDidMount(){
		let select = new Select({
			data: {
				value: '1',
				class: 'selectClass',
				list: [{
					value: '',
					text: "rerer"
				},{
					value: 1,
					text: "text"
				},{
					value: 2,
					text: "text 2"
				}],
				onChange: function(value){
					debugger;
				}
			}
		})
		select.$inject(this.refs.component1);
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
						</section>
						<section className='code-box-meta'>
							<pre>
								<code>
									<Markdown source={code} />
								</code>
							</pre>
						</section>
					</section>
					
				</div>
			</div>
		)
	}

}

export default SelectPage;
