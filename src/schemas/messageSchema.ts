import {z} from "zod";

export const acceptMessageSchema = z.object({
  acceptMessage : z.string().min(10,"message must be at least 10 characters").max(300,"message must be at most 300 characters"),
  
});
