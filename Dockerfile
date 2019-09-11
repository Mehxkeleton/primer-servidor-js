FROM node
MAINTAINER Horacio Adame
ENV HOME /root
RUN git clone https://github.com/Mehxkeleton/primer-servidor-js.git
CMD node ./primer-servidor-js/server.js

