
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CountrySelect from '../../components/country-select';
import BasicDatePicker from '../../components/basic-date-picker';
import { TextField, Autocomplete } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EventIcon from '@mui/icons-material/Event';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { useEffect } from 'react';
export default function Home() {

  // var amadeus = new Amadeus({
  //   clientId: 'yI4chDhqr9o6VUFvgTDJIMGsF0hRatrC',
  //   clientSecret: '3t4zl2sBqQ9Ekq3y'
  // });

  // amadeus.dutyOfCare.diseases.covid19AreaReport.get({ countryCode: 'US' }).then(
  //   (response) => console.log(response.data)
  // ).catch((responseError) => {
  //   console.log(responseError.code);
  // });


  fetch("/api/US/JP")
    .then(response => response.json())
    .then(data => console.log(data))
  // useEffect(()=> {
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <meta property="og:title" content="Be Prepared For Traveling During the Age of COVID" />
        <meta property="og:description" content="Know what restrictions are in place and what documents you need when you travel internationally - in seconds!" />
        <meta property="og:image" content="https://unsplash.com/photos/rf6ywHVkrlY" />
        {/* Not sure what the title is - anything is fine! */}
        <title>COVID Travel Restrictions by Country</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Adding the data-testid here is one way to select this element */}
        <h1 className={styles.title} data-testid="heading">
          Traveling around the Coronavirus
        </h1>

        <Image src="/airplane-corona.svg" alt="Airplane Logo" width={300} height={300} />

        <p className={styles.description}>
          See what traveling restrictions will affect your trip
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            {/* <h2>Documentation &rarr;</h2> */}
            <div className={styles.rowC}>
              <FlightTakeoffIcon sx={{ fontSize: 30 }} className={styles.icon} />
              <CountrySelect textLabel={"Departing from"} />
            </div>
            <div className={styles.rowC}>
              <ConnectingAirportsIcon sx={{ fontSize: 30 }} className={styles.icon} />
              <CountrySelect textLabel={"Connecting through"} />
            </div>
            <div className={styles.rowC}>
              <FlightLandIcon sx={{ fontSize: 30 }} className={styles.icon} />
              <CountrySelect textLabel={"Arriving at"} />
            </div>
            <div className={styles.rowC}>
              <VaccinesIcon sx={{ fontSize: 30 }} className={styles.icon} />
              <Autocomplete
                disablePortal
                id="vaccination-status"
                options={["Not vaccinated", "Fully vaccinated", "Fully vaccinated with boosters"]}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Vaccination status" variant="standard" />}
              />
            </div>
            <div className={styles.rowC}>
              <EventIcon sx={{ fontSize: 30 }} className={styles.icon} />
              <BasicDatePicker />
            </div>

          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Map goes here</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        <p>Made by *insert name here</p>
      </footer>
    </div>
  )
}