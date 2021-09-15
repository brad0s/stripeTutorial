import React, {useState, useEffect} from 'react';
import Navigation from './src/util/Navigation';
import {StripeProvider} from '@stripe/stripe-react-native';
import {fetchPublishableKey} from './src/util/helpers';

export default function App() {
  const [publishableKey, setPublishableKey] = useState();

  useEffect(() => {
    const init = async () => {
      const publishableKey = await fetchPublishableKey();
      if (publishableKey) {
        setPublishableKey(publishableKey);
      }
    };
    init();
  }, []);
  return (
    <StripeProvider publishableKey={publishableKey}>
      <Navigation />
    </StripeProvider>
  );
}
