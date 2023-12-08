import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { PawPrint, User, HeartHandshake } from "lucide-react";

const perks = [
  {
    name: "Find your missing pet",
    Icon: PawPrint,
    description:
      "You can post your missing buddy, and we will help you to find it.",
  },
  {
    name: "Find the owner of a pet",
    Icon: User,
    description:
      "If you find a lost pet, you can post it here and help to find its owner.",
  },
  {
    name: "Help the community",
    Icon: HeartHandshake,
    description:
      "You can actively help the community by sharing the posts and helping to find the missing pets.",
  },
];

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center  max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The place to help the little ones{" "}
            <span className="text-primary">get back home</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Pet Backs Home. We&apos;ll help you to find your missing
            buddy, or to find the people that are searching for him!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/sign-up" className={buttonVariants()}>
              Sign-Up
            </Link>
            <Button variant="ghost">List all the Pets &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Home;
