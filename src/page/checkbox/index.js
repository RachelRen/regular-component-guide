import React from 'react';

import Regular from 'regularjs';

import {Checkbox} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

class CheckboxPage extends React.Component {
	componentDidMount(){
		const checkbox1 = new Checkbox({
			data: {
				text: 'rere1',
				onChange: (o) =>{
					debugger;
				}
			}
		})

		const checkbox2 = new Checkbox({
			data: {
				text: 'rere2',
				checked: true
			}
		})
		checkbox1.$inject(this.refs.component1);
		checkbox2.$inject(this.refs.component2);
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
									
								</code>
							</pre>
						</section>
					</section>
					<section className='code-box'>
						<section className='code-box-demo' ref="component2">
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

export default CheckboxPage;
