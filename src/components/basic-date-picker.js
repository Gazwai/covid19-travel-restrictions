import * as React from 'react';
import TextField from '@mui/material/TextField';
import frLocale from 'date-fns/locale/fr';
import enLocale from 'date-fns/locale/en-US';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const localeMap = {
  en: enLocale,
  fr: frLocale,
};

const maskMap = {
  en: '__/__/____',
  fr: '__/__/____',
};

export default function BasicDatePicker() {
  const [locale, setLocale] = React.useState('en');
  const [value, setValue] = React.useState(null);

  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label="Arrival date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{ width: 250 }} variant="standard" />}
      />
      {/* Localization date picker still being worked on */}
      {/* <div>
        <ToggleButtonGroup value={locale} exclusive sx={{ mb: 2, display: 'block' }}>
          {Object.keys(localeMap).map((localeItem) => (
            <ToggleButton
              key={localeItem}
              value={localeItem}
              onClick={() => selectLocale(localeItem)}
            >
              {localeItem}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <MobileDatePicker
          label="Arrival date"
          mask={maskMap[locale]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ width: 250 }} variant="standard" />}
        />
      </div> */}
    </LocalizationProvider>
  );
}
