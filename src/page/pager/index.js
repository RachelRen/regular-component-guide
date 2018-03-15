import React from 'react';

import Regular from 'regularjs';

import {Pager} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

import code1 from './code1.md';
import code2 from './code2.md';

class PagerPage extends React.Component {
	componentDidMount(){
		
		let pager = new Pager({
			data: {
				current: 1,
				total: 2,
				onChange: function(current){
					debugger;
				},
				
			}
		})
		pager.$inject(this.refs.component1);

		let pager2 = new Pager({
			data: {
				current: 1,
				total: 4,
				mode: 2,
				onChange: function(current){
					debugger;
				},
				
			}
		})
		pager2.$inject(this.refs.component2);

		
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
									<Markdown source={code1} />
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
									<Markdown source={code2} />
								</code>
							</pre>
						</section>
					</section>
					
				</div>
			</div>
		)
	}

}

export default PagerPage;
