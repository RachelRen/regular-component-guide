import React from 'react';

import Regular from 'regularjs';

import Markdown from 'react-markdown';

import template from './index.md'

class Home extends React.Component {
	componentDidMount(){
		
	}
	render() {
		
		return (
			<div>
				<div className='markdown'>
					<Markdown source={template} />
				</div>
				
			</div>
		)
	}

}

export default Home;





