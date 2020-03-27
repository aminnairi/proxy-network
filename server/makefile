.PHONY: start stop restart install build

start:
	docker-compose up --detach server

stop:
	docker-compose down --remove-orphans --volumes --timeout 0

restart: stop start

install:
	docker-compose run --rm npm instal

build:
	docker-compose run --rm npm run build
