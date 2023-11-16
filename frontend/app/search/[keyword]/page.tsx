import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const getBoardgame = async (keyword: string) => {
  const data = await fetch(`http://localhost:3001/search/${keyword}`);
  const result = await data.json();

  return result;
};

const SearchResults = async ({ params }: { params: { keyword: string } }) => {
  const products = await getBoardgame(params.keyword);
  return (
    <div>
      <div>Showing results for {params.keyword}</div>
      {products.map((store: any) => (
        <div className="overflow-x-auto">
          <h2>{store.store}</h2>
          <div className="grid gap-8 grid-flow-col">
            {/* {store.products?.map((product: any, i: number) => {
              return <div>{i+1}: {product.name} / {product.price}</div>;
            })} */}
            {store.products?.map((product: any, i: number) => {
              return (
                <Card
                  key={i}
                  className="w-[200px] h-[300px] flex flex-col justify-between"
                >
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <Avatar>
                      <p>placeholder for img</p>
                    </Avatar>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <Button>link</Button>
                    <p>{product.price}</p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;