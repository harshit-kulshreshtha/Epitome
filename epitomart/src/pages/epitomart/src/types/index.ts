export type customerType = {
    bio:{
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    dob: string,
    }
}

export type dispatchers = {
    setCustomerInitial: (
        value: customerType
    ) => void
}

export type State = {
    customer: customerType,
}
export interface Context extends State {
    dispatchers: dispatchers,
}