import './App.css';
import Market from './pages/market/Market'
import { QueryClient, QueryClientProvider } from 'react-query'

 // Create a client
 const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-wrap">
        <div className="container">
          <Market></Market>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
