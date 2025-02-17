import React from "react";
import TextCard from "../components/text-card";

export default function Page1() {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="container mx-auto flex flex-col gap-20 p-5">
          <TextCard
            title={"Cupidatat ex quis mollit est veniam non occaecat nulla."}
            description={
              "Commodo ad amet dolor occaecat fugiat. Consectetur nulla ut non velit duis ea tempor consequat proident sint elit enim consequat nisi in."
            }
            textSide={"left"}
          />
          <TextCard
            title={"Cupidatat ex quis mollit est veniam non occaecat nulla."}
            description={
              "Commodo ad amet dolor occaecat fugiat. Consectetur nulla ut non velit duis ea tempor consequat proident sint elit enim consequat nisi in."
            }
            textSide={"right"}
          />
          <TextCard
            title={"Cupidatat ex quis mollit est veniam non occaecat nulla."}
            description={
              "Commodo ad amet dolor occaecat fugiat. Consectetur nulla ut non velit duis ea tempor consequat proident sint elit enim consequat nisi in."
            }
            textSide={"left"}
          />
          <TextCard
            title={"Cupidatat ex quis mollit est veniam non occaecat nulla."}
            description={
              "Commodo ad amet dolor occaecat fugiat. Consectetur nulla ut non velit duis ea tempor consequat proident sint elit enim consequat nisi in."
            }
            textSide={"right"}
          />
        </div>
      </div>
    </div>
  );
}
