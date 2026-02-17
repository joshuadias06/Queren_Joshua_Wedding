import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../screens/home/HomeScreen";
import { RsvpScreen } from "../screens/rsvp/RsvpScreen";
import { GiftsScreen } from "../screens/gifts/GiftScreen";
import { LocationScreen } from "../screens/location/LocationScreen";
import { ScrollToTop } from "./ScrollToTop";

export function AppNavigator() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/rsvp" element={<RsvpScreen />} />
        <Route path="/gifts" element={<GiftsScreen />} />
        <Route path="/location" element={<LocationScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
