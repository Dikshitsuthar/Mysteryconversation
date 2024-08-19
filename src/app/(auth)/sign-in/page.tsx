'use client';
import React from "react";


export default function SignInForm() {
 

  return (
    <>
          
            <button className='w-full' type="submit">Sign In</button>

    
        <div className="text-center mt-4">
          <p>
            Not a member yet?{' '}
            <a href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up
            </a>
          </p>
        </div>
 </>
  );
}
