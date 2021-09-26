FROM node:16-buster-slim

WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

# Copy the rest of the source code into the image
COPY . .

# Build the source code, converting from Typescript to Javascript
RUN npm run build

# Configure the run command
CMD ["npm", "run", "start:prod"]