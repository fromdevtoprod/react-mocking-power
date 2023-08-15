// import renderer from 'react-test-renderer';
// import { Counter, CounterProps } from './Counter';

// const props: CounterProps = {
//     count: 0,
//     updateCounter: jest.fn(),
// };

// describe("Testing Counter component", () => {
//     test("should display 0 when the counter is initialized", () => {
//         const component = renderer.create(<Counter {...props} />);
//         console.log("component.root.findByType('button').children[0]", component.root.findByType('button').children[0]);
//         expect(false).toBeFalsy();
//     });
// });

import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
