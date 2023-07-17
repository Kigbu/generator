import React from "react";
import { Controller } from "react-hook-form";

interface AmountInputProps {
  name: string;
  control: any;
  type?: string;
  rules: any;
  defaultValue?: number;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = React.memo(
  ({
    name,
    control,
    rules,
    defaultValue,
    type,
    placeholder,
    label,
    disabled,
    isRequired,
  }: AmountInputProps) => {
    return (
      <>
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({
            field: { onChange, value },
            fieldState: { error },
          }: any) => (
            <>
              {label && (
                <label>
                  {label}
                  <>{isRequired && <span className="required">*</span>}</>
                </label>
              )}

              <input
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={(text) => {
                  onChange(text);
                }}
                className="mb-0 px-2"
                style={{ height: "40px", width: "100px" }}
              />

              {error?.message && (
                <p className="text-red-500 ajax-response error">
                  {error?.message}
                </p>
              )}
            </>
          )}
        />
      </>
    );
  }
);

export default AmountInput;
