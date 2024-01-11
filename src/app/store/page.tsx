/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k03QSfCCf9T
 */

import { Button } from "@/src/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/src/components/ui/card"
import MaxWidthWrapper from "@/src/components/MaxWidthWrapper"
import Image from "next/image"

const StorePage = () => {
  return (
    <MaxWidthWrapper>
      <div key="1" className="min-h-screen flex flex-col">
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-4xl font-bold mb-8 mt-20">Welcome to Pet Backs Home Store!</h1>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Dogs</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/store/dog_toys.png"
                  alt='Dog toys image'
                  className="rounded-lg object-cover h-40 w-full mb-4"
                  height={200}
                  width={200}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                />
                <Button variant="link">Search here</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cats</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/store/cat_toys.png"
                  alt='Cat toys image'
                  className="rounded-lg object-cover h-40 w-full mb-4"
                  height={200}
                  width={200}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                />
                <Button variant="link">Search here</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Birds</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/store/bird_toys.png"
                  alt='Bird toys image'
                  className="rounded-lg object-cover h-40 w-full mb-4"
                  height={200}
                  width={200}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                />
                <Button variant="link">Search here</Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <footer className="p-6 bg-[#f43f5e] text-white text-center">© Pet Backs Home Store. All rights reserved.</footer>
      </div>
    </MaxWidthWrapper>
  )
}

export default StorePage;
