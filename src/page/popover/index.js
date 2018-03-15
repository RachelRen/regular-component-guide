import React from 'react';

import Regular from 'regularjs';

import {Popover} from 'regular-component';
import Markdown from 'react-markdown';
import template from './index.md'

import code from './code.md';

class PopoverPage extends React.Component {
	componentDidMount(){
		var self = this;
		new Popover({
			data: {
				placement: "top",
				target: self.refs.component1,
				title: "标题",
		        content: "top"
			}
		})
		new Popover({
			data: {
				placement: "left",
				target: self.refs.component2,
				title: "title",
		        content: "left"
			}
		})
		new Popover({
			data: {
				placement: "right",
				target: self.refs.component3,
				title: "title",
		        content: "right"
			}
		})
		new Popover({
			data: {
				placement: "bottom",
				target: self.refs.component4,
				title: "title",
		        content: "bottom"
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
						<section className='code-box-demo'>
							<div style={{'marginLeft': '60px'}}>
								<button className='btn' ref="component1">top</button>
							</div>
							<div style={{'width': '60px', 'float': 'left'}}>
								<button className='btn' ref="component2">left</button>
							</div>
							<div style={{'marginLeft': '140px', 'width': '60px'}}>
								<button className='btn' ref="component3">right</button>
							</div>
							<div style={{'marginLeft': '60px', 'clear': 'both'}}>
								<button className='btn' ref="component4">bottom</button>
							</div>
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

export default PopoverPage;
