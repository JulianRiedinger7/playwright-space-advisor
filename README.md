# QA Automation Project - Testim Demo Site 👨‍🚀🚀

## Overview

This project focuses on automated testing for the [Testim Demo Site](https://demo.testim.io/) using the Playwright framework with TypeScript. It leverages best practices such as the **Page Object Model (POM)** and a **Behavior-Driven Development (BDD)-like** approach using Playwright's test.step for organizing tests.

![image](https://github.com/user-attachments/assets/c1720378-771b-4f8e-bf0a-feed21a9702b)

## Project Details

### _Page Object Model (POM)_

The project utilizes the POM design pattern to separate the test logic from the underlying page structure. Each page class contains methods representing actions that can be performed on that page.

### _BDD-like Approach_

Using Playwright's test.step, the tests are organized in a BDD-like manner to make them more readable and easier to understand. Each step represents a specific action or assertion, allowing you to trace the flow of the test.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/qa-automation-demo.git
   cd qa-automation-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npx playwright test
   ```
