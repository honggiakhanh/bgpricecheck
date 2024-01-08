import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

interface Store {
  store: string;
  products: Product[];
}
interface Product {
  name: string;
  price: string;
  fullImageLink: string;
  fullProductLink: string;
}

const getBoardgame = async (keyword: string) => {
  const data = await fetch(`http://localhost:3001/search/${keyword}`, {
    cache: "no-store",
  });
  const result = await data.json();

  return result;
};

const SearchResults = async ({ params }: { params: { keyword: string } }) => {
  const products = await getBoardgame(params.keyword);
  return (
    <div>
      <div className="text-base mb-5">
        Showing results for: "{decodeURI(params.keyword)}"
      </div>
      <div className="">
        {products.map((store: Store) =>
          store.products.length === 0 ? null : (
            <div className="overflow-x-auto">
              <h1 className="text-base overflow-y-hidden">{store.store}</h1>
              <ScrollArea className="w-full">
                <div className="flex w-max space-x-4 p-4">
                  {store.products?.map((product: Product, i: number) => {
                    return (
                      <Card
                        key={i}
                        className="w-40 h-60 flex flex-col justify-between"
                      >
                        <CardHeader className=" p-3">
                          <CardTitle className=" text-base line-clamp-2">
                            {product.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="w-full h-full px-3 relative">
                          <Image
                            src={product.fullImageLink}
                            alt={product.name}
                            layout="fill"
                            objectFit="contain"
                          />
                        </CardContent>
                        <CardFooter className=" flex justify-between p-3">
                          <Button>
                            <a
                              href={product.fullProductLink}
                              target="_blank"
                              className="text-xs"
                            >
                              Visit
                            </a>
                          </Button>
                          <p className="text-md">{product.price.match(/\d/) ? product.price : "N/A"}</p>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
