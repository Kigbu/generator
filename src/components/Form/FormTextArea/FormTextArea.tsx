import React from "react";
import { Controller } from "react-hook-form";

interface FormTextAreaProps {
  name: string;
  control: any;

  rules: any;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
}

const FormTextArea: React.FC<FormTextAreaProps> = React.memo(
  ({
    name,
    control,
    rules,
    defaultValue,

    placeholder,
    label,
    disabled,
    isRequired,
  }: FormTextAreaProps) => {
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
            <div className="order-notes">
              <div className="checkout-form-list">
                {label && (
                  <label>
                    {label}
                    <>{isRequired && <span className="required">*</span>}</>
                  </label>
                )}

                <textarea
                  placeholder={placeholder}
                  disabled={disabled}
                  value={value}
                  cols={30}
                  rows={10}
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
            </div>
          )}
        />
      </>
    );
  }
);

export default FormTextArea;
