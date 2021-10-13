const filter = {
  spare_part_code: null,
  hsn_code: null,
  spare_part_desc: null,
  spare_part_group: null,
  rate: 11,
  frn_uom: null,
  active_id: 1,
};

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
