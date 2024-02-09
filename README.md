# Newsfeed App 

## Description
This application fetches data from https://newsapi.org/ and display the news articles.

## Installation
To run the app locally, follow these steps:

1. Install dependencies: 
```
npm i
```
2. Navigate to the iOS directory and install pods: 
```
cd ios
```
3. Return to the project root:
```
cd ..
```
## Usage
To run the app locally, use the following command:
```
npm run ios
```
This command will build and run the app on an iOS simulator.

## Testing
To run tests, execute the following command:
```
npm run test
```
This command will run all the unit tests for the project.

## Testing Deep Links
To test deep links, use the following command:
```
xcrun simctl openurl booted "newsfeed://home/3"
```
This command will open the specified deep link in the booted iOS simulator. Make sure to replace `"newsfeed://home/3"` with the deep link you want to test.





