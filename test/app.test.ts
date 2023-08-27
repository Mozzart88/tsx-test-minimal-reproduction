import { describe, it } from "node:test";
import { app } from "../src/app.js";
import assert from "node:assert";

describe('App tests', () => {
	it('should return true', () => {
		assert.strictEqual(app(false), true, 'Not good')
	})
	it('should return false', () => {
		assert.strictEqual(app(true), false, 'Not good')
	})
})