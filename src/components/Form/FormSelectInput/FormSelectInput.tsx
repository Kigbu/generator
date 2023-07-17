import React from "react";
import { Controller } from "react-hook-form";
import { SelectItem } from "../../../core/interfaces/select-item.interface";

interface SelectInputProps {
  name: string;
  control: any;
  options: any;
  rules: any;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  setValue: any;
}

export default function FormSelectInput({
  name,
  control,
  rules,
  defaultValue,
  options,
  placeholder,
  label,
  disabled,
  setValue,
}: SelectInputProps) {
  const onChange = (selectedValue: any) => {
    setValue(name, selectedValue);
    // if (onSelectChange) onSelectChange(selectedValue, data);
  };

  return (
    <div className="w-full mb-2">
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { value }, fieldState: { error } }: any) => (
          <div className="country-select">
             <label>
                            {label} <span className="required">*</span>
                          </label>
            <select
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              
              className={" w-full bg-gray-500 "}
            >
              <option className="font-sans" value={undefined}>
                {placeholder}
              </option>
              {options?.map((option: SelectItem, index: number) => (
                <option
                  key={index.toString()}
                  value={option.value}
                  className="font-sans font-regular text-[14px] "
                >
                  {option.label}
                </option>
              ))}
            </select>

            <small className="p-error text-[10px] font-sans">
              {error?.message}
            </small>
          </div>
        )}
      />
    </div>
  );
}
