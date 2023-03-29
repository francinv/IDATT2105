import { object, string } from "yup"

const authSchema = object({
  username: string().required("Brukernavn er påkrevd"),
  password: string().required("Passord er påkrevd"),
})

export default authSchema
