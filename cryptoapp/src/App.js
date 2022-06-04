import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './Component'
import { Link } from 'react-router-dom'
import store from './app/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app" >
            <div className='navbar'>
              <Navbar />
            </div>
            <div className='main'>
              <Layout>
                <div className='routes'>
                  <Routes>
                    <Route exact path='/' element={<Homepage />}>
                      
                    </Route>
                    <Route exact path='exchanges' element={<Exchanges />}>
                      
                    </Route>
                    <Route exact path='cryptocurrencies' element={<Cryptocurrencies />}>
                      
                    </Route>
                    <Route exact path='/crypto/:id' element={<CryptoDetails />}>
                      
                    </Route>
                    <Route exact path='/news' element={<News />}>
                      
                    </Route>
                  </Routes>
                </div>
              </Layout>
              <div className='footer'>  
                <Typography.Title level={5} style={{color: 'white', textAlign : 'center'}}>
                  Crypto-Crypto <br/>
                  All Rights Reversed
                </Typography.Title>
                <Space>
                  <Link to="/">Home</Link>
                  <Link to="/exchanges">Exchanges</Link>
                  <Link to="/news">News</Link>
                </Space>
              </div>
            </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
