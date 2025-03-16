import React, { useState } from 'react';
import NativeDatePicker from 'react-native-date-picker';

type NativeDatePickerProps = React.ComponentProps<typeof NativeDatePicker>;

export type DatePickerProps = {
  isVisible: boolean;
  close(): void;
  onConfirm: (date: Date) => void;
} & Omit<
  NativeDatePickerProps,
  'open' | 'date' | 'onConfirm' | 'onCancel' | 'modal'
>;

export function DatePicker({ isVisible, close, onConfirm, ...rest }: DatePickerProps) {
  const [date, setDate] = useState(new Date());

  const handleConfirm = (nextDate: Date) => {
    setDate(nextDate);
    onConfirm(nextDate);
  };

  return (
    <NativeDatePicker
      modal
      open={isVisible}
      date={date}
      onConfirm={handleConfirm}
      onCancel={close}
      {...rest}
    />
  );
}
