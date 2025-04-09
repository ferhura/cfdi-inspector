'use client';
import { SignUp } from '@clerk/nextjs';

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp path="/register" routing="path" signInUrl="/login" />
    </div>
  );
}
