# use Node.js version 16 as the base image
FROM node:16-alpine

# set the working directory to /app
WORKDIR /app

# copy the package.json file to the working directory
COPY package*.json .

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# Expose the port
EXPOSE 3000

# start the app
CMD ["npm", "start"]
