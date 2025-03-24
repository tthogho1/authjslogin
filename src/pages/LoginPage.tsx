import React from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { AuthResponse } from '../type/types';

const LoginPage: React.FC = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse): Promise<void> => {
    try {
      if (!credentialResponse.credential) {
        throw new Error('認証情報が見つかりません');
      }

      // バックエンドにGoogle認証情報を送信
      const response = await fetch('http://localhost:3000/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          credential: credentialResponse.credential
        })
      });

      const data: AuthResponse = await response.json()

      // バックエンドからの応答を使用してサインイン
      const isSignedIn = signIn({
        auth: {
          token: data.token,
          type: 'Bearer'
        },
        refresh: data.refreshToken,
        userState: data.user
      });

      if (isSignedIn) {
        // 認証成功後のリダイレクト
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Google認証エラー:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>ログイン</h1>
      
      {/* 他のログインオプション */}
      
      <div className="google-login-button">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => console.log('ログイン失敗')}
          useOneTap
        />
      </div>
    </div>
  );
};

export default LoginPage;