.PHONY: start stop restart

start:
	make --directory nginx start
	make --directory server start
	make --directory client start

stop:
	make --directory client stop
	make --directory server stop
	make --directory nginx stop

restart: stop start
