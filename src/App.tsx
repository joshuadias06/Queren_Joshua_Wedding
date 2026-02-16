import { MobileOnly } from "./presentation/components/MobileOnly";
import { AppNavigator } from "./presentation/navigation/AppNavigator";

function App() {
  return (
    <MobileOnly maxWidth={430}>
      <AppNavigator />
    </MobileOnly>
  );
}

export default App;
