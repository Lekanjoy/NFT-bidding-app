import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    >
      <div className="w-full h-[100px] bg-[rgba(225,_225,_225,_0.3)] rounded-lg"></div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2">
          <p className="w-16 h-6 rounded-md bg-[rgba(225,_225,_225,_0.3)]"></p>
          <p className="w-16 h-6 rounded-md bg-[rgba(225,_225,_225,_0.3)]"></p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="w-16 h-6 rounded-md bg-[rgba(225,_225,_225,_0.3)]"></p>
          <p className="w-16 h-6 rounded-md bg-[rgba(225,_225,_225,_0.3)]"></p>
        </div>
      </div>
      <div className="flex gap-x-3 justify-between mt-3">
        <p className="w-full h-12 rounded-md bg-[rgba(225,_225,_225,_0.3)]"></p>
        <p className="w-full h-12 rounded-md bg-[rgba(225,_225,_225,_0.3)]"></p>
      </div>
    </div>
  );
}

export { Skeleton };
