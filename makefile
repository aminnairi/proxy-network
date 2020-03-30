.PHONY: start stop restart

start:
	make --directory nginx start
	make --directory client start
	make --directory server start

stop:
	make --directory server stop
	make --directory nginx stop
	make --directory client stop

restart: stop start
