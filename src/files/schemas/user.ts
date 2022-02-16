import * as yup from "yup";

export const schemaLogin = yup.object({
    password: yup.string().min(8).max(10).matches(/([+@#$_!])/).required()
})