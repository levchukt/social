export const updateObjInArray = (array, itemId, propName, newObjProps) => {
    return array.map(user => {
        if (user[propName] === itemId) {
            return { ...user, ...newObjProps }
        }
        return user
    })
}