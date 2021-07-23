import * as yup from 'yup'

const formSchema = yup.object().shape({
    name:yup
    .string()
    .trim()
    .required('Name is required')
    .min(2,'name must be at least 2 characters'),
    size:yup
    .string()
    .oneOf(['small','large'], 'size is required'),
    sauce:yup
    .string()
    .oneOf(['marinara', 'bbq'], 'sauce is required'),
    instructions:yup
    .string(),

    cheese:yup.boolean(),
    pepperoni:yup.boolean(),
    pineapple:yup.boolean(),
    ham:yup.boolean(),

}
)

export default formSchema;