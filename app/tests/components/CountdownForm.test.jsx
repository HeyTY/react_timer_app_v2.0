const React			= require("react");
const ReactDOM	= require("react-dom");
const expect 		= require("expect");
const $					= require("jQuery");
const TestUtils = require("react-addons-test-utils");

const CountdownForm = require("CountdownForm");

describe("CountdownForm", ()=> {
	it("should exist", () => {
		expect(CountdownForm).toExist();
	});

	it("should call onSetCountdown if valid seconds entered", () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = "99";
		TestUtils.Simulate.submit($el.find("form")[0]);

		expect(spy).toHaveBeenCalledWith(99);
	});

		it("should NOT call onSetCountdown if invalid seconds entered", () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = "A123";
		TestUtils.Simulate.submit($el.find("form")[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});