import { User } from "next-auth"

type Organization = {
    id: string,
    slug: string,
    name?: string,
    website: string,
    userId: string,
    user: User
}