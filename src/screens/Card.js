import {
  CardField,
  CardFieldInput,
  useStripe,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import {API_URL} from '../config/StripeConfig';

export default function Card() {
  // const [card, setCard] = useState(CardFieldInput.Details | null);
  // const {confirmPayment, handleCardAction} = useStripe();
  const [name, setName] = useState();
  const {confirmPayment, loading} = useConfirmPayment();
  const [cardFocused, setCardFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);

  const handlePayPress = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethodType: 'card',
        currency: 'usd',
      }),
    });
    const {clientSecret} = await response.json();

    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails: name,
    });

    if (error) {
      alert(`Error: ${error.code} ${error.message}`);
    } else if (paymentIntent) {
      alert(`Payment successful: ${paymentIntent.id}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Card</Text>
      <TextInput
        style={[styles.input, nameFocused && {borderBottomColor: '#5941A9'}]}
        placeholder="Name"
        placeholderTextColor="#B8B8B8"
        onChangeText={setName}
        value={name}
        keyboardType="default"
        onFocus={() => {
          setNameFocused(true);
        }}
        onBlur={() => {
          setNameFocused(false);
        }}
      />
      <CardField
        postalCodeEnabled={false}
        style={[styles.cardField, cardFocused && {borderColor: '#5941A9'}]}
        cardStyle={{textColor: '#fff'}}
        // onCardChange={cardDetails => setCard(cardDetails)}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
          setCardFocused(true);
        }}
        onBlur={() => {
          setCardFocused(false);
        }}
      />
      <Pressable
        style={styles.button}
        onPress={handlePayPress}
        disabled={loading}>
        <Text style={styles.label}>Pay</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
    // alignItems: 'center',
    paddingHorizontal: 5,
  },
  cardField: {
    height: 50,
    borderColor: '#2F2258',
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 20,
  },
  text: {
    color: '#fff',
  },
  button: {
    borderRadius: 8,
    width: 150,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5941A9',
    height: 40,
    alignSelf: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#fff',
  },
  input: {
    color: '#fff',
    borderBottomColor: '#2F2258',
    borderBottomWidth: 2,
    height: 40,
    fontSize: 17,
    letterSpacing: 1,
    paddingHorizontal: 10,
  },
});
