/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VAKEtk85hs8
 */
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeartIcon } from "lucide-react"

export default function Component() {
  return (
    <MaxWidthWrapper>
      <div className="bg-[#f43f5dc7] min-h-screen flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
        <Card className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <CardHeader>
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  alt="Pet backs home logo"
                  className="h-48 w-full object-cover md:w-48"
                  height="192"
                  src="/logo.svg"
                  style={{
                    aspectRatio: "192/192",
                    objectFit: "cover",
                  }}
                  width="192"
                />
              </div>
              <div className="p-8">
                <Badge className="border-green-600 bg-white dark:bg-gray-950" variant="outline">
                  <HeartIcon className="h-3 w-3 -translate-x-1 animate-pulse fill-green-300 text-green-300" />
                  Donation
                </Badge>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white">
                  Support Our Cause
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Your donation makes a difference. Choose an amount to donate, or provide a custom amount.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            <Button className="w-full h-12 flex justify-center items-center bg-[#f43f5e] text-white" variant="outline">
              Donate $1
            </Button>
            <Button className="w-full h-12 flex justify-center items-center bg-[#f43f5e] text-white" variant="outline">
              Donate $5
            </Button>
            <div className="flex items-center justify-between">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                min="1"
                name="customAmount"
                placeholder="Custom Amount"
                type="number"
              />
              <Button className="bg-[#f43f5e] text-white" variant="outline">
                Donate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  )
}
