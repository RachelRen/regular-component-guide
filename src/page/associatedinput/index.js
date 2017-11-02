import React from 'react';

import Regular from 'regularjs';

import {AssociatedInput} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

class AssociatedInputPage extends React.Component {
	componentDidMount(){
		var dataSource = [{
			name: "name1",
			id: 11
		},{
			name: "name22",
			id: 22
		},{
			name: "name 32",
			id: 32
		}]

		var associatedInput = new AssociatedInput({
			data: {
				dataSource: dataSource,
				selectedList: [{
					id: '1',
					name: '12'
				},{
					id: '23',
					name: '34'
				}]
			}
		})
		associatedInput.$inject(this.refs.component1);
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
					
				</div>
			</div>
		)
	}

}

export default AssociatedInputPage;
