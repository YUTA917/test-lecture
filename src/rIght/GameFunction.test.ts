import { play } from "./GameFunction";
import { describe, it, expect } from "vitest";

describe("じゃんけん", () => {
	it("p1👊 vs p2✌️のときp1_winsが返る", () => {
		const result = play("Rock", "Scissors");
		expect(result).toBe("p1-win");
	});

	it("p2👊 vs p1✌️のときp1_winsが返る", () => {
		const result = play("Scissors", "Rock");
		expect(result).toBe("p2-win");
	});

	it("p1✌️ vs p2✋️のときp1_winsが返る", () => {
		const result = play("Scissors", "Paper");
		expect(result).toBe("p1-win");
	});

	it("p2✌️ vs p1✋️のときp2_winsが返る", () => {
		const result = play("Paper", "Scissors");
		expect(result).toBe("p2-win");
	});

	it("p1✋️ vs p2👊️のときp1_winsが返る", () => {
		const result = play("Paper", "Rock");
		expect(result).toBe("p1-win");
	});

	it("p2✋️ vs p1👊️のときp2_winsが返る", () => {
		const result = play("Rock", "Paper");
		expect(result).toBe("p2-win");
	});

	it("p1✋️ vs p2✋️のときDrawが返る", () => {
		const result = play("Paper", "Paper");
		expect(result).toBe("Draw");
	});

	it("p1✌️ vs p2✌️️のときDrawが返る", () => {
		const result = play("Scissors", "Scissors");
		expect(result).toBe("Draw");
	});

	it("p1👊️ vs p2👊️のときDrawが返る", () => {
		const result = play("Rock", "Rock");
		expect(result).toBe("Draw");
	});
});
