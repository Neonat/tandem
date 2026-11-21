import { strict as assert } from "node:assert";
import { test } from "node:test";
import { formatRelative } from "./date.ts";

const cases = [
  { now: [21, 23, 50], target: [21, 0, 5], expected: "Today" },
  { now: [21, 23, 50], target: [22, 0, 5], expected: "Tomorrow" },
  { now: [21, 0, 10], target: [20, 23, 55], expected: "Yesterday" },
  { now: [21, 23, 50], target: [23, 0, 5], expected: "In 2 days" },
  { now: [21, 0, 10], target: [19, 23, 55], expected: "2 days ago" },
];

for (const { now, target, expected } of cases) {
  test(`relative dates use the local calendar for ${expected}`, (context) => {
    const currentDate = new Date(2026, 10, now[0], now[1], now[2]);
    const targetDate = new Date(2026, 10, target[0], target[1], target[2]);
    context.mock.timers.enable({ apis: ["Date"], now: currentDate });

    assert.equal(formatRelative(targetDate.toISOString()), expected);
  });
}
