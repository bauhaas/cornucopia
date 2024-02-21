/* eslint-disable @typescript-eslint/no-unused-vars */

import { Card } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

export const ActorCard = () => {
  // const { data: actorFilmography } = useQuery({
  //   queryKey: ["getActorFilmography"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `${import.meta.env.VITE_BASE_API_URL}/api/actors/${"234352"}/filmography`
  //     );

  //     return res.data;
  //   },
  // });

  // console.log(actorFilmography);

  return (
    <>
      {/* <Card className="">
        <CardHeader>
          <CardTitle className="flex flex-row gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <div>
              Margot Robbie
              <Progress value={15} className=" bg-red-400" />
            </div>
          </CardTitle>
          <CardDescription>dd</CardDescription>
        </CardHeader>

        <CardContent>content</CardContent>
      </Card> */}
      <Card className="bg-slate-100 hover:bg-white">
        <div className="flex items-start flex-col p-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="@tomcruise" src="/placeholder-avatar.jpg" />
              <AvatarFallback className="border-2 border-black">
                MR
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-lg font-bold">Margot Robie</h2>
              <Progress value={15} className="bg-slate-200 h-2" />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
