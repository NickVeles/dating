// articleDateTime.test.ts
import { articleDateTime } from '@/lib/utils';

describe('articleDateTime', () => {
  it('formats a valid Date object correctly', () => {
    const date = new Date('2023-07-06T14:30:00');
    const result = articleDateTime(date);

    expect(result).toBe(
      date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    );
  });

  it('formats a valid date string correctly', () => {
    const dateString = '2023-07-06T14:30:00';
    const result = articleDateTime(dateString);
    const expected = new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    expect(result).toBe(expected);
  });

  it('returns null for an invalid date string', () => {
    expect(articleDateTime('invalid-date')).toBeNull();
  });

  it('returns null for an invalid Date object', () => {
    const invalidDate = new Date('invalid');
    expect(articleDateTime(invalidDate)).toBeNull();
  });

  it('handles edge case: empty string', () => {
    expect(articleDateTime('')).toBeNull();
  });

  it('handles edge case: null input cast as any', () => {
    expect(articleDateTime(null as any)).toBeNull();
  });

  it('handles edge case: undefined input cast as any', () => {
    expect(articleDateTime(undefined as any)).toBeNull();
  });
});
