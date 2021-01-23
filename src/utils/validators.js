export const required = (value) =>{
    if(value) return undefined
    return 'Это поле обязательно'
}

export const maxLength = (value) =>{
    if(value.trim().length <= 100) return undefined
    return 'Нельзя вводить больше 100 символов'
}