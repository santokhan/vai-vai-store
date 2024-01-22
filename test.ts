const getNameById = (includes: any, key: string, id: string): string => includes ? includes[key] : id.slice(0, 6);

