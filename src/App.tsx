import { MobileOnly } from "./presentation/components/MobileOnly";
import { AppNavigator } from "./presentation/navigation/AppNavigator";

function App() {
  return (
    <MobileOnly mobileMaxWidth={1180} tabletMaxWidth={1180}>
      <AppNavigator />
    </MobileOnly>
  );
}

export default App;