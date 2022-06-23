        if (v == btnDatePicker) {

            final Calendar c = Calendar.getInstance();
            mYear = c.get(Calendar.YEAR);
            mMonth = c.get(Calendar.MONTH);
            mDay = c.get(Calendar.DAY_OF_MONTH);


            DatePickerDialog datePickerDialog = new DatePickerDialog(this,
                    new DatePickerDialog.OnDateSetListener() {

                        @Override
                        public void onDateSet(DatePicker view, int year,
                                              int monthOfYear, int dayOfMonth) {
                            DateFormat format =  DateFormat.getDateInstance();
                            c.set(year, monthOfYear, dayOfMonth);
                            txtDate.setText(format.format(c.getTime()));

                        }
                    }, mYear, mMonth, mDay);
            datePickerDialog.show();
        }