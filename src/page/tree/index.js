import React from 'react';

import Regular from 'regularjs';

import {Tree, Checkbox, Loading} from 'regular-component';
// import Remarkable from 'remarkable';
import Markdown from 'react-markdown';

import template from './index.md'

import code1 from './code1.md'
import code2 from './code2.md'

class TreePage extends React.Component {
	
	componentDidMount(){
		let tree = new Tree({
			data:{
		        //service: self.__loadTree(),
		        list: [{
		        	name: "tree 1",
		        	id: 1,
		        	// hasChildren: true,
		        	// showChild: true,
		        	children: [{
		        		name: "tree 11",
		        		id: 11,
		        	},{
		        		name: "tree 12",
		        		id: 12,
		        	}]
		        },{
		        	name: "tree 2",
		        	id: 2
		        },{
		        	name: "tree 3",
		        	id: 3
		        }]
		    }
		});
		tree.$inject(this.refs.component1);

		function loadList(id){
			let len = ~~(Math.random()*5) + 1,
				list = [];

			for(let i = 0; i < len; i++){
				list.push({
					name: "name" + (id || "") + i,
					id: (id || "") + i,
					hasChildren: i % 2 ? true : false
				})
			}
			return list;
			
		}
		const tree3 = new Tree({
			data: {
				multiple: true,
				service: (()=>{
					return (id, callback) => {
						callback(loadList(id))
					}
				})(),
				onSelect: function(json){
				},
				onCheck: function(json){
				}
			}
		})
		tree3.$inject(this.refs.component2);
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

export default TreePage;
