import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../screens/home/HomeScreen";
import { RsvpScreen } from "../screens/rsvp/RsvpScreen";
import { GiftsScreen } from "../screens/gifts/GiftScreen";

export function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/rsvp" element={<RsvpScreen />} />
        <Route path="/gifts" element={<GiftsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
