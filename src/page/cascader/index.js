import React from 'react';

import Regular from 'regularjs';

import {Cascader} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

import code from './code.md'

class CascaderPage extends React.Component {
	componentDidMount(){
		const options = [{
				id: '1',
				name: 'Zhejiang',
				children: [{
					id: '11',
					name: 'Hangzhou',
					children: [{
						id: '111',
						name: 'West Lake',
					}],
				}],
			}, {
				id: '2',
				name: 'Jiangsu',
				children: [{
					id: '22',
					name: 'Nanjing',
					children: [{
						id: '222',
						name: 'Zhong Hua Men',
					}],
				}],
			}];
		let cascader = new Cascader({
			data: {
				list: options
			}
		})

		cascader.$inject(this.refs.component1);
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

export default CascaderPage;
