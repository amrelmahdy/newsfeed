import React from 'react';
import Navigation from './navigation';

import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
