import React from 'react';

import Regular from 'regularjs';

import {InputNumber} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

import code from './code.md';

class InputNumberPage extends React.Component {
	componentDidMount(){
		let inputNumber = new InputNumber({
			data: {
				value: 2,
				showHandler: true,//false
				max: 100,
				isPositive: false,
				hasDecimal: true,
				class: "",
				maxLength: 23,
				defaultValue: "3",
				onChange: (value) =>{
					console.log(value)
				}
			}
		});
		inputNumber.$inject(this.refs.component1);
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

export default InputNumberPage;
