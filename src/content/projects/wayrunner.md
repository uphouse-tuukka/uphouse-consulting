---
projectKey: "wayrunner"
title: "Wayrunner"
role: "System design & development"
stack: ["Python", "Coding agents", "GitHub", "Automated verification"]
duration: "2026-present"
outcome: "Built an agent-driven delivery system connecting specifications, implementation, review, acceptance, and pull requests."
atAGlance:
  problem: "Delegating coding tasks still left me coordinating the work, collecting evidence, and recovering interrupted runs by hand."
  contribution: "I built a workflow that coordinates agents and keeps implementation, independent acceptance, and human decisions separate."
  result: "A working personal system with recorded isolated delivery runs, recovery checks, and a connection to my personal AI assistant."
order: 3
---

## Starting point

I wanted to delegate more than the next coding task. A useful system needed to understand the work, carry it through implementation and review, and establish whether the requested result had actually been delivered.

Wayrunner is my first agent-driven software delivery system. It connects specifications and tasks with implementation, review, acceptance checks, and pull-request delivery.

## The important design decision

An implementation agent finishing its work does not establish that the work is correct. Wayrunner treats that output as a proposed result. Separate review and acceptance steps check it against the request and the relevant revision before delivery can proceed.

The workflow also needs to know when to stop. Correction attempts are bounded. Missing evidence, unresolved product decisions, and operational failures have explicit paths instead of becoming an endless retry loop.

## Human decisions and recovery

I connected Wayrunner to Alfred, my personal AI assistant, so project questions and my replies can stay attached to the work. I built Alfred before Grok Bot was a thing, so I also got the early-adopter privilege of being my own tech support. The assistant carries the conversation. Wayrunner retains the workflow state and the acceptance checks.

Interrupted work needs to remain inspectable. Saved results and recovery records let the process distinguish work that can continue from work that needs a new attempt or a decision from me.

## The result

The system has recorded isolated end-to-end runs covering implementation, separate review, acceptance, and pull-request delivery. The assistant connection has also been exercised through conversation and restart scenarios. It is a personal system under active development.

This work has shaped how I approach AI development workflows. Giving agents larger tasks requires explicit definitions of completion and a way to check their results. I still own the product decisions and the authority I delegate.
