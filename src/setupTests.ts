/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import * as matchers from '@testing-library/jest-dom/matchers';

import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/browser';

expect.extend(matchers);

beforeAll(() => {
  server.listen();
  vi.mock('next/router', () => require('next-router-mock'));
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

afterEach(() => {
  cleanup();
});
