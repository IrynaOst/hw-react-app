import { descendingComparator, getComparator, stableSort } from './tableSorter';

describe('descendingComparator', () => {
  it('should return -1 when b[orderBy] is less than a[orderBy]', () => {
    expect(descendingComparator({ name: 'Romeo' }, { name: 'Anna' }, 'name')).toBe(-1);
  });

  it('should return 1 when b[orderBy] is greater than a[orderBy]', () => {
    expect(descendingComparator({ name: 'Anna' }, { name: 'Romeo' }, 'name')).toBe(1);
  });

  it('should return 0 when b[orderBy] is equal to a[orderBy]', () => {
    expect(descendingComparator({ name: 'Anna' }, { name: 'Anna' }, 'name')).toBe(0);
  });
});

describe('getComparator', () => {
  it('should return a descending comparator function when order is "desc"', () => {
    const comparator = getComparator('desc', 'name');
    expect(comparator({ name: 'Anna' }, { name: 'Romeo' })).toBe(1);
  });

  it('should return an ascending comparator function when order is "asc"', () => {
    const comparator = getComparator('asc', 'name');
    expect(comparator({ name: 'Anna' }, { name: 'Romeo' })).toBe(-1);
  });
});

describe('stableSort', () => {
  it('should return a sorted array based on the given comparator', () => {
    const array = [
      { id: 1, name: 'Romeo' },
      { id: 2, name: 'Anna' },
      { id: 3, name: 'Oleh' },
    ];

    const comparator = getComparator('asc', 'name');

    const sortedArray = stableSort(array, comparator);
    expect(sortedArray).toEqual([
      { id: 2, name: 'Anna' },
      { id: 3, name: 'Oleh' },
      { id: 1, name: 'Romeo' },
    ]);
  });
});