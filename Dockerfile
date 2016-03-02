FROM node:4.3

RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

RUN mkdir /src
RUN npm install gulp -g
RUN npm install bower -g

WORKDIR /src

COPY . /src
RUN npm install
RUN ./node_modules/bower/bin/bower install --allow-root
RUN gulp dist

EXPOSE 3001

CMD gulp production
