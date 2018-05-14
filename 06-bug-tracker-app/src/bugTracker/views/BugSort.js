import React, { Component } from 'react';

class BugSort extends Component{
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select>
					<option value="name">Name</option>
					<option value="isClosed">status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" />
			</section>
		);
	}
}
export default BugSort;