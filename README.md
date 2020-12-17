# A chrome extension that searches for Gifs on Giphy

![screencast 2019-07-12 11-10-32](https://user-images.githubusercontent.com/17147805/61150076-63080e00-a497-11e9-864e-63afa99b2588.gif)


## How to use?

### Step 0: Get an API KEY from giphy.com
  1. [Link]([Link](https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key))
  2. Copy the api key, you'll need it soon.
### Step 1: Build
  1. Clone/download this repo
  2. Navigate to the directory
  3. Run `sed 's/shhhhh/vTIpYBc3I5jgBnqWKy1SMccAAXfpSRvy/' ./src/secret.js.tmpl > ./src/secret.js` to generate `secret.js` which will include your giphy api key.
  4. Open src/secret.js in your favorite text editor.
  5. Run `npm install` to install the dependencies
  6. Run `npm run build` to build the app

### Step 2: Add it to chrome
  1. Open chrome
  2. Click on the action icon on the top right. Them click on More tools > Extension.
    ![image](https://user-images.githubusercontent.com/17147805/61150040-52579800-a497-11e9-8555-516191c44b6c.png)
  3. Make sure to have "Developer Mode" enabled (on the top right).
  4. Click on "Load Unpacked" on the top left, and select the entire `/build` directory generated from step 1.
    ![screencast 2019-07-12 11-29-45](https://user-images.githubusercontent.com/17147805/61150502-6fd93180-a498-11e9-9984-b179e6b749c7.gif)
### Step 3: Start searching gifs!

## License
WTFPL : http://www.wtfpl.net/txt/copying/
