import React, {useState, useEffect} from 'react';
import Navigation from './src/util/Navigation';
import {StripeProvider} from '@stripe/stripe-react-native';
import {fetchPublishableKey} from './src/util/helpers';

export default function App() {
  const [publishableKey, setPublishableKey] = useState();
  // const publishableKey =
  //   'pk_test_51JY5HsJk5tf5jWqw176bzLAlYVFCCTDoO0HQduVWwN2oSVHIJeke0eQYoEjC4MUBiOGrXSs0tzRVwTkgce37wm6W00R1cFBGiw';

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
