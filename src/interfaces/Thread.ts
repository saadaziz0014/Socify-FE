import User from "./User";

export default interface Thread {
    id: string;
    title: string;
    body: string;
    user: User;
}