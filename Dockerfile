FROM python:2.7

WORKDIR /opt/pelagos-client

RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get update
RUN	apt-get install -y nodejs unzip

RUN	npm install -g testem
RUN	pip install --upgrade pip
RUN pip install nose click docopt python-geohash unittest2 selenium

WORKDIR /opt/pelagos-client/ui_tests

EXPOSE 8000:8000
ENTRYPOINT python server.py
