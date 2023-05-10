import transSchema from "./transSchema.js"

export const addTrans =(addObj)=>{
    return transSchema(addObj).save()

}
export const getTrans = (userId)=>{
    return transSchema.find(userId)
}
export const deleteMultipleTrans =(ids,userId)=>{
    return transSchema.deleteMany({
        _id:{$in:ids}
        
    ,
    userId})
}
export const updateTransaction =(_id,obj)=>{
    return transSchema.findByIdAndUpdate(_id,obj, {new:true})
}