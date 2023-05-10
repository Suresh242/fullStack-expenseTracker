import bcrypt from "bcrypt";
const salt = 10;
export const hasssPassword = (password)=>{
    return bcrypt.hashSync(password, salt)
}

export const comparePassword = (password, userPassword)=>{
    return bcrypt.compareSync(password, userPassword)
}