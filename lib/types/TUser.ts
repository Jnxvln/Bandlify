type TUser = {
    firstName: FormDataEntryValue | null,
    lastName: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null,
}

export type TRegisterUser = {
    firstName: FormDataEntryValue | null,
    lastName: FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null,
    confirmPassword: FormDataEntryValue | null
}

export default TUser