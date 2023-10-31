import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/MainPage.css';
import AppRouter from './components/AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { userCheck } from './http/UserAPI';
import Loading from './UI/loading/Loading';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      userCheck().then(data => {
        user.setUser(true);
        user.setIsAuth(true);
      }).catch(e => console.log(e.response.data)).finally(() => setLoading(false))
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
})

export default App;