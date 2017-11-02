import React from 'react';

import Regular from 'regularjs';

import {DatePicker} from 'regular-component';
// import Remarkable from 'remarkable';
import Markdown from 'react-markdown';

import template from './index.md'



class DatePickerPage extends React.Component {
	
	componentDidMount(){
		const datePicker = new DatePicker({
			data: {
				mode: 'month',
				format: 'yyyy/MM/dd',
				onChange: (value)=>{
					alert(value)
				}
			}
		})

		datePicker.$inject(this.refs.component1);

		const datePicker2 = new DatePicker({
			data: {
				format: 'yyyy/MM/dd',
				onChange: (value)=>{
					alert(value)
				}
			}
		})

		datePicker2.$inject(this.refs.component2);

		const datePicker3 = new DatePicker({
			data: {
				format: 'yyyy-MM-dd',
				mode: 'month',
				value: '2018-1',
				onChange: (value)=>{
					console.log(value)
				}
			}
		})

		datePicker3.$inject(this.refs.component3);

		const datePicker4 = new DatePicker({
			data: {
				format: 'yyyy-MM-dd',
				value: '2018-1-1',
				onChange: (value)=>{
					alert(value)
				}
			}
		})

		datePicker4.$inject(this.refs.component4);
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
					<section className='code-box'>
						<section className='code-box-demo' ref="component3">
						</section>
						<section className='code-box-meta'>
							<pre>
								<code>
									
								</code>
							</pre>
						</section>
					</section>
					<section className='code-box'>
						<section className='code-box-demo' ref="component4">
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

export default DatePickerPage;
