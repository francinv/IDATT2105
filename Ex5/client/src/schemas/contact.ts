import { object, string } from "yup"

const contactSchema = object({
  name: string().required("Navn er påkrevd"),
  email: string().email("Ugyldig epost").required("Epost er påkrevd"),
  message: string().required("Melding er påkrevd"),
})

export default contactSchema
