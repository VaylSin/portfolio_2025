import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ label, ...props }, ref) => {
		return (
			<div className="input-wrapper">
				<label htmlFor={props.name} className="sr-only">
					{label}
				</label>
				<input ref={ref} {...props} className="input" />
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input };
