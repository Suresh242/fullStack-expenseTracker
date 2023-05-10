import userSchema from "./userSchema.js"

export const insertUser =(obj)=>{
    return userSchema(obj).save()


}
export const signInUser =(email)=>{
    return userSchema.findOne({email})
}
