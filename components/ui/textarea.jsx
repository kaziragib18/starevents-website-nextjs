import * as React from "react";

import { cn } from "@component/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input focus:border-accent placeholder:text-secondary  flex field-sizing-content min-h-16 w-full rounded-md border border-border bg-white px-6 py-4 text-base text-primary transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
