import { HomeScreen } from "./presentation/screens/home/HomeScreen";
import { MobileOnly } from "./presentation/components/MobileOnly";

function App() {
  return (
    <MobileOnly maxWidth={430}>
      <HomeScreen />
    </MobileOnly>
  );
}

export default App;
