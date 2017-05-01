FROM node:6.3.1

# Run a command for creating the following path on container
RUN mkdir -p /usr/web-app

# Sets the work directory of our app to be the new path
WORKDIR /usr/web-app

# Copy all files from current directory to the new path in container
COPY . /usr/web-app

# Run the command for installing our node dependencies
RUN npm install

# Define the command that will execute when the container start
CMD npm start
