export function getFilterQuery(filter) {
  const query = [];
  const queryArr = [];
  for (const [key, value] of Object.entries(filter)) {
    if (value !== null) {
      query.push(`${key}=?`);
      queryArr.push(value);
    }
  }

  return {
    query: query.length === 0 ? '' : ` where ${query.join(' and ')}`,
    queryArr,
  };
}
