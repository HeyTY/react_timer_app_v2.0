const React 	= require("react");
const Nav			= require("Nav");




var Main = (props) => {
	return (
		<div>
			<div>
			<Nav />
				<div>
					<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>		
		</div>
	)
};

module.exports = Main;