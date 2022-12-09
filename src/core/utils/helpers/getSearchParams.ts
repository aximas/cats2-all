export const getSearchParams = <ObjectType>(
    queryParams: Partial<Record<keyof ObjectType, unknown>>
) => {
    const newObj: { [K: string]: string } = {};

    for (const key in queryParams) {
        if (Object.hasOwnProperty.call(queryParams, key)) {
            const objVal = queryParams[key];
            if (objVal) {
                switch (typeof objVal) {
                    case 'string':
                        newObj[key] = objVal;
                        break;
                    case 'number':
                        newObj[key] = objVal.toString();
                        break;
                    case 'boolean':
                        if (objVal) newObj[key] = objVal.toString();
                        break;
                    default:
                        break;
                }
            }
        }
    }

    return newObj;
};
