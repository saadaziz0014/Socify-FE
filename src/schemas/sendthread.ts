import {z} from 'zod'

export const sendthreadSchema = z.object({ 
    title:z.string().min(4),
    body:z.string().max(100)
})