import { foo } from "./util/util.js"

export const app = (val: boolean): boolean => {
	return foo(val)
}