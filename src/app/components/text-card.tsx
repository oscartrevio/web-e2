import React from "react";

interface TextCardProps {
  title: string;
  description: string;
  textSide: "left" | "right";
}

export default function TextCard({
  title,
  description,
  textSide,
}: TextCardProps) {
  return (
    <>
      <div className="flex flex-row gap-10">
        {textSide === "right" && (
          <div className="bg-gray-200 rounded-md w-full aspect-video h-full flex-1"></div>
        )}
        <div className="flex gap-4 flex-col flex-1">
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              {description}
            </p>
          </div>
        </div>
        {textSide === "left" && (
          <div className="bg-gray-200 rounded-md w-full aspect-video h-full flex-1"></div>
        )}
      </div>
    </>
  );
}
