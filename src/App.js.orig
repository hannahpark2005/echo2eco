import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import AOS from 'aos';
import { addDoc, collection, doc, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import {
  alertsAtom,
  checkedSensorsAtom,
  invokeNewFetchAtom,
  sensorsAtom,
} from './data/atoms';
import { db } from './lib/firebaseConfig';
import theme from './lib/theme';
import Analytics from './pages/Analytics';
import Home from './pages/Home';
import About from './pages/About';
import Reports from './pages/Reports';
import './App.css';
// import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import 'aos/dist/aos.css';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [alertsData, setAlertsData] = useRecoilState(alertsAtom);
  const [sensorsData, setSensorsData] = useRecoilState(sensorsAtom);
  const [checkedSensors, setCheckedSensors] =
    useRecoilState(checkedSensorsAtom);
  const [invokeNewFetch, setInvokeNewFetch] =
    useRecoilState(invokeNewFetchAtom);
  // Will use a global state management library like
  // Redux or React Context API to manage the state of the user
  // Recoil is another option

  useEffect(() => {
    AOS.init();
    // let alertRes = [];
    // let sensorRes = [];

    // const fetchData = async () => {
    //   try {
    //     const q = query(collection(db, 'alerts'));
    //     const querySnapshot = await getDocs(q);
    //     // console.log(querySnapshot);
    //     if (!querySnapshot.empty) {
    //       querySnapshot.forEach((doc) => {
    //         const data = doc.data();
    //         const docId = doc.id; // Get the document ID
    //         const finalData = { ...data, docId };

    //         // console.log('Sensor data:', finalData);
    //         // res.push(data);
    //         alertRes = [...alertRes, finalData];
    //         // console.log(alertRes);
    //       });
    //     }
    //     const q1 = query(collection(db, 'sensors'));
    //     const querySnapshot1 = await getDocs(q1);
    //     // console.log(querySnapshot1);
    //     if (!querySnapshot1.empty) {
    //       querySnapshot1.forEach((doc) => {
    //         const sensorData = doc.data();
    //         const docId = doc.id; // Get the document ID
    //         const finalData = { ...sensorData, docId };
    //         console.log('Sensor data:', finalData);
    //         // res.push(data);
    //         sensorRes = [...sensorRes, finalData];
    //         // console.log(sensorRes);
    //       });
    //     }
    //     setAlertsData(alertRes);
    //     setSensorsData(sensorRes);

    //     // array of objects -> name: string

    //     const sensorNameData = sensorRes.map((object, index) => {
    //       return object.name;
    //     });
    //     setCheckedSensors(sensorNameData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   setIsLoading(false);
    // };

    //fetchData();

    const fetchStaticData = async () => {
      try {
        const alertsRes = await fetch('/alerts-scenario-data.json', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (alertsRes.ok) {
          const alertsData = await alertsRes.json();
          setAlertsData(alertsData);
        }

        const sensorRes = await fetch('/sensors-data.json', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (sensorRes.ok) {
          const sensorData = await sensorRes.json();
          setSensorsData(sensorData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaticData();

    // FETCH DATA FROM API (FOR NOW STATIC DATA.JS)
    // const fetchData = async () => {

    // const res = await fetch('http://localhost:3001/getData', {
    //   method: 'GET',
    // });
    // Backend server at port 3001 will handle the request and send back the response
    // const data = await res.json();
    //}
  }, [invokeNewFetch, setAlertsData, setCheckedSensors, setSensorsData]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuth) {
    return (
      <Layout>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home alertsData={alertsData} checkedSensors={checkedSensors} />
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/reports/:docId?' element={<Reports />} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} /> */}
        </Routes>
        <Footer />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home alertsData={alertsData} checkedSensors={checkedSensors} />
            }
          />
          <Route exact path='/analytics' element={<Analytics />} />
          <Route path='/about' element={<About />} />
          <Route path='/reports/:docId?' element={<Reports />} />
          {/* <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<LogIn />} /> */}
        </Routes>
      </Layout>
    );
  }
}

export default App;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {children}
      <LoadingSpinner />
    </ThemeProvider>
  );
};
