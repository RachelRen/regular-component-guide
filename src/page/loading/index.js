import React from 'react';

import Regular from 'regularjs';

import {Loading} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

import code from './code.md';

class LoadingPage extends React.Component {
	componentDidMount(){
		const loading = new Loading({
			data: {
				state: 'loading',//[loading | complete | error]
				error: {
					msg: '',
					code: ''
				}
			}
		})
		loading.$inject(this.refs.component1);
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

export default LoadingPage;
