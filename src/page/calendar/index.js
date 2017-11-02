import React from 'react';

import Regular from 'regularjs';

import {Calendar} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

class CalendarPage extends React.Component {
	componentDidMount(){
		let calendar = new Calendar();
		calendar.$inject(this.refs.component1);
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

export default CalendarPage;
