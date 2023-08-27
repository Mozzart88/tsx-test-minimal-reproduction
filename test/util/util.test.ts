import assert from "node:assert";
import { describe, it } from "node:test";
import { foo } from "../../src/util/util.js";

describe('util tests', () => {
	it('Should return true', () =>{
		assert.strictEqual(foo(false), true, 'Not good')
	})
	it('Should return false', () =>{
		assert.strictEqual(foo(true), false, 'Not good')
	})
})