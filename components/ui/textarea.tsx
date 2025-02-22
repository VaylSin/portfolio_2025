import * as React from "react";

import { cn } from "../../lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ label, className, ...props }, ref) => {
		return (
			<div className="textarea-wrapper">
				<label htmlFor={props.name} className="sr-only">
					{label}
				</label>
				<textarea
					className={cn(
						"flex min-h-[80px] w-full rounded-md border border-white/10 focus:border-accent bg-primary px-4 py-5 text-base shadow-sm placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
						className
					)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);

Textarea.displayName = "Textarea";

export { Textarea };
