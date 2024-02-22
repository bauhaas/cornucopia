import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Separator } from "../../components/ui/separator";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableLocation,
  DraggableProvided,
} from "@hello-pangea/dnd";
import { Hero } from "./hero";
import { MovieCard } from "./MovieCard";
import { DefaultService } from "src/services";

export type ColorMap = { [key: string]: string[] };

type DraggableItemProps = {
  movie: string;
  provided: DraggableProvided;
};

const DraggableItem = ({ movie, provided }: DraggableItemProps) => (
  <div
    {...provided.dragHandleProps}
    {...provided.draggableProps}
    ref={provided.innerRef}
  >
    <MovieCard title={movie} />
  </div>
);

type ListItemProps = {
  data: string[];
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
};

const ListItem = ({ listId, listType, data }: ListItemProps) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={false}
    >
      {(dropProvided) => (
        <div {...dropProvided.droppableProps}>
          <div>
            <div className="flex gap-2 flex-col bg-slate-50 p-4 rounded-md shadow-lg">
              <h3 className="text-lg font-bold">{listId}</h3>
              <Separator className="bg-black w-1/2 mb-2" />
              <ul className="flex gap-2 " ref={dropProvided.innerRef}>
                {data.map((movie, index) => (
                  <Draggable key={movie} draggableId={movie} index={index}>
                    {(dragProvided) => (
                      <DraggableItem movie={movie} provided={dragProvided} />
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};

// a little function to help us with reordering the result
const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reorderColors = (
  colors: any,
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...colors[source.droppableId]];
  const next = [...colors[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    return {
      ...colors,
      [source.droppableId]: reordered,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...colors,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };
};

interface AccType {
  "Recently Watched": string[];
  "Watch list": string[];
  "Top 10": string[];
}

export const Home = () => {
  // const { data: watchedMovies } = useQuery({
  //   queryKey: ["getWatchedMovies"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       // `${import.meta.env.VITE_BASE_API_URL}/api/users/1/watched-movies`
  //       `https://cornucopia-korkrane.vercel.app/api/users/1/watched-movies`
  //     );

  //     return res.data;
  //   },
  // });

  const { appControllerGetHello } = DefaultService;

  const { data: test } = useQuery({
    queryKey: ["getHello"],
    queryFn: appControllerGetHello,
  });

  console.log(test, "lol");
  // console.log(watchedMovies);
  const [categories, setCategories] = useState({
    "Recently Watched": ["item 1", "item 2", "item 3"],
    "Watch list": ["item 4"],
    "Top 10": ["item 5", "item 6"],
  });

  return (
    <>
      <div className=" flex flex-col top-0 z-[-2] h-full w-full bg-[radial-gradient(#cbd5e1_1px,#f1f5ff_1px)] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:16px_16px]">
        <Hero />
        <div className="container">
          <DragDropContext
            onDragEnd={({ destination, source, type }) => {
              // dropped outside the list
              if (!destination) {
                return;
              }

              // User moves a list
              if (type === "DEFAULT") {
                const ordered = reorder(
                  Object.keys(categories),
                  source.index,
                  destination.index
                );
                setCategories((prevColors) => {
                  const orderedColors = ordered.reduce(
                    (acc: AccType, key: keyof AccType) => {
                      acc[key] = prevColors[key];
                      return acc;
                    },
                    {} as AccType
                  );
                  return orderedColors;
                });
              }

              // If the destination is a different list, we need to handle moving items between lists
              if (source.droppableId !== destination.droppableId) {
                // Logic for moving items between lists
                if (type === "CARD")
                  setCategories((prevColors) => ({
                    ...prevColors,
                    ...reorderColors(prevColors, source, destination),
                  }));
              } else {
                // If the destination is the same list, we can use the reorderColors function
                // setCategories((prevColors) => ({
                //   ...prevColors,
                //   ...reorderColors(prevColors, source, destination),
                // }));
              }
            }}
          >
            <Droppable droppableId="listContainer" direction="vertical">
              {(provided) => (
                <div
                  className="flex flex-col gap-4"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {Object.entries(categories).map(([k, v], index) => (
                    <Draggable key={k} draggableId={k} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ListItem
                            internalScroll
                            listId={k}
                            listType="CARD"
                            data={v}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </>
  );
};
