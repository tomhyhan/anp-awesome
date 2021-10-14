
const filter = {
    emp_name: null,
    emp_code: null,
    site_master_id: null,
    contact: null,
    address: null,
    designation: null,
    department: null,
    created_by: null,
    created_date: null,
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