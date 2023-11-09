import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('Render Hello', () => {
    render(<App />);
    expect(screen.getByText('Hello'));
  });
});
