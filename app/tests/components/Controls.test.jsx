const React			= require("react");
const ReactDOM	= require("react-dom");
const expect 		= require("expect");
const $					= require("jQuery");
const TestUtils = require("react-addons-test-utils");


const Controls = require("Controls");

describe("Controls", ()=> {
	it("should exist", ()=> {
		expect(Controls).toExist();
	});

	describe("render", () => {
		it("should render pause when started", () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find("button:contains(Pause)");

			expect($pauseButton.length).toBe(1);
		});

		it("should render started when paused", () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="pause" />);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find("button:contains(Start)");

			expect($startButton.length).toBe(1);
		});
	
	});
});

