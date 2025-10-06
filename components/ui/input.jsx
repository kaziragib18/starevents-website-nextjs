import * as React from "react";

import { cn } from "@component/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-secondary selection:bg-primary selection:text-primary-foreground flex h-[54px] w-full min-w-0 rounded-none border border-border bg-white px-6 py-2  text-primary transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm focus:border-accent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",
        "",
        "aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
