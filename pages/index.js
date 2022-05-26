import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CountrySelect from '../components/countryselect';
import { TextField, Autocomplete } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EventIcon from '@mui/icons-material/Event';
import VaccinesIcon from '@mui/icons-material/Vaccines';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
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
            <p><EventIcon /> Arrival date</p>
            <p><VaccinesIcon /> Vaccination status</p>

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
