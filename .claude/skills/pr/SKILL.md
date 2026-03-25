---
name: pr
description: Generate a pull request description from the git diff against origin/main or origin/master
allowed-tools: Bash
---

Analyze the git diff between the current branch and origin/main. If origin/main does not exist, use origin/master.

Write a pull request description grounded only in the diff.

Rules:
- Output markdown only
- No code fences
- No filler
- No placeholders
- No invented context
- Keep it concise but useful
- Omit empty sections

Format:

## Summary
A short paragraph explaining what changed and why.

## Problem
Only include if the underlying issue is clear from the diff.

## Solution
High-level explanation of the implementation.

## Changes
- Bullet list of key code changes

## How to Test
Only include if test steps can be inferred from the diff.

## Impact
Only include if there are real reviewer-relevant impacts such as breaking changes, risky areas, config changes, migrations, or performance effects.

## Notes
Only include if needed.

Be precise. Distinguish behavior changes from refactors. Call out tests, schema changes, config changes, and removed code when present.
