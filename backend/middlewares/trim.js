export const postTrim = async (req, res, next) => {
    if (req.method === 'POST') {
        for (let bodyKey in req.body) {
            for (const [key, value] of Object.entries(req.body[bodyKey])) {
                if (typeof(value) === 'string')
                    req.body[bodyKey][key] = value.trim();
            }
        }
    }
    next();
}