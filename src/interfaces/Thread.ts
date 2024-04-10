import User from "./User";

export default interface Thread {
    title: string;
    body: string;
    user: User;
}