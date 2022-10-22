const buildQueryString = (params) => {
    const sortKeys = Object.keys(params).sort();
    const items = [];
  
    for (const key of sortKeys) {
      items.push(`${key}=${params[key]}`);
    }
  
    return items.join('&');
  };

console.log(buildQueryString({ per: 10, page: 1 }));
console.log(buildQueryString({ param: 'all', param1: true }));