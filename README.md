# https://github.com/diogo-correia-tec/civi-frontend-mobile-exercise

This test has two folder api containing code api/golang and app containing app/react native

## Instruction to run api

```bash
cd api && go run main.go
```

## Instruction to run app

Change on app/App.js "http://192.168.250.33:9000/messages" to your IP don't use localhost.

```bash
cd app && npm install

//Android
npx react-native run-android

//iOS
npx react-native run-ios
```

After run app you get instructions on terminal to run app on android, ios or web. If you not have ios or android you can select the option 'w'


