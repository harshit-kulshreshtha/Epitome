import { customerType } from ".";

export type ActionType<Name extends string, Payload = unknown> = {
    type: Name,
    payload: Payload
}
export type Action  = ActionType<"SET_CUSTOMER_INITIALS", customerType >