import createStore from 'react-auth-kit/createStore';

// 認証状態の型定義
interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    picture: string;
  } | null;
}

// 認証状態を管理するための設定

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

export {store};
