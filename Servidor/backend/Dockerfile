FROM node:18

# Create app directory
WORKDIR /usr/src/app

RUN npm install prisma --save-dev
RUN npm install @prisma/client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./servidor/package*.json .
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY ./servidor/ .

EXPOSE 3000

CMD [ "node", "app.js" ]