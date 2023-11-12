/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { server } from './mocks/browser';

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
