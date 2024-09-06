import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { FreeCard, PaidCard } from "@/components/pricing";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Terms & Conditions",
  description: "Heliup, Your one-stop platform for creating and managing custom job boards.",
  applicationName: "Heliup"

}

export default async function Page() {
  const session = await auth();
  return (
   <>
   <div className="top-0 sticky z-50">
   <Navigation session={session}/>
   </div>
   <div className="w-full p-8">
    <h1 className="font-bold text-center text-3xl pt-4 pb-4">Terms & Conditions</h1>
    <p className="font-bold text-xl">1. Acceptance of Terms</p>
    <p>By using Heliup, you agree to these Terms and Conditions. If you don’t agree, you shouldn’t use our services.</p>
    <p className="font-bold text-xl pt-4">2. Changes to Terms</p>
    <p>We may update these terms from time to time. If we do, we’ll notify you. Continuing to use Heliup after updates means you agree to the new terms.</p>
    <p className="font-bold text-xl pt-4">3. Account Registration</p>
    <p>To access some features, you’ll need to create an account. Please provide accurate information and keep your login details safe. You’re responsible for anything that happens under your account.</p>
    <p className="font-bold text-xl pt-4">4. Subscriptions and Payments</p>
    <p>Heliup offers subscription plans. When you sign up, you agree to the pricing and billing terms for your plan. If you don’t pay on time, we may suspend or cancel your access to the service.</p>
    <p className="font-bold text-xl pt-4">5. Refund Policy</p>
    <p>We want you to be happy with Heliup. If you are unsatisfied, you may request a refund within 7 days of your initial purchase. After this period, refunds are not available. For any refund inquiries, please contact us at ramezjoseph8@gmail.com.</p>
    <p className="font-bold text-xl pt-4">6. Free Trials</p>
    <p>We may offer free trials. Once the trial ends, you’ll need to subscribe to keep using Heliup.</p>
    <p className="font-bold text-xl pt-4">7. Your Responsibilities</p>
    <p>When using Heliup, you agree not to:</p>
    <li>Break any laws or do anything harmful or illegal.</li>
    <li>Try to hack or misuse our platform.</li>
    <li>Upload anything that violates others’ rights.</li>
    <p className="font-bold text-xl pt-4">8. Service Changes</p>
    <p>We’re always improving Heliup, so we may add or remove features or stop offering the service entirely. We’ll try to give notice if something big changes.</p>
    <p className="font-bold text-xl pt-4">9. Cancellation and Termination</p>
    <p>You can cancel your subscription at any time via your account settings. If you violate these terms, we may suspend or terminate your account.</p>
    <p className="font-bold text-xl pt-4">10. Contact Us</p>
    <p>If you have any questions or need help, you can reach us at ramezjoseph8@gmail.com</p>
   </div>
   </>
  );
}
