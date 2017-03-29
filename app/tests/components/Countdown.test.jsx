const React			= require("react");
const ReactDOM	= require("react-dom");
const expect 		= require("expect");
const $					= require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Countdown = require("Countdown");


describe("Countdown", () => {
	it("should exist", () => {
		expect(Countdown).toExist();
	});


	describe("handleSetCountdown", () => {
		it("should set state to started and countdown", (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe("started");

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001)
		});

		it(" should never set state less than zero", (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001)
		});

		it("should pause countdown on paused status", (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange("paused");

			setTimeout(()=>{
				expect(countdown.state.countdownStatus).toBe("paused");
				expect(countdown.state.count).toBe(3);
				done();
			}, 1001);
		});

		it("should reset count to 0 on stopped", (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange("stopped");

			setTimeout(()=>{
				expect(countdown.state.countdownStatus).toBe("stopped");
				expect(countdown.state.count).toBe(0);
				done();
			}, 1001);
		});

	});
});