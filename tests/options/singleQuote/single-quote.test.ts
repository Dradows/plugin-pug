import { format } from 'prettier';
import { plugin } from './../../../src/index';

describe('Options', () => {
	describe('singleQuote', () => {
		test('should handle singleQuote:true', () => {
			const expected: string = 'div(:class=\'{ "pt-2": !dense }\')\n';
			const code: string = 'div(:class="{ \'pt-2\': !dense }")\n';
			const actual: string = format(code, { parser: 'pug', plugins: [plugin], singleQuote: true });

			expect(actual).toBe(expected);
		});

		test('should handle singleQuote:false', () => {
			const expected: string = 'div(:class="{ \'pt-2\': !dense }")\n';
			const code: string = 'div(:class=\'{ "pt-2": !dense }\')\n';
			const actual: string = format(code, { parser: 'pug', plugins: [plugin], singleQuote: false });

			expect(actual).toBe(expected);
		});

		test('should handle singleQuote:true + pugSingleQuote:false', () => {
			const expected: string = 'div(:class="{ \'pt-2\': !dense }")\n';
			const code: string = 'div(:class="{ \'pt-2\': !dense }")';
			const actual: string = format(code, {
				parser: 'pug',
				plugins: [plugin],
				singleQuote: true,

				pugSingleQuote: false
			});

			expect(actual).toBe(expected);
		});

		test('should handle singleQuote:true + pugSingleQuote:true', () => {
			const expected: string = 'div(:class=\'{ "pt-2": !dense }\')\n';
			const code: string = 'div(:class="{ \'pt-2\': !dense }")';
			const actual: string = format(code, {
				parser: 'pug',
				plugins: [plugin],
				singleQuote: true,

				pugSingleQuote: true
			});

			expect(actual).toBe(expected);
		});

		test('should handle singleQuote:false + pugSingleQuote:false', () => {
			const expected: string = 'div(:class="{ \'pt-2\': !dense }")\n';
			const code: string = 'div(:class="{ \'pt-2\': !dense }")';
			const actual: string = format(code, {
				parser: 'pug',
				plugins: [plugin],
				singleQuote: false,

				pugSingleQuote: false
			});

			expect(actual).toBe(expected);
		});

		test('should handle singleQuote:false + pugSingleQuote:true', () => {
			const expected: string = 'div(:class=\'{ "pt-2": !dense }\')\n';
			const code: string = 'div(:class="{ \'pt-2\': !dense }")';
			const actual: string = format(code, {
				parser: 'pug',
				plugins: [plugin],
				singleQuote: false,

				pugSingleQuote: true
			});

			expect(actual).toBe(expected);
		});
	});
});
