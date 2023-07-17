import React from "react";
import { Controller } from "react-hook-form";

interface InputProps {
  name: string;
  control: any;
  type?: string;
  rules: any;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
}

const FormInput: React.FC<InputProps> = React.memo(
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
  }: InputProps) => {
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
            <div className="checkout-form-list">
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
              />

              {error?.message && (
                <p className=" ajax-response error text-danger">
                  {error?.message}
                </p>
              )}
            </div>
          )}
        />
      </>
    );
  }
);

export default FormInput;
