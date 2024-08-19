import { z } from "zod";

export const usernameValidation = z.string()
                            .min(3 , "username must be at least 3 characters")
                            .max(20 , "username must be at most 20 characters")
                            .regex(/^[a-zA-Z0-9]+$/ , "username must be alphanumeric");

                            
export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email( "Please fill a valid email address"),
    password : z.string().min(6 , "password must be at least 6 characters"),
    
});                