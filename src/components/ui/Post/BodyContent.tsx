import { ApiContent } from "@/types/Post/Post";
import parse, { domToReact } from "html-react-parser";


interface IBodyContent {
  body: Pick<ApiContent, "id" | "name" | "body">;
  middleBanner?: React.ReactNode;
}

export default function BodyContent({
  body,
middleBanner
}: IBodyContent) {
  let paragraphCount = 0;

  return (
    <div
      id={`body_${body.id}`}
      className="mx-auto text-[#5E5E5E] leading-8 text-justify"
    >
      {parse(body.body, {
        replace: (domNode) => {
          
          if (domNode.type === "tag" && domNode?.name === "p") {
            paragraphCount++;

            if (paragraphCount === 1) {
              return (
                <>
                  {domToReact([domNode])}
                   {middleBanner}
                </>
              );
            }
          }
        },
      })}
    </div>
  );
}
