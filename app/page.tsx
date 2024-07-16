'use client'
import { Toggle } from "@/components/toggle";
import { Navigation } from "@/components/navbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import WordPullUp from "@/components/magicui/word-pull-up";
import { BorderBeam } from "@/components/magicui/border-beam";
import Image from "next/image";
import { JobCard, LandingPageJobCard } from "@/components/job-card";
import Link from "next/link";
import { MainAlert } from "@/components/main-alert";
import { Alert } from "@/components/main-alert";


// export const metadata:Metadata = {
//   title: "HireHollo",
//   description: "HireHollo, Your one-stop platform for creating and managing custom job boards.",
//   applicationName: "HireHollo"

// }

export default function Page() {
  // const session = await auth();
  const text:string = "Beruf = Ich arbeite als Architekt im Büro. Um 8 Uhr fahre ich eine halbe Stunde zur Arbeit mit dem Auto. Ich arbeite von 9 Uhr bis 15 Uhr. Nach der Arbeit gehe ich aus. Ich finde meine Arbeit sehr gut! URLAUB = Ich bin mit meinen Freunden mit dem Auto nach Hurghada gefahren. Am Morgen sind wir im Meer geschwommen. Am Nachmittag haben wir in einem Restaurant gegessen und viele Fotos gemacht. Das Wetter war gut und die Reise war super. Party = Kaufen Sie Fleisch, Cola und Kuchen! Mein Lieblingsessen ist Pizza. Ich bringe Pizza mit. CairoFestivalCity = Gestern bin ich mit meinen Freunden zu Cairo Festival City mit dem Auto gefahren. Meine Lieblingsfarben sind Blau und Rot und meine Lieblingsmarken sind H&M und Zara. Ich habe einen blauen Pullover und ein rotes Hemd eingekauft. Nach Einkauf sind wir ins Kino gegangen und haben Pizza gegessen. Um 22 Uhr bin ich nach Hause gekommen. Wedding Shopping = Ich mochte am Montag Uhr einen schwarzen Anzug, einen schwazen Mantel und schwarze Schuhe bei Zara kaufen. Kommst du mit? Sickness = Ich kann heute nicht zur Uni gehen, denn ich bin krank. Ich bin zum Arzt um 18 Uhr gegangen. Ich hatte Fieber. ich muss die Medikamante dreimal pro tag einnehmen, im Bett drei Tage bleiben und viele Gemuse und Suppe essen. Ich darf nicht rauchen und kein Eis essen. Kannst du mir helfen? Or kannst du die Medikamente mitbringen. Someone has cold = Hallo Ali, Wie geht's dir jetzt? Ich hoffe besser. Du sollst viele Gemuse und Suppe essen und darfst kein Eis essen. Ich kaufe dir die Medikamente."
  return (
   <>
   {/* <Navigation session={session}/>
   <div className="text-center p-8 w-full flex flex-col gap-3 items-center">
      <Alert />
      <WordPullUp
        className="text-4xl tracking-[-0.05em] text-black dark:text-white md:text-6xl md:leading-[5rem]"
        words="Hiring for startups and small teams."
        />
        <div className="flex flex-row w-full max-w-fit items-center justify-center gap-4">
      <Button asChild className="w-52">
        <Link href={`https://demo.${process.env.NEXT_URL}`}>
        See Demo
        </Link>
        </Button>
      <Button className="w-52" asChild>
        <Link href='/auth'>
        Try Now
        </Link>
      </Button>
        </div>
      <div className="w-full items-center flex content-center flex-col mt-3">
      <div className="flex flex-col gap-4 sm:w-1/2 w-full">
      <div className="relative">
      <LandingPageJobCard title="Product Manager" type="FULLTIME"/>
      </div>
      <div className="relative">
      <LandingPageJobCard title="Operations Manager" type="CONTRACT"/>
      </div>
      <div className="relative">
      <LandingPageJobCard title="Software Engineer" type="INTERNSHIP"/>
      </div>
      </div>
      </div>
   </div> */}
   <div className="bg-white dark:bg-white h-full w-full p-8">
    <Button onClick={(() => { navigator.clipboard.writeText(text)})}>
      Copy
    </Button>

   </div>
   </>
  );
}
