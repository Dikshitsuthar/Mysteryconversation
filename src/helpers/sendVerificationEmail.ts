import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

  export async function sendVerificationEmail(
    email : string,
username : string,
verifyCode : string
  ):Promise<ApiResponse>{
      try{
        await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: email,
          subject: ' MystryText : Verification code',
          react:VerificationEmail({username, otp: verifyCode}),
        });
        return  {
          success: true,
          message: 'verification email sent',
        }
        }

   
      catch(emailError)
      {
        console.error('error sending verification email', emailError);
        return {
          success: false,
          message: 'error sending verification email',
        };
      
  }

}